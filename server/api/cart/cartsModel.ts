import mongoose, { Model, Schema } from "mongoose";

export interface Cart {
  uid: string;
  coursesId: number[]; // הסוג של המערך יכול להיות גם `string[]` או `Array<number | string>` תלוי בצורך
}

export const cartsSchema = new Schema<Cart>({
  uid: { type: String, required: true },
  coursesId: [{ type: Number, required: true }],
});

const CartModel: Model<Cart> = mongoose.model("Carts", cartsSchema);

export default CartModel;
