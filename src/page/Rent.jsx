import {useEffect, useState} from "react";
import { HeaderRent } from "../component/Banner.Component";
import { RentContentComponent } from "../component/Rent.Component";
import {useNavigate} from "react-router-dom";
import apiAuth from "../function/axiosAuth";
import {textPopUp} from "../function/swal";


function Rent() {

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

    const [search, setSearch] = useState("");

    return (
        <>
            <section className={"w-full"}>
                <div className={"w-full"}>
                    <RentContentComponent
                        setSearch={setSearch}
                        bus={bus}
                        categories={categories}
                        search={search}
                    />
                </div>
            </section>
        </>
    )
}


export default Rent