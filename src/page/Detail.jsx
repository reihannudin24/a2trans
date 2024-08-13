import { CardDetialComponent } from "../component/Card.Component"
import { CarousselGalleryComponent } from "../component/Caroussel.Component"
import CalenderComponent from "../component/Calender.Component"

function Detail() {

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
            <CalenderComponent />
        </section>
    )
}

export default Detail