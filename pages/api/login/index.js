import User from "@/models/UserModel";
import connectMongoDB from "@/utils/mongodb";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { cors } from "../cors";
import runMiddleware from "../cors";

async function login(email, password) {
  if (!email || !password) {
    throw Error("رمز عبور و ایمیل الزامیست");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw Error("ایمیل نادرست است");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("رمز عبور نادرست است");
  }

  return user;
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { email, password } = req.body;
  await connectMongoDB()
    .then(async () => {
      try {
        const user = await login(email, password);

        const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
          expiresIn: "7d",
        });

        res.status(200).json({ email, token });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
