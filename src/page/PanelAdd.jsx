import { CaretDown  } from "@phosphor-icons/react"
import SidebarComponent from "../component/Sidebar.Component"
import FormAddComponent from "../component/FormAdd.Component"
import {Route, Routes} from "react-router-dom";
import AddPanelBus from "./Panel/Add/AddPanelBus";
import {NavbarPanelComponent} from "../component/Navbar.Component";
import AddPanelMerek from "./Panel/Add/AddPanelMerek";
import AddPanelCategories from "./Panel/Add/AddPanelCategories";
import AddPanelFacilities from "./Panel/Add/AddPanelFacilities";

function TextAtas() {
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4 mt-16">
            <div className="justify-between flex items-center">
                <div className="text-gray-500">
                    <a href="/dashboard">Pages</a>
                    <span className="text-gray-600"> / Add</span>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="https://dummyimage.com/300" alt="" className="w-12 h-12 rounded-3xl shadow-md object-cover" />
                    <span className="text-gray-600 font-medium">Andrian</span>
                    <CaretDown  size={19}/>
                </div>
            </div>

            <h1 className="text-gray-500 font-bold">Add Data</h1>
        </div>
    )
}

export default function PanelAdd() {
    return (
        <section>
            <SidebarComponent />
            <NavbarPanelComponent />
            <div>
                <Routes>
                    <Route path={"/new/bus"} element={<AddPanelBus />}/>
                    <Route path={"/new/facilities"} element={<AddPanelFacilities />}/>
                    <Route path={"/new/categories"} element={<AddPanelCategories />}/>
                    <Route path={"/new/brand"} element={<AddPanelMerek />}/>
                </Routes>
            </div>
            <FormAddComponent />
        </section>
    )
}