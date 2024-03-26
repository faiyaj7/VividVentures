import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import adminProductRoute from "./routes/adminProductRoutes.js";
import productRoute from "./routes/productRoutes.js";

dotenv.config({ path: "server/.env" });

// uncaught exception
// if there are something undefined then the server will be close
// process.on("uncaughtException", (e) => {
//   process.exit(1);
// });
const app = express();
app.use(cors());
// app.use(cors({ origin: "https://vivid-ventures-iota.vercel.app" }));
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://vivid-ventures-iota.vercel.app"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
app.use(express.json());
// app.use(cookieParser());

app.use("/admin", adminProductRoute);
app.use("/", productRoute);
// app.use("/api/v1", orderRoute);

// error middleware
// app.use(errors);

const port = process.env.PORT;
let server = "";
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL).then(() => {
  server = app.listen(port, () =>
    console.log(`Listening at http://localhost:${port}`)
  );
});

// unhandled Rejection
// if thera are issue like mongo db name there comes an error instead of closing down the server
// so if there are such issues we will close the server

process.on("unhandledRejection", (e) => {
  console.log(`Error : ${e.message}`);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});
