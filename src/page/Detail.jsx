import { CardDetialComponent } from "../component/Card.Component"
import { CarousselGalleryComponent } from "../component/Caroussel.Component"
import {useEffect, useState} from "react";
import apiAuth from "../function/axiosAuth";
import {textPopUp} from "../function/swal";
import {useParams} from "react-router-dom";

function Detail() {

    const { id } = useParams();
    const [bus, setBus] = useState([]);
    console.log(id)
    useEffect(() => {
        const fetchDataBus = async () => {
            try {
                const response = await apiAuth.get('/bus/show', {
                    params: { id } // Mengirim id sebagai query parameter
                });
                setBus(response?.data?.data || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };

        fetchDataBus();
    }, []);

    console.log(bus)



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
            <div className={"w-11/12 mx-auto py-5 "}>
                <div>
                    <div>
                        <h3 className={"text-md font-semibold text-gray-700"}>Tentang : </h3>
                    </div>
                </div>
                <div className={"w-10/12 mx-auto"}>
                    <ul className={" w-full list-disc block"}>
                        <li className={"my-3"}>
                            <p className={"text-sm text-gray-600 font-normal"}>
                                Kode * (bintang) merupakan kategori B sehingga harus melakukan pemesanan terlebih dahulu ke pabrik
                            </p>
                        </li>
                        <li className={"my-3"}>
                            <p className={"text-sm text-gray-600 font-normal"}>
                                Harga tidak mengikat, sewaktu-waktu dapat berubah tanpa pemberitahuan sebelumnya
                            </p>
                        </li>
                        <li className={"my-3"}>
                            <p className={"text-sm text-gray-600 font-normal"}>
                                Jika ada selisih biaya progresif maka menjadi tanggung jawab konsumen
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={"py-10"}>
                    <div>
                        <button className={"bg-red-700  cursor-pointer text-xs text-white hover:bg-red-800 py-3 px-4 rounded-full "}>
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
            {/* <CalenderComponent /> */}
        </section>
    )
}

export default Detail