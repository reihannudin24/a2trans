import {CarousselComponent} from "../component/Caroussel.Component"
import Detail, {
    FaqComponent,
    Promo2Component,
    Promo3Component,
    PromoComponent,
    TestimonialComponent
} from "../component/Promo.Component"
import {ListCardProductComponent} from "../component/Card.Component";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import apiAuth from "../function/axiosAuth";
import {textPopUp} from "../function/swal";

function Home() {

    const navigate = useNavigate();
    const [bus, setBus] = useState([]);
    const [categories, setCategories] = useState([]);

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
        const fetchDataCategory = async () => {
            try {
                const response = await apiAuth.get('/categories/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setCategories(response?.data?.data || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };

        fetchDataBus();
        fetchDataCategory()
    }, []);


    return (
        <section className={"w-full"}>
            <div className={"w-full"}>
                <CarousselComponent />
                <PromoComponent />
                <Promo2Component />
                <ListCardProductComponent bus={bus} categories={categories}/>
                {/*<ListCardComponent title={"Jenis-Jenis Kendaraan "} data={ArrayTypeBus} />*/}
                <TestimonialComponent />
                <FaqComponent />
                <Promo3Component />
            </div>
        </section>
    )
}

export default Home