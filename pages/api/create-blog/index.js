import Blog from "@/models/BlogModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../cors";
import runMiddleware from "../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const {
    title,
    content,
    slug,
    tags,
    meta,
    keywords,
    description,
    image,
    brief,
  } = req.body;
  if (
    !title ||
    !content ||
    !slug ||
    !tags ||
    !meta ||
    !keywords ||
    !description ||
    !image ||
    !brief
  ) {
    res.status(400).json({ error: "Property missing" });
    return;
  }

  await connectMongoDB()
    .then(async () => {
      const blog = new Blog({
        title,
        content,
        slug,
        tags,
        meta,
        keywords,
        description,
        image,
        brief,
      });
      await blog.save();
      res.status(200).json(blog);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
