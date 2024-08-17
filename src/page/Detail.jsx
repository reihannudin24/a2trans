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
            <div className="mx-4">
                <h1 className="font-semibold text-2xl mb-4 pt-10">Detail Kendaraan</h1>

                <div className={"block gap-4 justify-between rounded-md "}>
                    <div className={"block md:flex gap-3 justify-between"}>
                        <div className="block gap-4 justify-center sm:justify-normal">
                            <div className={"h-img-card flex gap-4"}>
                                <img alt="Img" className={"w-full h-full object-cover radius-card-img"} src={arrayDummyBus.thumbAsli} />
                            </div>
                            <CarousselGalleryComponent data={arrayDummy} />
                            <div className={"w-11/12 lg:w-full mx-auto py-5 "}>
                                <div>
                                    <div>
                                        <h3 className={"text-md font-semibold text-gray-700"}>Tentang : </h3>
                                    </div>
                                </div>
                                <div className={"w-10/12 lg:w-full mx-auto"}>
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
                                    <div className={"lg:hidden "}>
                                        <button className={"bg-red-700  cursor-pointer text-xs text-white hover:bg-red-800 py-3 px-4 rounded-full "}>
                                            Pesan Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full my-5 mx-2 border shadow shadow-gray-400 rounded-2xl border-gray-50">
                                <div className="w-11/12 mx-auto flex">
                                    <div className="bg-gray-600/40 py-1 my-3 px-3 rounded-md">
                                        <h2 className="text-white text-sm font-normal">BUs Besar</h2>
                                    </div>
                                </div>
                                <div className={"mb-3 w-11/12 mx-auto"}>
                                    <div className="border-b pb-2 border-gray-200 w-full">
                                        <h1 className="text-xl text-gray-700 font-semibold">HINO</h1>
                                    </div>
                                    <div className={"my-2"}>
                                        <p className={"text-sm text-gray-500"}>
                                            Deskripsi HINO RK8JSKA (BIGBUS)
                                        </p>
                                    </div>
                                    <div className="my-5 w-full mx-auto">
                                        <a href="https://wa.me/6282111191279?text=Halo%20A2%20Trans%20saya%20ingin%20memesan%20kendaraan" target="_blank" rel="noopener noreferrer">
                                            <button className="bg-red-600 border border-gray-700 py-2 shadow shadow-gray-700 w-full rounded-md">
                                                <p className="text-white text-sm">Pesan sekarang</p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <ul className={"w-full flex "}>
                                    <li className={"w-4/12 "}>
                                        <div className={"w-11/12 text-center  py-3 mx-auto cursor-pointer bg-gray-500/80 rounded-lg"}>
                                            <div className={"my-2"}>
                                                <h2 className={"text-xl text-white"}>48</h2>
                                            </div>
                                            <div className={"w-11/12 mx-auto"}>
                                                <p className={"text-white text-sm font-light "}>Kapasitas Penumpang</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"w-4/12 "}>
                                        <div className={"w-11/12 text-center  py-3 mx-auto cursor-pointer bg-gray-500/80 rounded-lg"}>
                                            <div className={"my-2"}>
                                                <h2 className={"text-xl text-white"}>48</h2>
                                            </div>
                                            <div className={"w-11/12 mx-auto"}>
                                                <p className={"text-white text-sm font-light "}>Kapasitas Penumpang</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"w-4/12 "}>
                                        <div className={"w-11/12 text-center  py-3 mx-auto cursor-pointer bg-gray-500/80 rounded-lg"}>
                                            <div className={"my-2"}>
                                                <h2 className={"text-xl text-white"}>48</h2>
                                            </div>
                                            <div className={"w-11/12 mx-auto"}>
                                                <p className={"text-white text-sm font-light "}>Kapasitas Penumpang</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full my-5 mx-2 border shadow shadow-gray-400 rounded-2xl border-gray-50">
                                <div className="w-11/12 mx-auto">
                                    <div className="my-3 mx-2">
                                        <h2 className="text-sm font-normal text-gray-500">Fasilitas yang disediakan</h2>
                                    </div>
                                    <div className="w-10/12 my-3 mx-auto">
                                        <ul className="list-disc">
                                            <li  className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            <li  className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            <li  className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            <li  className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            {/*{item.facilities && item.facilities.map((facility, index) => (*/}
                                            {/*    <li key={index} className="my-4 text-gray-500">*/}
                                            {/*        <p className="text-sm text-gray-500">{facility}</p>*/}
                                            {/*    </li>*/}
                                            {/*))}*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* <CalenderComponent /> */}
        </section>
    )
}

export default Detail