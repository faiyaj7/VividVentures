import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter the product name"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Enter the description of the product"],
    },
    price: {
      type: Number,
      required: [true, "Enter the price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    rating: { type: Number, default: 0 },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    category: {
      type: String,
      required: [true, "Enter the Product Category"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter the product Stocks"],
    },
    numOfReviews: { type: Number, default: 0 },
    // reviews: [
    //   {
    //     user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    //     name: { type: String, required: true },
    //     rating: { type: Number, required: true, default: 0 },
    //     comment: { type: String, required: true },
    //   },
    // ],
    featured: { type: Boolean },
    // author: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
