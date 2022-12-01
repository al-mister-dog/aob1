import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { prisma } from "../../lib/prisma";
import { parseDate } from "../../helpers/parseDate";

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

async function get(req, res) {
  const id = req.query.id;

  const data = await prisma.post.findMany({
    where: { id },
    select: {
      id: true,
      title: true,
      createdAt: true,
      preview: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const posts = data.map((d) => ({
    ...d,
    createdAt: parseDate(`${d.createdAt}`),
  }));

  return res.status(201).json(posts);
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
  const { method } = req;

  switch (method) {
    case "POST":
      return post(req, res);

    case "GET":
      return get(req, res);

    case "PUT":
      return put(req, res);

    case "DELETE":
      return deleteArticle(req, res);

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
