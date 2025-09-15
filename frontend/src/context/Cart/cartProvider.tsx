import { useState, type FC, type PropsWithChildren } from "react";
import type { ICart } from "../../utils/data";
import { CartContext } from "./cartContext";


 const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cartItems, setCart] = useState<ICart[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const addToCart = ( _id:string) => {
       
        console.log(_id);
    }
   

    return (
        <CartContext.Provider value={{ cartItems, totalAmount, addToCart }}>
        {children}
</CartContext.Provider>
    )
}


export default CartProvider;