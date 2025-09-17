import { useEffect, useState } from "react"
import { useAuth } from "../context/Auth/AuthContext";
import { fetchCart } from "../Api/cart";
import { useCart } from "../context/Cart/cartContext";
import { Box } from "@mui/material";

export default function Cart() {

    const { token } = useAuth();
    const {cartItems, totalAmount } = useCart();
/*

    const [cart, setCart] = useState();

    useEffect(() => {
        if (!token) {
            return;
        }
        fetchCart(token)
            .then((data) => setCart(data))
            .catch((err) => alert(err));

    }, [token])

    console.log({cart})


*/
    console.log({ cartItems })

    return (
        <>
            <h1>Cart</h1>
            {cartItems.map((i)=> (
                <Box><h1>{i._id}</h1></Box>
            ))}
        </>
    )
}