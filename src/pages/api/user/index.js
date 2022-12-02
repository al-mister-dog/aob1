import { prisma } from "../../../lib/prisma"

export default async function handler(req, res) {
  const id = req.query.id;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  return res.status(201).json(user);
}
