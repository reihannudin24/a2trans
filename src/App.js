import './App.css';
import {NavbarComponent} from "./component/Navbar.Component";
import {Route, Routes} from "react-router-dom";
import Categories from "./page/Categories";
import Detail from "./page/Detail";

function App() {
  return (
   <main className={"w-full bg-white"}>
       <NavbarComponent  />
       <section className={"pt-14"}>
           <Routes>
               <Route path={"/categories"} element={<Categories />} />
               <Route path={"/detail/:id"} element={<Detail />} />
           </Routes>
       </section>
   </main>
  );
}

export default App;
