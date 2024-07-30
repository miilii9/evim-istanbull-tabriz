import User from "@/models/UserModel";
import connectMongoDB from "@/utils/mongodb";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { cors } from "../cors";
import runMiddleware from "../cors";
export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400).json({ error: "لطفا تمامی فیلدها را پر کنید." });
    return;
  }

  await connectMongoDB()
    .then(async () => {
      const exists = await User.findOne({ email });

      if (exists) {
        res.status(409).json({ error: "ایمیل وجود دارد." });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        fullName,
        email,
        password: hashedPassword,
      });

      try {
        const savedUser = await user.save();

        const token = jwt.sign({ userId: savedUser._id }, process.env.SECRET, {
          expiresIn: "7d",
        });

        res.status(201).json({
          token,
          user: {
            id: savedUser.id,
            fullName: savedUser.fullName,
            email: savedUser.email,
          },
        });
      } catch (error) {
        res.status(400).json({ error });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
