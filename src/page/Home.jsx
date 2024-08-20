import { CarousselComponent } from "../component/Caroussel.Component"
import {
    // FaqComponent,
    Promo2Component,
    Promo3Component,
    PromoComponent,
    TestimonialComponent
} from "../component/Promo.Component"
import { ListCardProductComponent } from "../component/Card.Component";
import { useEffect, useState } from "react";
import { textPopUp } from "../function/swal";
import apiJson from "../function/axios";

function Home() {

    const [bus, setBus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loop, setLoop] = useState(true);

    useEffect(() => {
        const fetchDataBus = async () => {
            try {
                const responseBus = await apiJson.get('/bus/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setBus(responseBus?.data?.data?.buses || []);

                const responseCategories = await apiJson.get('/categories/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log(responseCategories?.data?.data)
                setCategories(responseCategories?.data?.data?.categories || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
            
            setLoop(false)
        };

        if (loop === true) {
            fetchDataBus();
        }
    }, [loop]);

    console.log(process.env.REACT_APP_PANEL_WEBSITE)



    return (
        <section className={"w-full overflow-x-hidden mx-auto container"} style={{ maxWidth: "1500px" }}>
            <div className={"w-full"} >
                <CarousselComponent categories={categories} />
                <PromoComponent />
                <Promo2Component />
                <ListCardProductComponent bus={bus} categories={categories} />
                {/*<ListCardComponent title={"Jenis-Jenis Kendaraan "} data={ArrayTypeBus} />*/}
                <TestimonialComponent />
                {/* <FaqComponent /> */}
                <Promo3Component />
            </div>
        </section>
    )
}

export default Home