import { parseDate } from "../../../helpers/api/parseDate";
async function get(req, res) {
  const id = req.query.id;

  const data = await prisma.post.findMany({
    where: { id: id },
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

async function post(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { title, preview, body, email } = req.body;

  const prismaUser = await prisma.user.findUnique({
    where: { email },
  });
  
  const newPost = await prisma.post.create({
    data: {
      title,
      preview,
      body,
      userId: prismaUser.id,
    },
  });

  return res.status(201).json(newPost);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return get(req, res);
  } else if (req.method === "POST") {
    return post(req, res);
  } else if (req.method === "PUT") {
    return put(req, res);
  } else if (req.method === "DELETE") {
    return deleteArticle(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
