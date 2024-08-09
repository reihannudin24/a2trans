import './App.css';
import { NavbarComponent } from "./component/Navbar.Component";
import { Route, Routes } from "react-router-dom";
import Categories from "./page/Categories";
import Home from './page/Home';
import Detail from "./page/Detail";
import {FooterComponent} from "./component/Footer.Component";


function App() {
    return (
        <main className={"w-full bg-white"}>
            <NavbarComponent />
            <section className={"pt-14"}>
                <Home />
                {/*<Routes>*/}
                {/*    <Route path={"/"} element={<Home />} />*/}
                {/*    /!*<Route path={"/detail/:id"} element={<Detail />} />*!/*/}
                {/*    /!*<Route path={"/categories"} element={<Categories />} />*!/*/}
                {/*</Routes>*/}
            </section>
            <FooterComponent />
        </main>
    );
}

export default App;
