import mongoose, { Model, Schema, model } from "mongoose";

interface User {
  uid: string;
  isTeacher: boolean;
  img: string;
  headline: string;
  bio: string;
  website: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string
}

export const userSchema = new Schema<User>({
  uid: String,
  isTeacher: { type: Boolean, default: false },
  img: { type: String, required: false},
  headline: { type: String, required: false},
  bio: { type: String, required: false},
  website: { type: String, required: false},
  twitter: { type: String, required: false},
  facebook: { type: String, required: false},
  linkedin: { type: String, required: false},
  youtube: { type: String, required: false}
});

const userModel: Model<User> = mongoose.model("users", userSchema);

export default userModel;
