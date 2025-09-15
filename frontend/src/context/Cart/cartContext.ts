import { createContext, useContext } from "react";
import type { ICart } from "../../utils/data";

export interface CartContextType {
 cartItems :ICart[];
 totalAmount: number;
 addToCart : (_id:string)=> void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within an AuthProvider");
  }
  return context;
};
