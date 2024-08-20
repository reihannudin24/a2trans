import SidebarComponent from "../component/Sidebar.Component"
import { Route, Routes } from "react-router-dom";
import EditPanelBus from "./Panel/Edit/EditPanelBus";
import EditPanelFacilities from "./Panel/Edit/EditPanelFacilities";
import EditPanelCategory from "./Panel/Edit/EditPanelCategory";
import EditPanelMerek from "./Panel/Edit/EditPanelMerek";
import EditPanelVendor from "./Panel/Edit/EditPanelVendor";
import { NavbarPanelComponent } from "../component/Navbar.Component";

function PanelEdit() {
    return (
        <section className={"bg-gray-50  min-h-screen pt-5 md:py-10"}>
            <div className={"mt-10  lg:my-0 hidden lg:block"}>
                <SidebarComponent />
            </div>
            <div className={"w-11/12 mx-auto lg:w-full"}>
                <Routes>
                    <Route path={"bus/:id"} element={<EditPanelBus />} />
                    <Route path={"facilities/:id"} element={<EditPanelFacilities />} />
                    <Route path={"categories/:id"} element={<EditPanelCategory />} />
                    <Route path={"brand/:id"} element={<EditPanelMerek />} />
                    <Route path={"vendor/:id"} element={<EditPanelVendor />} />
                </Routes>
            </div>
        </section>
    )
}

export default PanelEdit