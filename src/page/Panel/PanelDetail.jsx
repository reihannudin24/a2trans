import { NavbarNewPanelComponent } from "../../component/Navbar.Component";
import { CarousselGalleryComponent } from "../../component/Caroussel.Component"
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import apiJson from "../../function/axios";
import { textPopUp } from "../../function/swal";

function PanelDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [bus, setBus] = useState(null);
    const [loop, setLoop] = useState(true);

    const fetchData = useCallback(async (endpoint, setData) => {
        try {
            const response = await apiJson.get(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 20000,
            });

            if (response?.data?.data?.buses.length === 0) return navigate("/panel/bus")
            setData(response?.data?.data || null);
        } catch (error) {
            console.error(error);
            textPopUp("Error", `Terjadi kesalahan saat mengambil data: ${error?.message}`, "error");
        }
    }, [navigate]);

    useEffect(() => {
        if (loop && id) {
            const endpoint = `/bus/show?id=${id}`;
            fetchData(endpoint, setBus);
            setLoop(false);
        }
    }, [loop, id, fetchData]);

    if (!bus) {
        return <div>Loading...</div>;
    }

    return (
        <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
            <NavbarNewPanelComponent brandText="Dashboard" currentPath="" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                        <div className="relative px-3 flex flex-col bg-clip-border rounded-2xl">
                            <div className="block gap-4 justify-center sm:justify-normal">
                                <div className={"h-img-card flex gap-4"}>
                                    <img
                                        alt="Img"
                                        className={"w-full h-full object-cover radius-card-img"}
                                        src={`https://panel.a2trans.com/${bus?.buses[0]?.thumb}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-5 mx-2">
                            <div className="w-11/12 mx-auto flex">
                                <div className="bg-gray-600/40 py-1 my-3 px-3 rounded-md">
                                    <h2 className="text-white text-sm font-normal">{bus?.buses[0]?.type}</h2>
                                </div>
                            </div>
                            <div className={"mb-3 w-11/12 mx-auto"}>
                                <div className="border-b pb-2 border-gray-200 w-full">
                                    <h1 className="text-xl text-gray-700 font-semibold">{bus?.buses[0]?.name}</h1>
                                </div>
                                <div className={"my-2"}>
                                    <p className={"text-sm text-gray-600 font-normal"}>
                                        Kode * (bintang) merupakan kategori B sehingga harus melakukan
                                        pemesanan terlebih dahulu ke pabrik
                                    </p>
                                </div>
                                <div className={"w-full my-5"}>
                                    <ul className={"w-full mx-auto flex"}>
                                        <li className={"w-4/12"}>
                                            <PanelCategories name={"Seat"} value={bus?.buses[0]?.seat} />
                                        </li>
                                        <li className={"w-4/12"}>
                                            <PanelCategories name={"Kategori"} value={bus?.buses[0]?.category_name} />
                                        </li>
                                        <li className={"w-4/12"}>
                                            <PanelCategories name={"Brand"} value={bus?.buses[0]?.brand_name} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-2 mx-2">
                            <div className={"w-11/12 lg:w-full mx-auto py-5"}>
                                <div className={"flex justify-between"}>
                                    <div className="mx-4">
                                        <h3 className={"text-lg font-semibold text-gray-700"}>Filter : </h3>
                                    </div>
                                    <div>
                                        <a href={`/panel/manage/detail/${id}/facilities`} className="mx-4 p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Kelola Fasilitas</a>
                                    </div>
                                </div>
                                <div className={"w-11/12 mx-auto "}>
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

                            </div>
                        </div>
                        <div className="w-full my-5 mx-2 ">
                            <div className={"w-11/12 lg:w-full mx-auto py-5 "}>
                                <div className={"flex justify-between"}>
                                    <div className="mx-4">
                                        <h3 className={"text-lg font-semibold text-gray-700"}>Gallery Kendaraan : </h3>
                                    </div>
                                    <div>
                                        <a href={`/panel/manage/detail/${id}/gallery`} className="mx-4 p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Kelola Galeri</a>
                                    </div>
                                </div>
                                <div className="mx-4 mt-4">
                                    <CarousselGalleryComponent data={bus?.buses[0]?.images} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelDetail;

export const PanelCategories = ({ value, name }) => {
    return (
        <div className={"w-11/12 text-center  py-3 mx-auto cursor-pointer bg-red-500 rounded-lg flex flex-wrap justify-between h-full"}>
            <div className={" w-11/12 mx-auto"}>
                <p className={"text-white text-md font-medium"}>{value}</p>
            </div>
            <div className={"w-11/12 mx-auto"}>
                <p className={"text-white text-sm font-light"}>{name}</p>
            </div>
        </div>
    );
};
