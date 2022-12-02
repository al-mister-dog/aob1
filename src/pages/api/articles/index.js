import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { parseDate } from "../../../helpers/api/parseDate";
import { prisma } from "../../../lib/prisma";
// Path: src/pages/api/articles/index.js

async function getPaginatedPrismaPosts({ page, pageSize }) {
  const posts = await prisma.post.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}

async function get(req, res) {
  const paginatedPosts = await getPaginatedPrismaPosts({
    page: 1,
    pageSize: 4,
  });

  const parsedPosts = paginatedPosts.map((post) => {
    return {
      ...post,
      createdAt: parseDate(`${post.createdAt}`),
    };
  });

  return res.status(201).json(parsedPosts);
}

async function post(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { title, preview, body, email } = req.body;

  const prismaUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!prismaUser) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const path = `articles/${title}`;
  await prisma.post.create({
    data: {
      title,
      preview,
      body,
      path,
      published: true, //change this later
      userId: prismaUser.id,
    },
  });
  return res.status(201).json();
}

async function put(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { id, title, preview, body, email } = req.body;

  const updatedPost = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title,
      preview,
      body,
    },
  });

  return res.status(201).json(updatedPost);
}

async function deleteArticle(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { id } = req.body;

  const deletedPost = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return res.status(201).json(deletedPost);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return get(req, res);
  } else if (req.method === "POST") {
    return post(req, res);
  } else if (req.method === "PUT") {
    return put(req, res);
  } else if (req.method === "DELETE") {
    return deleteArticle(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
