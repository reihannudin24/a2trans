import { CarousselGalleryComponent } from "../component/Caroussel.Component"
import { useEffect, useState } from "react";
import apiAuth from "../function/axiosAuth";
import { textPopUp } from "../function/swal";
import { useParams, useNavigate } from "react-router-dom";
import { checkCategoryById, checkMerekById } from "../function/function";

function Detail() {
    const navigate = useNavigate()

    const [brandName, setBrandName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [vendorName, setVendorName] = useState('');
    const [imageGallery, setImageGallery] = useState([]);

    const { id } = useParams();
    const [bus, setBus] = useState([]);
    const [loop, setLoop] = useState(true);


    useEffect(() => {
        const fetchDataBus = async () => {
            try {

                const response = await apiAuth.get(`/bus/show?id=${id}`, {
                    params: { id } // Mengirim id sebagai query parameter
                });
                if(response?.data?.data?.buses.length === 0 ) return navigate("/")

                setImageGallery(response?.data?.data?.buses[0]?.images || []);

                const merek = await checkMerekById(response?.data?.data?.buses[0]?.brand_id);
                const category = await checkCategoryById(response?.data?.data?.buses[0]?.categories_id);
                const vendor = await checkCategoryById(response?.data?.data?.buses[0]?.vendor_id);

                setVendorName(vendor);
                setBrandName(merek);
                setCategoryName(category);
                setBus(response?.data?.data?.buses[0] || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }

            setLoop(false)
        };

        if(loop === true) {
            fetchDataBus();
        }
    }, [bus, id, loop, navigate]);

    return (
        <section className={"w-full pt-20 mx-auto container"}>
            <div className="mx-4">
                <h1 className="font-semibold text-2xl mb-4 pt-10">Detail Kendaraan</h1>

                <div className={"block gap-4 justify-between rounded-md "}>
                    <div className={"block md:flex gap-3 justify-between"}>
                        <div className="block gap-4 justify-center sm:justify-normal">
                            <div className={"h-img-card flex gap-4"}>
                                <img alt="Img" className={"w-full h-full object-cover radius-card-img"} src={`http://127.0.0.1:8000${bus?.thumb}`} />
                            </div>
                            <CarousselGalleryComponent data={imageGallery} id={id} />
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
                                        <h2 className="text-white text-sm font-normal">{bus?.type}</h2>
                                    </div>
                                </div>
                                <div className={"mb-3 w-11/12 mx-auto"}>
                                    <div className="border-b pb-2 border-gray-200 w-full">
                                        <h1 className="text-xl text-gray-700 font-semibold">{vendorName}</h1>
                                    </div>
                                    <div className={"my-2"}>
                                        <p className={"text-sm text-gray-500"}>
                                            Deskripsi {vendorName} {brandName} ({categoryName})
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
                                        <div className={"w-11/12 text-center py-3 mx-auto cursor-pointer bg-red-500 rounded-lg flex flex-wrap justify-between h-full"}>
                                            <div className={"my-2 w-11/12"}>
                                                <p className={"text-xl text-white"}>{bus[0]?.seat}</p>
                                            </div>
                                            <div className={"w-11/12 mx-auto"}>
                                                <p className={"text-white text-sm font-light "}>Kapasitas Penumpang</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"w-4/12 "}>
                                        <div className={"w-11/12 text-center py-3 mx-auto cursor-pointer bg-red-500 rounded-lg flex flex-wrap justify-between h-full"}>
                                            <div className={"my-2 w-11/12"}>
                                                <p className={"text-xl text-white"}>{categoryName}</p>
                                            </div>
                                            <div className={"w-11/12 mx-auto"}>
                                                <p className={"text-white text-sm font-light"}>Category</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"w-4/12 "}>
                                        <div className={"w-11/12 text-center py-3 mx-auto cursor-pointer bg-red-500 rounded-lg flex flex-wrap justify-between h-full"}>
                                            <div className={"my-2 w-11/12"}>
                                                <p className={"text-white text-xl font-light "}>48</p>
                                            </div>
                                            <div className={"w-11/12 mx-auto"}>
                                                <p className={"text-white text-sm font-light "}>Vendor</p>
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
                                            <li className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            <li className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            <li className="my-4 text-gray-500">
                                                <p className="text-sm text-gray-500">facility</p>
                                            </li>
                                            <li className="my-4 text-gray-500">
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