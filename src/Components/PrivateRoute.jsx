import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  
        const{loading,user} =useContext(AuthContext)
        const location=useLocation();
        if(loading){
            <span className="loading loading-spinner loading-lg text-error"></span>
        }
        if(user){
            return children
        }
        return <Navigate state={location.pathname} to="/signin"></Navigate>
 
};

export default PrivateRoute;