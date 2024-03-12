import mongoose, { Model, Schema } from "mongoose";


export interface Purchased {
    uid: string;
    coursesId: number[]; // הסוג של המערך יכול להיות גם `string[]` או `Array<number | string>` תלוי בצורך
  }
  
  export const purchasedSchema = new Schema<Purchased>({
    uid: { type: String, required: true },
    coursesId: [{ type: Number, required: true }],
  });
  
  const purchasedModel: Model<Purchased> = mongoose.model("purchased", purchasedSchema);
  
  export default purchasedModel;
  