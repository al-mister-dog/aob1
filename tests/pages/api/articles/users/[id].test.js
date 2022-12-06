import { prisma } from "../../../../../src/lib/prisma";

describe("PUT /api/articles", () => {
  let session;
  let id;

  beforeEach(async () => {
    const prismaUser = await prisma.user.create({
      data: {
        email: "test@example.com",
      },
    });

    const newPost = await prisma.post.create({
      data: {
        path: "",
        title: "Test title",
        preview: "Test preview",
        body: "Test body",
        published: true, //change this later
        userId: prismaUser.id,
      },
    });

    id = newPost.id;

    session = {
      user: {
        id: prismaUser.id,
        email: "test@example.com",
      },
    };
  });

  afterEach(async () => {
    await prisma.user.delete({
      where: {
        email: "test@example.com",
      },
    });

    await prisma.post.delete({
      where: {
        id,
      },
    });
  });

  it("should update a post successfully", async () => {
    const response = await request(handler)
      .put("/api/articles")
      .set("Authorization", `Bearer ${session.jwt}`)
      .send({
        id,
        title: "Updated title",
        preview: "Updated preview",
        body: "Updated body",
      });

    const updatedPost = await prisma.post.findOne({
      where: {
        id,
      },
    });

    expect(response.status).toBe(201);
    expect(updatedPost.title).toBe("Updated title");
    expect(updatedPost.preview).toBe("Updated preview");
    expect(updatedPost.body).toBe("Updated body");
  });

  it("should return a 401 error if the user is not authenticated", async () => {
    const response = await request(handler).put("/api/articles").send({
      id,
      title: "Updated title",
      preview: "Updated preview",
      body: "Updated body",
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Unauthorized");
  });
});
