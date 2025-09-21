export declare const getAllProducts: () => Promise<(import("mongoose").Document<unknown, {}, import("../models/productModel.js").IProduct, {}, {}> & import("../models/productModel.js").IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
})[]>;
export declare const setInitialProducts: () => Promise<void>;
interface ICategoryProduct {
    categoryId: string;
}
export declare const getCategoryProducts: ({ categoryId }: ICategoryProduct) => Promise<(import("mongoose").Document<unknown, {}, import("../models/productModel.js").IProduct, {}, {}> & import("../models/productModel.js").IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
})[]>;
export interface IProduct {
    productId: string;
}
export declare const getSpecificProduct: ({ productId }: IProduct) => Promise<(import("mongoose").Document<unknown, {}, import("../models/productModel.js").IProduct, {}, {}> & import("../models/productModel.js").IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export {};
//# sourceMappingURL=productServices.d.ts.map