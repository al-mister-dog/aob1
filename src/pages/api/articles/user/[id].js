import { parseDate } from "../../../../helpers/api/parseDate";
import { prisma } from "../../../../lib/prisma";

async function get(req, res) {
  const id = req.query.id;

  const data = await prisma.post.findMany({
    where: { userId: id },
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

export default async function handler(req, res) {
  if (req.method === "GET") {
    await get(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
