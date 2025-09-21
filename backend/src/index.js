import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { setInitialProducts } from "./services/productServices.js";
import { setInitialCountry } from "./services/countryServices.js";
import { userRoute } from "./routes/userRoute.js";
import { categoryRouter } from "./routes/categoryRoute.js";
import { productRoute } from "./routes/productRoute.js";
import { cartRouter } from "./routes/cartRoute.js";
import { countryRoute } from "./routes/countryRoute.js";
import { setCategory } from "./services/categoryServices.js";
dotenv.config();
const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
mongoose
    .connect(process.env.BASE_URL || "")
    .then(() => {
    console.log("DB Connected");
})
    .catch((err) => {
    console.log("Can't connect to DB", err);
});
setCategory();
setInitialProducts();
setInitialCountry();
// user Routes
app.use("/user", userRoute);
//category router
app.use("/categoy", categoryRouter);
// product router
app.use("/product", productRoute);
// cart router
app.use("/cart", cartRouter);
// country router 
app.use("/country", countryRoute);
// order router 
app.use("/order", orderRoute);
app.listen(port, () => {
    console.log("Server is working");
});
//# sourceMappingURL=index.js.map