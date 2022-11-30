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
  const data = await prisma.post.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const posts = data.map((d) => {
    return {
      id: d.id,
      title: d.title,
      preview: d.preview,
      createdAt: parseDate(`${d.createdAt}`),
      user: d.user,
    };
  });
  return res.status(201).json(posts);
}

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    return post(req, res);
  } else if (method === "GET") {
    return get(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
