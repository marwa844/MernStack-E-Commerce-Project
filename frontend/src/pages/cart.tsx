import { useEffect, useState } from "react"
import { useAuth } from "../context/Auth/AuthContext";
import { fetchCart } from "../Api/cart";

export default function Cart() {
    const { token } = useAuth();

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

    return (
        <>
            <h1>Cart</h1>
        </>
    )
}