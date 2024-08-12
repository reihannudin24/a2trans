import { useState } from "react";
import { HeaderRent } from "../component/Banner.Component";
import { RentContentComponent } from "../component/Rent.Component";


function Rent() {

    const [search, setSearch] = useState("");

    const ArrayDummyBus = [
        {
            nama_bus: "Bus Gede",
            thumb: "/assets/img/bus/bus-1.jpg",
            harga: "100k"
        }
    ]


    const ArrayDummyCategoryCheckbox = [
        {
            "id": 1,
            "name": "Luxury",
            "value": "luxury",
        },
        {
            "id": 2,
            "name": "Bus",
            "value": "bus",
        },
        {
            "id": 3,
            "name": "Mini Bus",
            "value": "mini_bus",
        },
    ]

    const ArrayTypeBus = [
        {
            nama_bus: "Luxury Bus",
            category: "Travel Bus"
        },
        {
            nama_bus: "Luxury Bus",
            category: "Travel Bus"
        },
        {
            nama_bus: "Luxury Bus",
            category: "Travel Bus"
        },
        {
            nama_bus: "Luxury Bus",
            category: "Travel Bus"
        }
    ]

    return (
        <>
            <section className={"w-full"}>
                <div className={"w-full"}>
                    <HeaderRent search={search} setSearch={setSearch} />
                    <RentContentComponent
                        all_kendaraan={ArrayDummyBus}
                        category_checkbox={ArrayDummyCategoryCheckbox}
                        Type_Bus={ArrayTypeBus}
                        search={search} 
                    />
                </div>
            </section>
        </>
    )
}


export default Rent