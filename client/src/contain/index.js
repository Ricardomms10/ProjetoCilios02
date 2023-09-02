import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/index";
import { Login } from "../components/login/index";
import { Agenda } from "../components/agenda/index";
import { RequireAuth } from "../contexts/Require"
import { AuthProvider } from "../contexts/Context";


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/agenda/:trabalho/:preco" element={<RequireAuth> <Agenda /> </RequireAuth>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
