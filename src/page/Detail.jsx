import { CardDetialComponent } from "../component/Card.Component"
import { CarousselGalleryComponent } from "../component/Caroussel.Component"
import {useEffect, useState} from "react";
import apiAuth from "../function/axiosAuth";
import {textPopUp} from "../function/swal";

function Detail() {

    const [bus, setBus] = useState([]);
    useEffect(() => {
        const fetchDataBus = async () => {
            try {
                const response = await apiAuth.get('/bus/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setBus(response?.data?.data || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };

        fetchDataBus();
    }, []);


    // Note : Belum di kasih query jadi blm bisa detek bus by id / nama

    // Data Gallery Bus
    const arrayDummy = [
        "/assets/img/bus/bus-1.jpg",
        "/assets/img/bus/bus-1.jpg",
        "/assets/img/bus/bus-1.jpg",
        "/assets/img/bus/bus-1.jpg"
    ]

    // Note : ini gw nama asal dlu nnti ubah aja
    const arrayDummyBus = {
        status: true,
        nama_bus: "Bus Gede",
        thumbAsli: "/assets/img/bus/bus-1.jpg"
    }

    return (
        <section className={"w-full pt-20 mx-auto container"}>
            <CardDetialComponent data={arrayDummyBus}/>
            <CarousselGalleryComponent data={arrayDummy} />
            {/* <CalenderComponent /> */}
        </section>
    )
}

export default Detail