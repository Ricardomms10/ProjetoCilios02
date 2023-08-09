import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Home } from "../components/home/index";
import { Login } from "../components/login/index";
import { Agenda } from "../components/agenda/agenda";


export const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/agenda/:trabalho/:preco" element={ <Agenda />}/>
        </Routes>
    </BrowserRouter>
)