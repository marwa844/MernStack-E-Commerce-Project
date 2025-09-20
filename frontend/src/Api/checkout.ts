import type { ICheckout } from "../utils/data";

const CHECKOUT_BASE_URL = "http://localhost:3001/cart/checkout";


export const checkoutFetch = async ({data, token}:{data:ICheckout, token:string | null}) => {
    try {
        const response = await fetch(CHECKOUT_BASE_URL,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,


                }
            })
        if (!response.ok) {
            console.log(`${response.statusText}: ${response.status}`)
            throw new Error(`${response.statusText}: ${response.status}`);

        }
        const result = await response.json();
        return result;

    } catch (err) {
        throw err;
    }


}
