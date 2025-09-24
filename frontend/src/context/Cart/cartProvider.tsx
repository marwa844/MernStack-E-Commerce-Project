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
  const [orderNo, setOrderNo] = useState<number>(0);
  const [orderId, setOrderId] = useState<string>("");


  // Load cart on mount
  useEffect(() => {
    if (!token) return;
    fetchCart(token)
      .then((data) => updateCartState(data))
      .catch((err) => setError(err.message || "Failed to load cart"));
  }, []);

  // Helper to map backend data to frontend state
  const updateCartState = (data: any) => {
    if (!data || !data.items || !Array.isArray(data.items)) {
      setError("Failed to load cart items");
      return;
    }

    const cartItemsMapped = data.items
      .map(({ product, quantity, unitprice }: { product: any; quantity: number; unitprice: number }) => {
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
      })
      .filter(Boolean);

    setCartItems(cartItemsMapped);
    setTotalAmount(data.totalAmount);
    setError("");
  };

  // Add or increment product in cart
  const addToCart = async (productId: string, quantity: number) => {
    if (!token) {
      setError("User not authenticated");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/cart/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });

      const data = await response.json();

      if (!data || !data.items) {
        setError("Failed to load cart items");
        return;
      }

      updateCartState(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong while adding to cart");
    }
  };

  // Update product quantity
  const updateItemQtyCart = async (productId: string, quantity: number) => {
    if (!token) {
      setError("User not authenticated");
      return;
    }

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
      updateCartState(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong while updating cart");
    }
  };

  // Delete item from cart
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
      });

      const data = await response.json();
      updateCartState(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong while deleting item");
    }
  };

  // Empty entire cart
  const emptyCart = async () => {
    if (!token) {
      setError("User not authenticated");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();
      updateCartState(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong while emptying cart");
    }
  };

  // Set order reference
  const setOrderRef = ({ orderNo, orderId }: { orderNo: number; orderId: string }) => {
    setOrderId(orderId);
    setOrderNo(orderNo);
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addToCart,
        updateItemQtyCart,
        deleteItemInCart,
        emptyCart,
        orderNo,
        orderId,
        setOrderRef,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
