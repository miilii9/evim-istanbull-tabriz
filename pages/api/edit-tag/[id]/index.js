import Tag from "@/models/TagModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../../cors";
import runMiddleware from "../../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const tag = req.body;
  const { id } = req.query;
  await connectMongoDB()
    .then(async () => {
      await Tag.findByIdAndUpdate(id, tag);
      res.status(202).json({ message: "tag updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
