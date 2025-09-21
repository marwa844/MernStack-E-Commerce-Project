import { productModel } from "../models/productModel.js";

// get all products
export const getAllProducts = async () => {
  return await productModel.find();
};

// set Initial Products
export const setInitialProducts = async () => {
  try {
    const products = [
      {
        title: "product1",
        description: "Desc About product 1",
        image: "/uploads/img1.jpeg",
        onsale: false,
        price: 50,
        sale: 0,
        stock: 100,
        categoryId: "68b8b3fa13b6be7c7e8e66d3",
      },
      {
        title: "product2",
        description: "Desc About product 2",
        image:  "/uploads/img2.jpeg",
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
  } catch {
    console.log("somthing went wrong");
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
  const product = await productModel
    .findById(productId)
    .populate("categoryId", "title") // هيجيبلك بس الـ title من الكاتيجوري
    .lean(); // optional لو عايزة ترجع object عادي بدل Document
  return product;
};
