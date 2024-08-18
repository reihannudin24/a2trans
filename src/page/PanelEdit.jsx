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
        <section>
            <SidebarComponent />
            <NavbarPanelComponent text={"Edit Data"} direct={"Edit"} />
            <div>
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