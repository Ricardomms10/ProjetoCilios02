import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/index";
import { Login } from "../components/login/index";
import { Agenda } from "../pages/agenda/index";
import { RequireAuth } from "../hooks/Require"

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/agenda/:trabalho/:preco" element={<RequireAuth> <Agenda /> </RequireAuth>} />
            </Routes>
        </BrowserRouter>
    );
}
