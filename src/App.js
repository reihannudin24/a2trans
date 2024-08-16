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
import Contact from "./page/Contact";
import About from "./page/About";
import PrivateRoute from "./function/middleware";


function App() {
    const location = useLocation();

    const isPanelRoute = location.pathname.includes("/panel") ||
        location.pathname.includes("/login") 

    return (
        <main className={"w-full bg-white overflow-x-hidden"} style={{minWidth:"300px"}}>
            {!isPanelRoute && <NavbarComponent />}
            <section className={"ma"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/detail/:id"} element={<Detail />} />
                    <Route path={"/rent"} element={<Rent />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/contact"} element={<Contact />} />

                    <Route path={"/login"} element={<Login />} />

                    {/*Touter ini harus udah ada token is auth true dan ada cokkies*/}
                    {/* PANEL */}

                    {/* Protected Routes */}
                    <Route path={"/panel/*"} element={<PrivateRoute element={<Panel />} />} />
                    <Route path={"/panel/add/*"} element={<PrivateRoute element={<PanelAdd />} />} />
                    <Route path={"/panel/edit/*"} element={<PrivateRoute element={<PanelEdit />} />} />

                    <Route path="*" element={<NotFound />} /> {/* Handle other undefined paths */}
                </Routes>
            </section>
            {!isPanelRoute && <FooterComponent />}
        </main>
    );
}

export default App;
