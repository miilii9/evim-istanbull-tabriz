import Blog from "@/models/BlogModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../../cors";
import runMiddleware from "../../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const blog = req.body;
  const { id } = req.query;
  await connectMongoDB()
    .then(async () => {
      await Blog.findByIdAndUpdate(id, blog);
      res.status(202).json({ message: "blog updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
