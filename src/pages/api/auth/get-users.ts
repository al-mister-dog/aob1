import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  const prismaUser = await prisma.user.findUnique({
    where: { email: "almrdog@gmail.com" },
  });
  console.log(prismaUser);
  const profile = await prisma.profile.findMany();

  return res.send(profile);
}
