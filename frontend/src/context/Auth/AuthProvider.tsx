import { useState, type FC, type PropsWithChildren } from "react";
import {  AuthContext } from "./AuthContext";

const BASE_lOCAL_EMAIL ='email';
const BASE_lOCAL_TOKEN ='token';


 const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [email, setEmail] = useState<string | null>(localStorage.getItem(BASE_lOCAL_EMAIL));
    const [token, setToken] = useState<string | null>(localStorage.getItem(BASE_lOCAL_TOKEN));

    const login = ( email:string, token:string) => {
        setEmail(email);
        setToken(token);
        localStorage.setItem(BASE_lOCAL_EMAIL, email || "");
        localStorage.setItem(BASE_lOCAL_TOKEN, token || "");
    }

    return (
        <AuthContext.Provider value={{ email, token, login, isAuthenticated: !!token }}>
        {children}
</AuthContext.Provider>
    )
}


export default AuthProvider;