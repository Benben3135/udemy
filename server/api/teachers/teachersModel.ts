import mongoose, { Model, Schema, model } from "mongoose";

interface Teacher {
  uid: string;
  headline: string;
  biography: string;
  profilePicture?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
}

const teacherSchema = new Schema<Teacher>({
  uid: String,
  profilePicture: String,
  websiteUrl: String,
  twitterUrl: String,
  facebookUrl: String,
  linkedinUrl: String,
  youtubeUrl: String,
});

const userModel: Model<Teacher> = mongoose.model("users", teacherSchema);
