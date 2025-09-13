import type { ILogin, IRegister } from "../utils/data";

const USER_REGISTR_BASE_URL = "http://localhost:3001/user/register";
const USER_LOGIN_BASE_URL = "http://localhost:3001/user/login";


export const registerFetch = async (data: IRegister) => {
    try {
        const response = await fetch(USER_REGISTR_BASE_URL,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        if (!response.ok) {
            console.log(`${response.statusText}: ${response.status}`)
            throw new Error(`${response.statusText}: ${response.status}`);

        }
        const result = await response.json();
        console.log(result);
        return result;

    } catch (err) {
         console.log(err);
        throw err;
    }


}



export const loginFetch = async (data: ILogin) => {
    try {
        const response = await fetch(USER_LOGIN_BASE_URL,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        if (!response.ok) {
            console.log(`${response.statusText}: ${response.status}`)
            throw new Error(`${response.statusText}: ${response.status}`);

        }
        const result = await response.json();
        console.log(result);
        return result;

    } catch (err) {
         console.log(err);
        throw err;
    }


}
