import { parseDate } from "../../../helpers/api/parseDate";

// Path: src/pages/api/articles/index.js

async function getPaginatedPrismaPosts({ page, pageSize }) {
  const posts = await prisma.post.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}

export default async function handler(req, res) {
  const paginatedPosts = await getPaginatedPrismaPosts({
    page: 1,
    pageSize: 4,
  });

  const parsedPosts = paginatedPosts.map((post) => {
    return {
      ...post,
      createdAt: parseDate(`${post.createdAt}`),
    };
  });

  return res.status(201).json(parsedPosts);
}
