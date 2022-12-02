async function get(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { email } = req.query;
  const posts = await prisma.post.findMany({
    where: {
      email: email,
    },
  });

  return res.status(201).json(posts);
}

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      return post(req, res);
      break;
    case "GET":
      return get(req, res);
      break;
    case "PUT":
      return put(req, res);
      break;
    case "DELETE":
      return deleteArticle(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
