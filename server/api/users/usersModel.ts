import mongoose, { Model, Schema, model } from "mongoose";

interface User {
  uid: string;
  userName: string;
  email: string;
  isTeacher: boolean;
}

const userSchema = new Schema<User>({
  uid: String,
  userName: String,
  email: String,
  isTeacher: { type: Boolean, default: false },
});

const userModel: Model<User> = mongoose.model("users", userSchema);
