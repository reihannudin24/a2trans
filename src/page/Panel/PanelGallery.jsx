import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { textPopUp } from "../../function/swal";
import { CardPanelImageGalleryComponent } from "../../component/PanelComponent";
import { NavbarNewPanelComponent } from "../../component/Navbar.Component";
import {WidgetComponent, WidgetContainerComponent} from "../../component/Widget.Component";
import { Bus, ImageSquare } from "@phosphor-icons/react";
import { BiCategory } from "react-icons/bi";
import { BsTag } from "react-icons/bs";
import apiJson from "../../function/axios";
import apiAuth from "../../function/axiosAuth";
import {CarousselGalleryComponent} from "../../component/Caroussel.Component";


function PanelGallery() {

    const { id } = useParams();

    const navigate = useNavigate();
    const [bus, setBus] = useState([]);
    const [imageGallery, setImageGallery] = useState([]);
    const [loop, setLoop] = useState(true);

    const fetchData = async (endpoint, setData) => {
        try {
            const response = await apiJson.get(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 20000,
            });
            setData(response?.data?.data || []);
        } catch (error) {
            console.error(error);
            textPopUp("Error", `Terjadi kesalahan saat mengambil data: ${error?.message}`, "error");
        }
    };

    useEffect(() => {
        if (loop) {
            fetchData(`/bus/show?id=${id}`, setBus);
            fetchData(`/image_bus/show?bus_id=${id}`, setImageGallery);
            setLoop(false);
        }
    }, [loop]);


    return (
        <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
            <NavbarNewPanelComponent brandText="Dashboard" currentPath={""} />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">List Image Gallery Bus {id}</span>
                                </h3>
                                <a href={`/panel/add/new/gallery/6/${id}`} className="p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Tambahkan Image Gallery</a>
                            </div>
                            <div className="px-9">
                                <span className="font-medium mt-1">Semua data image gallery dari bus {id}</span>
                            </div>
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 ps-3 text-start min-w-[50px]">Id</th>
                                                <th className="pb-3 pr-12 text-start min-w-[140px]">Image</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className={"scrollbar-hide"}>
                                            {imageGallery.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6">
                                                        <div className={"my-10 mx-4"}>
                                                            <h1>Data kosong</h1>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : (
                                                <>
                                                    {imageGallery?.image_bus.map((item, index) => (
                                                        <CardPanelImageGalleryComponent
                                                            index={index}
                                                            id={item?.id}
                                                            item={item}
                                                            id_bus={id}
                                                            navigate={navigate}
                                                            setImageGallery={setImageGallery}
                                                        />
                                                    ))}
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PanelGallery