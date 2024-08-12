import {CarousselComponent} from "../component/Caroussel.Component"
import Detail, {
    FaqComponent,
    Promo2Component,
    Promo3Component,
    PromoComponent,
    TestimonialComponent
} from "../component/Promo.Component"
import {ListCardComponent} from "../component/Card.Component";

function Home() {

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
        <section className={"w-full"}>
            <div className={"w-full"}>
                <CarousselComponent />
                <PromoComponent />
                <Promo2Component />
                <ListCardComponent title={"Jenis-Jenis Kendaraan "} data={ArrayTypeBus} />
                <TestimonialComponent />
                <FaqComponent />
                <Promo3Component />
            </div>
        </section>
    )
}

export default Home