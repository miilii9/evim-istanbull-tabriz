import Message from "@/models/MessageModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../cors";
import runMiddleware from "../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  await connectMongoDB()
    .then(async () => {
      const messages = await Message.find();
      res.status(200).json(messages);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
