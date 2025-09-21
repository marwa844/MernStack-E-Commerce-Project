import { cartModel } from "../models/cartModel.js";
import { productModel } from "../models/productModel.js";
import { orderModel } from "../models/orderModel.js";
import { countryModel } from "../models/CountryModel.js";
const createCartForUSer = async ({ userId }) => {
    const cart = await cartModel.create({ userId });
    await cart.save();
    return cart;
};
export const getActiveCartForUser = async ({ userId, populateAllowed }) => {
    let getCart;
    if (populateAllowed) {
        getCart = await cartModel.findOne({ userId, status: "active" }).populate("items.product");
    }
    else {
        getCart = await cartModel.findOne({ userId, status: "active" });
    }
    if (!getCart) {
        getCart = await createCartForUSer({ userId });
    }
    return getCart;
};
export const addItemToCart = async ({ productId, quantity, userId, }) => {
    // get cart for user
    const cart = await getActiveCartForUser({ userId });
    console.log("Sending to backend:", { productId, quantity, userId });
    // check item is exit in db
    const item = cart.items.find((p) => p.product.toString() === productId);
    if (item) {
        return { data: " Item is already exit", statusCode: 400 };
    }
    console.log("ProductId from front-end:", productId);
    console.log("Type of ProductId:", typeof productId);
    // check about item in db
    const product = await productModel.findById(productId);
    if (!product) {
        return { data: " Product isn't exit", statusCode: 400 };
    }
    if (product.stock < parseInt(quantity)) {
        return { data: "low stock", statusCode: 400 };
    }
    // add item to cart
    cart.items.push({
        product: productId,
        unitprice: product.onsale ? product.sale : product.price,
        quantity: parseInt(quantity),
    });
    // update to cart
    cart.totalAmount += product.price * parseInt(quantity);
    // const updateCart = await cart.save();
    await cart.save();
    return { data: await getActiveCartForUser({ userId, populateAllowed: true }), statusCode: 201 };
};
export const updateItemInCart = async ({ userId, productId, quantity, }) => {
    //get cart for user
    const cart = await getActiveCartForUser({ userId });
    // check item in cart
    const exitItemInCart = cart.items.find((p) => p.product.toString() == productId);
    if (!exitItemInCart) {
        return { data: "Product not exit in cart", statusCode: 400 };
    }
    // check product in db
    const product = await productModel.findById(productId);
    if (!product) {
        return { data: "Product not exit in Db", statusCode: 400 };
    }
    // check stock before update
    if (product.stock < parseInt(quantity)) {
        return { data: "Low Stock in db", statusCode: 400 };
    }
    // upade product quantity
    exitItemInCart.quantity = parseInt(quantity);
    // get other total amount in cart
    const otherItemsIncart = cart.items.filter((p) => p.product.toString() !== productId);
    let totalOtherItems = otherItemsIncart.reduce((sum, p) => {
        sum += p.quantity * p.unitprice;
        return sum;
    }, 0);
    // get total exit product
    const totalExitProduct = product.price * parseInt(quantity);
    cart.totalAmount = totalOtherItems + totalExitProduct;
    await cart.save();
    return { data: await getActiveCartForUser({ userId, populateAllowed: true }), statusCode: 200 };
};
export const deleteItemInCart = async ({ userId, productId }) => {
    // get cart for user
    const cart = await getActiveCartForUser({ userId });
    // check item is exit in cart
    const item = cart.items.find((p) => p.product.toString() === productId);
    if (!item) {
        return { data: " Item isn't exit", statusCode: 400 };
    }
    // remove all items from cart
    const newItems = cart.items.filter((p) => p.product !== item.product);
    cart.items = newItems;
    // update summary
    const tAmount = newItems.reduce((sum, p) => {
        sum += p.unitprice * p.quantity;
        return sum;
    }, 0);
    cart.totalAmount = tAmount;
    // save cart
    await cart.save();
    return { data: await getActiveCartForUser({ userId, populateAllowed: true }), statusCode: 200 };
};
export const claerCart = async ({ userId }) => {
    // get cart for user
    const cart = await getActiveCartForUser({ userId });
    // remove  items from cart
    cart.items = [];
    // update summary
    const tAmount = 0;
    cart.totalAmount = tAmount;
    // save cart
    await cart.save();
    return { data: await getActiveCartForUser({ userId, populateAllowed: true }), statusCode: 200 };
};
export const createOrder = async ({ userId, address, address2, countryId, fullName, city, phone }) => {
    // get cart for user
    const cart = await getActiveCartForUser({ userId });
    if (!cart || cart.items.length === 0) {
        return { data: "Cart is empty", statusCode: 400 };
    }
    if (!address) {
        return { data: " Address isn't exit", statusCode: 400 };
    }
    const selectedCountry = await countryModel.findById(countryId);
    if (!selectedCountry || !selectedCountry.enabled) {
        return { data: "Selected country is not valid", statusCode: 400 };
    }
    // get last order Number
    const lastOrder = await orderModel.findOne().sort({ orderNo: -1 });
    const lastOrderNo = lastOrder ? lastOrder.orderNo : 0;
    // declare array of oreritems list
    const orderItemsList = [];
    //orderitem list
    for (let item of cart.items) {
        const product = await productModel.findById(item.product);
        if (!product) {
            return { data: " product isn't exit", statusCode: 400 };
        }
        orderItemsList.push({
            title: product?.title,
            image: product?.image,
            quantity: item.quantity,
            unitprice: item.unitprice,
        });
    }
    //order other detail
    const order = await orderModel.create({
        items: orderItemsList,
        totalAmount: cart.totalAmount,
        userId: userId,
        address: address,
        address2: address2,
        orderNo: lastOrderNo + 1,
        country: countryId,
        fullName: fullName,
        city: city,
        phone: phone
    });
    // save order
    // update cart status
    cart.status = "completed";
    await cart.save();
    return { data: order, statusCode: 200 };
};
//# sourceMappingURL=cartServices.js.map