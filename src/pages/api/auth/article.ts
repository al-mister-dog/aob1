import { prisma } from "../../../lib/prisma";

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

async function post(req, res) {
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

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      post(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
