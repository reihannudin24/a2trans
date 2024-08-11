import { CardDetialComponent } from "../component/Card.Component"
import { CarousselGalleryComponent } from "../component/Caroussel.Component"

function Detail() {

    return (
        <section className={"w-full pt-20 mx-auto container"}>
            <CardDetialComponent />
            <CarousselGalleryComponent />
        </section>
    )
}

export default Detail