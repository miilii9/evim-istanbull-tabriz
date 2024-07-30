import Tag from "@/models/TagModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../cors";
import runMiddleware from "../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "tag name is missing" });
    return;
  }

  await connectMongoDB()
    .then(async () => {
      const tag = new Tag({ name });
      await tag.save();
      res.status(200).json(tag);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
