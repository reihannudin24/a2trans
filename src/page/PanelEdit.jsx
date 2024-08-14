import SidebarComponent from "../component/Sidebar.Component"
import FormAddComponent from "../component/FormAdd.Component"
import {Route, Routes} from "react-router-dom";
import EditPanelBus from "./Panel/Edit/EditPanelBus";
import EditPanelFacilities from "./Panel/Edit/EditPanelFacilities";
import EditPanelCategory from "./Panel/Edit/EditPanelCategory";
import EditPanelMerek from "./Panel/Edit/EditPanelMerek";
import {NavbarPanelComponent} from "../component/Navbar.Component";

function PanelEdit() {
    return (
        <section>
            <SidebarComponent />
            <NavbarPanelComponent />
            <div>
                <Routes>
                    <Route path={"/edit/bus/:id"} element={<EditPanelBus />}/>
                    <Route path={"/edit/facilities/:id"} element={<EditPanelFacilities />}/>
                    <Route path={"/edit/categories/:id"} element={<EditPanelCategory />}/>
                    <Route path={"/edit/brand/:id"} element={<EditPanelMerek />}/>
                </Routes>
            </div>
            {/*<FormAddComponent />*/}
        </section>
    )
}

export default PanelEdit