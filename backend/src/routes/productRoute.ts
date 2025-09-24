import express from "express";
import {
  getAllProducts,
  getCategoryProducts,
  getonsaleProducts,
  getSpecificProduct,
} from "../services/productServices.js";

export const productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).send(products);
});

//onsale route

productRoute.get("/onsale", async (req, res) => {
  const products = await getonsaleProducts();
  res.status(200).send(products);
});

productRoute.get("/product-category/:id", async (req, res) => {
  const categoryId = req.params.id;
  const products = await getCategoryProducts({ categoryId });
  res.status(200).json(products);
});

productRoute.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await getSpecificProduct({ productId });
  res.status(200).json(product);
});

