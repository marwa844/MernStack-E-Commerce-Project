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
    const logout =()=>{
          localStorage.removeItem(BASE_lOCAL_EMAIL);
        localStorage.removeItem(BASE_lOCAL_TOKEN);
        setEmail(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ email, token, isAuthenticated: !!token , login , logout }}>
        {children}
</AuthContext.Provider>
    )
}


export default AuthProvider;