import mongoose from 'mongoose'
const orderSchema = mongoose.Schema({
  email: { type: String },
  orderValue: { type: Number },
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("Order", orderSchema);