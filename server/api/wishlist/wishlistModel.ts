import mongoose, { Model, Schema, model } from "mongoose";

interface Wishlist {
  uid: string;
  coursesId:[]
}

export const wishlistSchema = new Schema<Wishlist>({
  uid: {type: String, require: true},
  coursesId: {type: [], require: true}
});

const userModel: Model<Wishlist> = mongoose.model("Wishlists", wishlistSchema);

export default userModel;
