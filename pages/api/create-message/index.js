import Message from "@/models/MessageModel";
import connectMongoDB from "@/utils/mongodb";
import { cors } from "../cors";
import runMiddleware from "../cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { fullName, email, body, phone } = req.body;
  if (!fullName || !phone) {
    res.status(400).json({ error: "Full-Name or phone is missing" });
    return;
  }

  await connectMongoDB()
    .then(async () => {
      const message = new Message({ fullName, email, body, phone });
      await message.save();
      res.status(200).json(message);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
