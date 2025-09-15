import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";

function  ProtectedRoute(){
    const {isAuthenticated} = useAuth();
    if(!isAuthenticated){
        return <Navigate to='/login' replace></Navigate>
    }
    return <Outlet></Outlet>
}
export default ProtectedRoute;