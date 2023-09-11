import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  quantity: { type: Number },
});

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
export { ProductModel as Product };
