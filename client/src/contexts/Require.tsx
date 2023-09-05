import { TokenContext } from "./Token";
import { useContext } from "react"
import { Login } from "../components/login/index"
import React from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(TokenContext);

    console.log(auth, "RequireAuth"); 
    
    const userApistorageData = localStorage.getItem("authUser");
    if (userApistorageData !== null) {
        var userApi = JSON.parse(userApistorageData);
        if (!userApi) {
            console.log(userApi)
            return <Login />;
        }
    }
    return children;
}