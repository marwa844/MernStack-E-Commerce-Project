export interface ICreateCart {
    userId: string;
}
export interface IGetActiveCart {
    userId: string;
    populateAllowed?: boolean;
}
export declare const getActiveCartForUser: ({ userId, populateAllowed }: IGetActiveCart) => Promise<import("mongoose").Document<unknown, {}, import("../models/cartModel.js").ICart, {}, {}> & import("../models/cartModel.js").ICart & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export interface IAddItemToCart {
    userId: string;
    productId: any;
    quantity: string;
}
export declare const addItemToCart: ({ productId, quantity, userId, }: IAddItemToCart) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/cartModel.js").ICart, {}, {}> & import("../models/cartModel.js").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
interface IupdateItemInCart {
    userId: string;
    productId: string;
    quantity: string;
}
export declare const updateItemInCart: ({ userId, productId, quantity, }: IupdateItemInCart) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/cartModel.js").ICart, {}, {}> & import("../models/cartModel.js").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
interface IDeleteItem {
    userId: string;
    productId: string;
}
export declare const deleteItemInCart: ({ userId, productId }: IDeleteItem) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/cartModel.js").ICart, {}, {}> & import("../models/cartModel.js").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
interface IClearCart {
    userId: string;
}
export declare const claerCart: ({ userId }: IClearCart) => Promise<{
    data: import("mongoose").Document<unknown, {}, import("../models/cartModel.js").ICart, {}, {}> & import("../models/cartModel.js").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
interface ICreateorder {
    userId: string;
    address: string;
    address2?: string;
    countryId: string;
    fullName: string;
    city: string;
    phone: string;
}
export declare const createOrder: ({ userId, address, address2, countryId, fullName, city, phone }: ICreateorder) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/orderModel.js").IOrder, {}, {}> & import("../models/orderModel.js").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
export {};
//# sourceMappingURL=cartServices.d.ts.map