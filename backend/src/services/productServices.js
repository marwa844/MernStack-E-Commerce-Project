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
                image: "/uploads/img2.jpeg",
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
    }
    catch {
        console.log("somthing went wrong");
    }
};
export const getCategoryProducts = async ({ categoryId }) => {
    const products = await productModel.find({ categoryId });
    return products;
};
export const getSpecificProduct = async ({ productId }) => {
    const product = await productModel.findById(productId);
    return product;
};
//# sourceMappingURL=productServices.js.map