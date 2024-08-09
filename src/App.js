import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";

import Categories from "./page/Categories";
import Home from './page/Home';
import Detail from "./page/Detail";

import Panel from './page/Panel';
import PanelAdd from './page/PanelAdd';

import { NavbarComponent } from "./component/Navbar.Component";
import { FooterComponent } from "./component/Footer.Component";


function App() {
    const location = useLocation();

    const isPanelRoute = location.pathname === "/panel" || location.pathname === "/panel/add";

    return (
        <main className={"w-full bg-white"}>
            {!isPanelRoute && <NavbarComponent />}
            <section className={"pt-14"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/detail/:id"} element={<Detail />} />
                    <Route path={"/categories"} element={<Categories />} />

                    {/* PANEL */}
                    <Route path={"/panel"} element={<Panel />} />
                    <Route path={"/panel/add"} element={<PanelAdd />} />
                </Routes>
            </section>
            {!isPanelRoute && <FooterComponent />}
        </main>
    );
}

export default App;
