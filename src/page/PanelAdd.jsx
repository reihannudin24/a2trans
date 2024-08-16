import SidebarComponent from "../component/Sidebar.Component"
import { Route, Routes } from "react-router-dom";
import AddPanelBus from "./Panel/Add/AddPanelBus";
import { NavbarPanelComponent } from "../component/Navbar.Component";
import AddPanelMerek from "./Panel/Add/AddPanelMerek";
import AddPanelCategories from "./Panel/Add/AddPanelCategories";
import AddPanelFacilities from "./Panel/Add/AddPanelFacilities";
import NotFound from "./NotFound";

export default function PanelAdd() {
    return (
        <section className={"bg-gray-50 min-h-screen py-10"}>
            <SidebarComponent />
            <NavbarPanelComponent text={"Add Data"} direct={"Add"} />
            <div>
                <Routes>
                    <Route path={"new/bus"} element={<AddPanelBus />} />
                    <Route path={"new/facilities"} element={<AddPanelFacilities />} />
                    <Route path={"new/categories"} element={<AddPanelCategories />} />
                    <Route path={"new/brand"} element={<AddPanelMerek />} />
                    <Route path="*" element={<NotFound />} /> {/* Handle other undefined paths */}
                </Routes>
            </div >
        </section >
    )
}