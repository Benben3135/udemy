import mongoose, { Model, Schema, model } from "mongoose";

export interface User {
  uid: string;
  displayName: string;
  email: string;
  isTeacher: boolean;
  photoURL: string;
  headline: string;
  bio: string;
  website: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

export const userSchema = new Schema<User>({
  uid: String,
  isTeacher: { type: Boolean, default: false },
  displayName: String,
  email: String,
  photoURL: { type: String, required: false },
  headline: { type: String, required: false },
  bio: { type: String, required: false },
  website: { type: String, required: false },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  linkedin: { type: String, required: false },
  youtube: { type: String, required: false },
});

const userModel: Model<User> = mongoose.model("users", userSchema);

export default userModel;
