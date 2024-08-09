import './App.css';
import { NavbarComponent } from "./component/Navbar.Component";
import { Route, Routes } from "react-router-dom";
import Categories from "./page/Rent";
import Home from './page/Home';
import Detail from "./page/Detail";
import {FooterComponent} from "./component/Footer.Component";
import Rent from "./page/Rent";


function App() {
    return (
        <main className={"w-full bg-white"}>
            <NavbarComponent />
            <section className={"pt-14"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/rent"} element={<Rent />} />
                    <Route path={"/detail/:id"} element={<Detail />} />

                </Routes>
            </section>
            <FooterComponent />
        </main>
    );
}

export default App;
