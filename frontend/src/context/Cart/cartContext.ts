import { createContext, useContext } from "react";
import type { ICart } from "../../utils/data";

export interface CartContextType {
 cartItems :ICart[];
 totalAmount: number;
 addToCart : (_id:string, quantity: number)=> void;
 updateItemQtyCart: (_id:string, quantity: number) => void;
  deleteItemInCart: (_id:string) => void;
  emptyCart: ()=> void;
  orderNo: number;
  orderId : string;
  setOrderRef: ({orderNo , orderId}: { orderNo: number; orderId: string })=> void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within an AuthProvider");
  }
  return context;
};
