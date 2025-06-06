import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
  pid : { type : Number},
  name: { type: String },
  price: { type: Number },
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("Product", productSchema);
