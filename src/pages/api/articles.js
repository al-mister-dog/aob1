import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { prisma } from "../../lib/prisma";

async function post(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { title, body, email } = req.body;

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
      body,
      path,
      userId: prismaUser.id,
    },
  });

  res.status(201).json(post);
}

async function get(req, res) {
  const posts = await prisma.post.findMany();
  return res.status(201).json(posts);
}

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      post(req, res);
      break;
    case "GET":
      get(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
