import SidebarComponent from "../component/Sidebar.Component"
import {Route, Routes} from "react-router-dom";
import PanelBus from "./Panel/PanelBus";
import PanelCategory from "./Panel/PanelCategory";
import PanelMerek from "./Panel/PanelMerek";
import PanelFacilities from "./Panel/PanelFacilitas";
import PanelGallery from "./Panel/PanelGallery";
import PanelVendor from "./Panel/PanelVendor";
import PanelDetail from "./Panel/PanelDetail";
import AddPanelFacilitiesToBus from "./Panel/Add/AddPanelFacilitiesToBus";
import PanelFacilitiesToBus from "./Panel/PanelFacilitiesToBus";

export default function Panel() {
    return (
        <section className={"bg-gray-50  min-h-screen pt-5 md:py-10"}>
            <div className={"mt-10  lg:my-0 hidden lg:block"}>
                <SidebarComponent />
            </div>
            <div className={"w-11/12 mx-auto lg:w-full"}>
                <Routes>
                    <Route path={"/bus"} element={<PanelBus />} />
                    <Route path={"/category"} element={<PanelCategory />} />
                    <Route path={"/brand"} element={<PanelMerek />} />
                    <Route path={"/facilities"} element={<PanelFacilities />} />
                    <Route path={"/vendor"} element={<PanelVendor />} />
                    <Route path={"/detail/:id"} element={<PanelDetail />} />
                    <Route path={"manage/detail/:id/facilities"} element={<PanelFacilitiesToBus />} />
                    <Route path={"manage/detail/:id/gallery"} element={<PanelGallery />} />

                </Routes>
            </div>
        </section>
    )
}