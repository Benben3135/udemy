import mongoose, { Model, Schema, model } from "mongoose";

interface User {
  uid: string;
  isTeacher: boolean;
}

export const userSchema = new Schema<User>({
  uid: String,
  isTeacher: { type: Boolean, default: false },
});

const userModel: Model<User> = mongoose.model("users", userSchema);

export default userModel;
