import Tag from "@/models/TagModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../../cors";
import runMiddleware from "../../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { id } = req.query;
  await connectMongoDB()
    .then(async () => {
      await Tag.findByIdAndDelete(id);
      res.status(202).json({ message: "tag deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
