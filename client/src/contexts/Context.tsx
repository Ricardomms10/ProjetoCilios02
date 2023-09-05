import React, { useState, useEffect } from "react";
import { User } from "../types/User";
import { useApi } from "../hooks/userApi";
import { TokenContext } from "./Token";



export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateUser = async () => {
            const storageData = localStorage.getItem("authUser");
            console.log(storageData)
            if (storageData) {
                setUser(JSON.parse(storageData));
            }
        };
        validateUser();
    }, []);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        console.log(data.user, "caiu no papin")
        if (data.user) {
            setUser(data.user); // Defina o usuário como data.user quando o login for bem-sucedido
            // Salvar no localStorage quando o usuário faz login com sucesso
            localStorage.setItem("authUser", JSON.stringify(data.user));
            return true;
        }
        return false;
    };

    const signout = async () => {
        await api.logout();
        setUser(null);
        // Remover os dados do usuário do localStorage quando o usuário faz logout
        localStorage.removeItem("authUser");
    };

    return (
        <TokenContext.Provider value={{ user, signin, signout }}>
            {children}
        </TokenContext.Provider>
    );
};



