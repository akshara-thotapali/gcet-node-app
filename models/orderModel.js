import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String },
  orderValue: { type: Number },
  orderDate: { type: Date,default: Date.now },
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("Order", orderSchema);