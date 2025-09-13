import { useState, type FC, type PropsWithChildren } from "react";
import {  AuthContext } from "./AuthContext";

const BASE_lOCAL_USERNAME ='userName';
const BASE_lOCAL_EMAIL ='email';
const BASE_lOCAL_TOKEN ='token';


 const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [userName, setUserName] = useState<string | null>(localStorage.getItem(BASE_lOCAL_USERNAME));
    const [email, setEmail] = useState<string | null>(localStorage.getItem(BASE_lOCAL_EMAIL));
    const [token, setToken] = useState<string | null>(localStorage.getItem(BASE_lOCAL_TOKEN));

    const login = (fullName:string, email:string, token:string) => {
        setUserName(fullName);
        setEmail(email);
        setToken(token);
        localStorage.setItem(BASE_lOCAL_USERNAME, userName || "");
        localStorage.setItem(BASE_lOCAL_EMAIL, email || "");
        localStorage.setItem(BASE_lOCAL_TOKEN, token || "");
    }


    return (
        <AuthContext.Provider value={{userName, email, token, login}}>
        {children}
</AuthContext.Provider>
    )
}


export default AuthProvider;