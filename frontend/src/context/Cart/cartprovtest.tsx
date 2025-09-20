/*
import { useState, type FC, type PropsWithChildren } from "react";
import type { ICart } from "../../utils/data";
import { CartContext } from "./cartContext";
import { useAuth } from "../Auth/AuthContext";


 const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const {token} = useAuth();
      const [cartItems, setCartItems] = useState<ICart[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const[error, setError]= useState("");

    const BASE_URL_ITEMS = "http://localhost:3001/cart/items";

    const addToCart = async( productId:string ) => {
            console.log("Token before fetch:", token);  // هنتأكد هنا
if (!token) {
    console.log("No token, user not authenticated");
    return;
  }else{
    console.log(token)
  }

   
      // Add items to cart 
      
          try {
              const response = await fetch(BASE_URL_ITEMS,
                  {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                          
                      },
                      body: JSON.stringify({productId, quantity:1})                      
                  });
              if (!response.ok) {
                setError("faild to add to cart")
                  console.log(`${response.statusText}: ${response.status}`)
                  throw new Error(`${response.statusText}: ${response.status}`);
      
              }
              const cart = await response.json();
              if (!cart){
                setError("faild to parse cart data");
              }


              const cartItemsMapped = cart.items.map(({product, quantity}:{product:any, quantity:number})=>({ productId : product._id, title: product.title, image: product.image, onsale: product.onsale, quantity }))
              setCartItems([...cartItemsMapped]);
              setTotalAmount ( cart.totalAmount);
      
          } catch (err) {
               console.log(err);
              throw err;
          }
      
      
      

      
    /*  const itemMapped = cart.items.map(({product , quantity}:{product:any, quantity:number})=>({
        _id: product._id,
        title: product.title,
         image: product.image,
  onsale: product.onsale,
  price: product.price,
  sale: product.sale,
  stock: product.stock,
  quantity:quantity

      }))

      setCart([...itemMapped]);*/
   //   setTotalAmount(cart.totalAmount);
 /*

    }
   

    return (
        <CartContext.Provider value={{ cartItems, totalAmount, addToCart }}>
        {children}
</CartContext.Provider>
    )
}


export default CartProvider;
*/