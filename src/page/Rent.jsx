import {useEffect, useState} from "react";
import { RentContentComponent } from "../component/Rent.Component";
import apiJson from "../function/axios";


function Rent() {

    const [bus, setBus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        const fetchDataBus = async () => {
            try {
                const response = await apiJson.get('/bus/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setBus(response?.data?.data || []);
            } catch (error) {
                console.error(error);
                // textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };
        const fetchFacilities = async () => {
          try{
              const response = await apiJson.get('/facilities/show', {
                 headers: {
                     'Content-Type' : 'application/json',
                 }
              });
              setFacilities(response?.data?.data || []);
          } catch (error) {
              console.error(error);
            //   textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
          }
        };
        const fetchDataCategory = async () => {
            try {
                const response = await apiJson.get('/categories/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setCategories(response?.data?.data?.categories || []);
            } catch (error) {
                console.error(error);
                // textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };

        fetchDataBus();
        fetchFacilities();
        fetchDataCategory();
    }, []);

    return (
        <>
            <section className={"w-full overflow-x-hidden mx-auto "} >
                <div className={"w-full "}>
                    <RentContentComponent
                        bus={bus}
                        facilities={facilities}
                        categories={categories}
                    />
                </div>
            </section>
        </>
    )
}


export default Rent