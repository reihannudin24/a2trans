import SidebarComponent from "../component/Sidebar.Component"
import {Route, Routes} from "react-router-dom";
import PanelBus from "./Panel/PanelBus";
import PanelCategory from "./Panel/PanelCategory";
import PanelMerek from "./Panel/PanelMerek";
import PanelFacilities from "./Panel/PanelFacilitas";
import PanelGallery from "./Panel/PanelGallery";
import PanelVendor from "./Panel/PanelVendor";

export default function Panel() {
    return (
        <section className={"bg-gray-50  min-h-screen py-10"}>
            <div className={"my-10 hidden md:block"}>
                <SidebarComponent />
            </div>
            <div className={"w-11/12 mx-auto lg:w-full"}>
                <Routes>
                    <Route path={"/bus"} element={<PanelBus />} />
                    <Route path={"/category"} element={<PanelCategory />} />
                    <Route path={"/brand"} element={<PanelMerek />} />
                    <Route path={"/facilities"} element={<PanelFacilities />} />
                    <Route path={"/vendor"} element={<PanelVendor />} />
                    <Route path={"/gallery/:id"} element={<PanelGallery />} />
                </Routes>
            </div>
        </section>
    )
}