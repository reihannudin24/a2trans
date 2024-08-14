import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";

import Home from './page/Home';
import Detail from "./page/Detail";
import Rent from './page/Rent';

import Panel from './page/Panel';
import PanelAdd from './page/PanelAdd';

import Login from './page/Login';

import { NavbarComponent } from "./component/Navbar.Component";
import { FooterComponent } from "./component/Footer.Component";
import PanelEdit from "./page/PanelEdit";
import NotFound from "./page/NotFound";


function App() {
    const location = useLocation();

    const isPanelRoute = location.pathname.includes("/panel") ||
        location.pathname.includes("/login") 

    return (
        <main className={"w-full bg-white"}>
            {!isPanelRoute && <NavbarComponent />}
            <section className={""}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/detail"} element={<Detail />} />
                    <Route path={"/rent"} element={<Rent />} />

                    {/* LOGIN */}
                    <Route path={"/login"} element={<Login />} />

                    {/* PANEL */}
                    <Route path={"/panel/*"} element={<Panel />} />
                    <Route path={"/panel/add/*"} element={<PanelAdd />} />
                    <Route path={"/panel/edit/*"} element={<PanelEdit />} />
<<<<<<< HEAD
=======
                    <Route path="*" element={<NotFound />} /> {/* Handle other undefined paths */}

>>>>>>> 57b69f5e7f72d8f9f5d682e6c93d2e04bd1124de
                </Routes>
            </section>
            {!isPanelRoute && <FooterComponent />}
        </main>
    );
}

export default App;
