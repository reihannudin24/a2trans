import SidebarComponent from "../component/Sidebar.Component"
import { Route, Routes } from "react-router-dom";
import AddPanelBus from "./Panel/Add/AddPanelBus";
import { NavbarPanelComponent } from "../component/Navbar.Component";
import AddPanelMerek from "./Panel/Add/AddPanelMerek";
import AddPanelCategories from "./Panel/Add/AddPanelCategories";
import AddPanelFacilities from "./Panel/Add/AddPanelFacilities";
import AddPanelVendor from "./Panel/Add/AddPanelVendor";
import NotFound from "./NotFound";
import AddPanelGallery from "./Panel/Add/AddPanelGallery";

export default function PanelAdd() {
    return (
        <section className={"bg-gray-50 min-h-screen py-10"}>
            <div className={"md:my-10 hidden md:block"}>
                <SidebarComponent />
            </div>
            <div className={"w-11/12 mx-auto lg:w-full"}>
                <Routes>
                    <Route path={"new/bus"} element={<AddPanelBus />} />
                    <Route path={"new/gallery/:id"} element={<AddPanelGallery />} />
                    <Route path={"new/facilities"} element={<AddPanelFacilities />} />
                    <Route path={"new/categories"} element={<AddPanelCategories />} />
                    <Route path={"new/vendor"} element={<AddPanelVendor />} />
                    <Route path={"new/brand"} element={<AddPanelMerek />} />
                    <Route path="*" element={<NotFound />} /> {/* Handle other undefined paths */}
                </Routes>
            </div >
        </section >
    )
}