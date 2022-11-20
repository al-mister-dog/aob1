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
  const { tag, bio } = req.body;

  /**I love coding and learning new technologies. My passion is creating educational software that make complex topics accessible to as many people as possible. As a self taught developer since 2020 I've become proficient using languages such as Typescript, Javascript, Python and SQL, as well as frameworks like React, Next-JS, Redux, Node/Express, Django and Vue. For most of my career I have been a professional musician, and have toured internationally playing folk, jazz and other styles. In my spare time I enjoy reading and sports. */
  const updatedUser = await prisma.user.update({
    where: { id: prismaUser.id },
    data: { title: tag, bio },
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
