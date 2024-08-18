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
        <section className={"bg-gray-50 min-h-screen py-10"}>
            <SidebarComponent />
            <div>
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