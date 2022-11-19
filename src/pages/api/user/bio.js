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

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      post(req, res);
      break;
    // case "GET":
    //   get(req, res);
    //   break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
