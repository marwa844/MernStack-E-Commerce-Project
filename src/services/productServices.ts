import { productModel } from "../models/productModel.js";

// get all products
export const getAllProducts = async () => {
  return await productModel.find();
};

// set Initial Products
export const setInitialProducts = async () => {
  const products = [
    {
      title: "product1",
      description: "Desc About product 1",
      image: "image1.png",
      onsale: false,
      price: 50,
      sale: 0,
      stock: 100,
      categoryId: "68b8b3fa13b6be7c7e8e66d3",
    },
    {
      title: "product2",
      description: "Desc About product 2",
      image: "image2.png",
      onsale: true,
      price: 50,
      sale: 30,
      stock: 80,
      categoryId: "68b8b3fa13b6be7c7e8e66d2",
    },
  ];

  const exitProducts = await getAllProducts();
  if (exitProducts.length == 0) {
    await productModel.insertMany(products);
  }
};

// get specific products by category Id
interface ICategoryProduct {
  categoryId: string;
}

export const getCategoryProducts = async ({ categoryId }: ICategoryProduct) => {
  const products = await productModel.find({ categoryId });
  return products;
};

// get specific products by product Id
export interface IProduct {
  productId: string;
}

export const getSpecificProduct = async ({ productId }: IProduct) => {
  const product = await productModel.findById(productId);
  return product;
};
