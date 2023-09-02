import { createContext } from "react";
import { User } from "../types/User";


export type TokenContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
};

export const TokenContext = createContext<TokenContextType>(null!);