import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Tag = mongoose.models.Tag || mongoose.model("Tag", TagSchema);

export default Tag;
