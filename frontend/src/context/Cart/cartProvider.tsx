import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import type { ICart } from "../../utils/data";
import { CartContext } from "./cartContext";
import { useAuth } from "../Auth/AuthContext";
import { fetchCart } from "../../Api/cart";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token } = useAuth();
  const [cartItems, setCartItems] = useState<ICart[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [ orderNo , setOrderNo] = useState<number>(0);
  const [ orderId, setOrderId] = useState<string>("");

    useEffect(() => {
        if (!token) {
            return;
        }
        fetchCart(token)
            .then((data) => {
              const cartItemsMapped = data.items.map(({ product, quantity , unitprice}:{product:any, quantity:number, unitprice:number }) => {
  if (!product) return null; // skip items without product
  return {
    productId: product._id,
    title: product.title,
    image: product.image,
    onsale: product.onsale,
    price: product.price,
    sale: product.sale,
    stock: product.stock,
    quantity,
    unitprice
  };
}).filter(Boolean); // إزالة أي nulls

setCartItems(cartItemsMapped);
            setTotalAmount(data.totalAmount);

            })
            .catch((err) => alert(err));

    }, [])




  const BASE_URL_ITEMS = "http://localhost:3001/cart/items";

  // add to cart
const addToCart = async (productId: string, quantity: number) => {
  
  const response = await fetch("http://localhost:3001/cart/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId: productId,
      quantity: quantity,
    }),
  });

  const data = await response.json();
              if (!data){
                setError("faild to parse cart data");
              }
if (!data || !data.items || !Array.isArray(data.items)) {
  setError("Failed to load cart items");
  return;
}

const cartItemsMapped = data.items.map(({ product, quantity, unitprice }:{product:any, quantity:number, unitprice:number}) => {
  if (!product) return null; // skip items without product
  return {
    productId: product._id,
    title: product.title,
    image: product.image,
    onsale: product.onsale,
    price: product.price,
    sale: product.sale,
    stock: product.stock,
    quantity,
    unitprice
  };
}).filter(Boolean); // إزالة أي nulls

setCartItems(cartItemsMapped);
setTotalAmount(data.totalAmount);

      
      setError(""); // مسح أي خطأ سابق
  console.log(data);
};



//update cart by changing quantity

const updateItemQtyCart = async (productId: string, quantity: number) => {
  if (!token) {
    setError("User not authenticated");
    return;
  }
    // التأكد من القيم قبل الإرسال
  console.log("Updating cart item with:", { productId, quantity })

  try {
    const response = await fetch("http://localhost:3001/cart/items", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    });

    const data = await response.json();

    if (!data || !data.items || !Array.isArray(data.items)) {
      setError(data?.message || "Failed to load cart items");
      return;
    }

    const cartItemsMapped = data.items
      .map(
        ({ product, quantity, unitprice }: { product: any; quantity: number; unitprice: number }) => {
          if (!product) return null;
          return {
            productId: product._id,
            title: product.title,
            image: product.image,
            onsale: product.onsale,
            price: product.price,
            sale: product.sale,
            stock: product.stock,
            quantity,
            unitprice,
          };
        }
      )
      .filter(Boolean);

    setCartItems(cartItemsMapped);
    setTotalAmount(data.totalAmount);
    setError(""); // مسح أي خطأ سابق
    console.log("Cart updated:", data);
  } catch (err: any) {
    console.error(err);
    setError(err.message || "Something went wrong while updating cart");
  }
};




// Delete Item in cart 
const deleteItemInCart = async (productId: string) => {
  if (!token) {
    setError("User not authenticated");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3001/cart/items/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });

    const data = await response.json();

    if (!data || !data.items || !Array.isArray(data.items)) {
      setError(data?.message || "Failed to load cart items");
      return;
    }

    const cartItemsMapped = data.items
      .map(
        ({ product, quantity, unitprice }: { product: any; quantity: number; unitprice: number }) => {
          if (!product) return null;
          return {
            productId: product._id,
            title: product.title,
            image: product.image,
            onsale: product.onsale,
            price: product.price,
            sale: product.sale,
            stock: product.stock,
            quantity,
            unitprice,
          };
        }
      )
      .filter(Boolean);

    setCartItems(cartItemsMapped);
    setTotalAmount(data.totalAmount);
    setError(""); // مسح أي خطأ سابق
    console.log("Cart updated:", data);
  } catch (err: any) {
    console.error(err);
    setError(err.message || "Something went wrong while updating cart");
  }
};


// Delete All
const emptyCart = async () => {
  if (!token) {
    setError("User not authenticated");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3001/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    });

    const data = await response.json();

    if (!data || !data.items || !Array.isArray(data.items)) {
      setError(data?.message || "Failed to load cart items");
      return;
    }

    const cartItemsMapped = data.items
      .map(
        ({ product, quantity, unitprice }: { product: any; quantity: number; unitprice: number }) => {
          if (!product) return null;
          return {
            productId: product._id,
            title: product.title,
            image: product.image,
            onsale: product.onsale,
            price: product.price,
            sale: product.sale,
            stock: product.stock,
            quantity,
            unitprice,
          };
        }
      )
      .filter(Boolean);

    setCartItems(cartItemsMapped);
    setTotalAmount(data.totalAmount);
    setError(""); // مسح أي خطأ سابق
    console.log("Cart updated:", data);
  } catch (err: any) {
    console.error(err);
    setError(err.message || "Something went wrong while updating cart");
  }
};



// SetOrder Ref
const setOrderRef = ({orderNo , orderId}: { orderNo: number; orderId: string })=>{
    setOrderId(orderId);
    setOrderNo(orderNo);
}

  return (
    <CartContext.Provider
      value={{ cartItems, totalAmount, addToCart , updateItemQtyCart, deleteItemInCart, emptyCart, orderNo,orderId , setOrderRef}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
