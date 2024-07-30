import Tag from "@/models/TagModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../cors";
import runMiddleware from "../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  await connectMongoDB()
    .then(async () => {
      const tags = await Tag.find();
      res.status(200).json(tags);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
