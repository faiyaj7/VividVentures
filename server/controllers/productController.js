import { asyncTryCatch } from "../middleware/promiseHandling.js";
import Product from "../models/productSchema.js";
import ApiFeature from "../utils/apifeature.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// All the Products
export const getAllProduct = asyncTryCatch(async (req, res, next) => {
  const productCount = await Product.countDocuments();
  // There are 2 ways to search

  // 1. make a class and a search method and use regex there
  const resultPerPage = 10;
  const apifeature = new ApiFeature(Product.find(), req.query)
    .search()
    .filter()
  .pagination(resultPerPage);
  
  let products = await apifeature.query;
  
  const filteredProductsCount = products.length;
  apifeature.pagination(resultPerPage);
  products = await apifeature.query.clone();

  // 2. Just like below is the second way
  // const products = await Product.find({
  //   name: { $regex: req.query.keyword, $options: "i" },
  // });
 
  res.status(200).json({
    success: true,
    products,
    productCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Create the Product
export const createProduct = asyncTryCatch(async (req, res, next) => {
  // req.body.author = req.user._id;
  console.log(req.body);
  const newProduct = await Product.create(req.body);
  res.status(201).json({ success: true, newProduct });
});

export const filterByPrice = asyncTryCatch(async (req, res, next) => {
  const sorting = req.body.value;
  const products = req.body.products;

  // First, filter the products based on the IDs received from the client
  const filteredProducts = await Product.find({
    _id: { $in: products }, // This filters the documents to only those with IDs in the 'products' array
  });
  
let sortedProducts= []
  // Then, sort the filtered products
  if (sorting === 1) {
    // price from less to high
     sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
     // price from high to less
  } else if (sorting === -1) {
     sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else {
     sortedProducts = filteredProducts;
  }
  res.status(200).json(sortedProducts)
});

export const productBasedonLatestAddition = asyncTryCatch(
  async (req, res, next) => {
    const products = await Product.find().sort({ createdTime: 1 }).limit(5);
    res.status(200).json({ products, success: true });
  }
);
// Extract Products based on category
export const productBasedOnCategory = asyncTryCatch(async (req, res, next) => {
  const category = req.body.value;
  // TO get products based on specific category
  let query = category
    ? {
        category: category,
        featured: true,
      }
    : // When i want all the featured products
      { featured: true };
  const productsFilteredByCategory = await Product.find(query);
  res.status(200).json({ success: true, productsFilteredByCategory });
});

// Group the categories for all products
export const groupTheCategories = asyncTryCatch(async(req , res , next) => {
  const categories = await Product.aggregate([
    {$group:{
      _id:"$category"
    }}
  ])
  res.status(200).json(categories)
})

// get Single Product details
export const singleProduct = asyncTryCatch(async (req, res, next) => {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product not found", 400));
  console.log(product);
  res.status(200).json({ success: true, product });
});

// Product purchase payment system with stripe and sanity cms (images and everything)
// export const productPurchaseSuccessfull = asyncTryCatch(
//   async (req, res, next) => {
//     const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

//     const info = await request.json();

//     const params = {
//       submit_type: "pay",
//       mode: "payment",
//       payment_method_types: ["card"],
//       billing_address_collection: "auto",
//       shipping_options: [{ shipping_rate: "shr_1O1BrsSCoK68ROrb8V1ply2T" }],
//       line_items: info.map((item) => {
//         const img = item.image.asset._ref;
//         const newImage = img
//           .replace(
//             "image-",
//             "https://cdn.sanity.io/images/vfxfwnaw/production/"
//           )
//           .replace("-webp", ".webp");
//         return {
//           price_data: {
//             currency: "bdt",
//             product_data: {
//               name: item.name,
//               images: [newImage],
//             },
//             unit_amount: item.exactPrice * 100,
//           },
//           adjustable_quantity: {
//             enabled: true,
//             minimum: 1,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: `${request.headers.get("origin")}/success`,
//       cancel_url: `${request.headers.get("origin")}/canceled`,
//     };
//     // Create Checkout Sessions from body params.

//     const session = await stripe.checkout.sessions.create(params);

//     return NextResponse.json({ session, status: 200 });
//   }
// );
// export const createProductReview = asyncTryCatch(async (req, res, next) => {
//   const { rating, comment, productId } = req.body;

//   const review = {
//     user: req.user._id,
//     name: req.user.name,
//     rating: Number(rating),
//     comment,
//   };
//   const product = await Product.findById(productId);
//   const isReviewed = await product.reviews.find(
//     (key) => key.user.toString() === req.user._id.toString()
//   );
//   // console.log(isReviewed);
//   if (isReviewed) {
//     product.reviews.forEach((index) => {
//       if (index.user.toString() === req.user._id.toString()) {
//         index.rating = rating;
//         index.comment = comment;
//         console.log(index.user.toString());
//       }
//     });
//   } else {
//     product.reviews.push(review);
//     product.numOfReviews = product.reviews.length;
//   }
//   // console.log(product);
//   let sum = 0;
//   // average rating = sum of all rating / length of reviews

//   product.reviews.forEach((index) => {
//     sum += index.rating;
//   });
//   product.rating = sum / product.reviews.length;
//   console.log(sum, product.rating);
//   await product.save({ runValidators: false });
//   res.status(200).json({ success: true });
// });

// // get all the reviews of products
// export const getProductReviews = asyncTryCatch(async (req, res, next) => {
//   const specificProductAllReviews = await Product.findById(req.query.ProductId);
//   if (!specificProductAllReviews)
//     return next(new ErrorHandler("Product not found", 404));
//   res
//     .status(200)
//     .json({ success: true, reviews: specificProductAllReviews.reviews });
// });

// export const deleteReview = asyncTryCatch(async (req, res, next) => {
//   const product = await Product.findById(req.query.ProductId);
//   if (!product) return next(new ErrorHandler("Product not found", 404));
//   const reviews = product.reviews.filter(
//     (key) => key._id.toString() !== req.query.id.toString()
//   );
//   let sum = 0;
//   reviews.forEach((key) => (sum += key.rating));
//   // if there are no reviews then sum = 0 and length 0 so due to this divison there is a error
//   // in rating . so to solve that we use 0 if sum = 0
//   const rating = sum === 0 ? 0 : sum / reviews.length;
//   const numOfReviews = reviews.length;
//   console.log(reviews, sum, rating, numOfReviews);
//   await Product.findByIdAndUpdate(
//     req.query.ProductId,
//     {
//       reviews,
//       rating,
//       numOfReviews,
//     },
//     {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     }
//   );

//   res.status(200).json({ success: true });
// });
