import express from "express";
import mongoose from "mongoose";
import { userRoute } from "./routes/userRoute.js";
import { setCategory } from "./services/categoryServices.js";
import { setInitialProducts } from "./services/productServices.js";
import { categoryRouter } from "./routes/categoryRoute.js";
import { productRoute } from "./routes/productRoute.js";
import { cartRouter } from "./routes/cartRoute.js";

const app = express();
const port = 3001;

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Can't connect to DB", err);
  });

setCategory();
setInitialProducts();
// user Routes
app.use("/user", userRoute);

//category router
app.use("/categoy", categoryRouter);

// product router
app.use("/product", productRoute);

// cart router
app.use("/cart", cartRouter);


app.listen(port, () => {
  console.log("Server is working");
});
