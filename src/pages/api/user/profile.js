import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "../../../lib/prisma";

async function post(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!prismaUser) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { bio } = req.body;

  const updatedUser = await prisma.user.update({
    where: { id: prismaUser.id },
    data: { bio },
  });

  //data: { published: true }, FOR FUTURE REFERENCE

  return res.status(201).json(updatedUser);
}
async function get(req, res) {
  const { email } = req.query;
  const prismaUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!prismaUser) {
    return res.status(401).json({ error: "Unauthorized" });
  } else {
    return res.status(201).json(prismaUser);
  }
}
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      return post(req, res);
    case "GET":
      return get(req, res);
    default:
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
