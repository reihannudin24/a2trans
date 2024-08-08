import './App.css';
import { NavbarComponent } from "./component/Navbar.Component";
import { Route, Routes } from "react-router-dom";
import Categories from "./page/Categories";
import Home from './page/Home';
import Footer from './component/Footer.Component';


function App() {
    return (
        <main className={"w-full bg-white"}>
            <NavbarComponent />
            <section className={"pt-14"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/categories"} element={<Categories />} />
                </Routes>
            </section>
            <Footer />
        </main>
    );
}

export default App;
