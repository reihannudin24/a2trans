import { CaretDown  } from "@phosphor-icons/react"
import SidebarComponent from "../component/Sidebar.Component"
import TableComponent from "../component/Table.Component"
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import PanelBus from "./Panel/PanelBus";
import PanelCategory from "./Panel/PanelCategory";
import PanelMerek from "./Panel/PanelMerek";
import PanelFacilities from "./Panel/PanelFacilitas";

function TextAtas() {
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <div className="justify-between flex items-center">
                <div className="text-gray-500">
                    <a href="/panel">Pages</a>
                    <span className="text-gray-600"> / Tables</span>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="https://dummyimage.com/300" alt="" className="w-12 h-12 rounded-3xl shadow-md object-cover" />
                    <span className="text-gray-600 font-medium">Andrian</span>
                    <CaretDown  size={19}/>
                </div>
            </div>

            <h1 className="text-gray-500 font-bold">Tables</h1>
        </div>
    )
}

export default function Panel() {

    // Bikin Fetching get

    const dataTable = [
        {
            id_bus: 1,
            thumb: "/assets/img/bus/bus-1.jpg",
            nama_bus: "Bus Amatron",
            category: "Bus Gede",
            status: "Ready"
        }
    ]
    return (
        <section>
            <SidebarComponent />
            <TextAtas />
            <div>
                <Routes>
                    <Route path={"/bus"} element={<PanelBus />} />
                    <Route path={"/category"} element={<PanelCategory />} />
                    <Route path={"/merk"} element={<PanelMerek />} />
                    <Route path={"/facilities"} element={<PanelFacilities />} />
                </Routes>
            </div>
            {/*<TableComponent data={dataTable} />*/}
        </section>
    )
}