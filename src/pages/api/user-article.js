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
  const post = await prisma.post.create({
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
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  const data = await prisma.post.findMany({
    where: { userId: prismaUser.id },
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
  console.log(method);
  switch (method) {
    case "POST":
      post(req, res);
      break;
    case "GET":
      get(req, res);
      break;
    case "PUT":
      put(req, res);
      break;
    case "DELETE":
      deleteArticle(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
