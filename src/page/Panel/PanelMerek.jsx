import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { textPopUp } from "../../function/swal";
import { CardPanelMerekComponent } from "../../component/PanelComponent";
import { NavbarNewPanelComponent } from "../../component/Navbar.Component";
import { WidgetComponent } from "../../component/Widget.Component";
import { Bus, Seat } from "@phosphor-icons/react";
import apiJson from "../../function/axios";
import { BiCategory } from "react-icons/bi";
import { BsTag } from "react-icons/bs";

function PanelMerek() {


    const navigate = useNavigate();
    const [bus, setBus] = useState([]);
    const [category, setCategory] = useState([]);
    const [merek, setMerek] = useState([]);
    const [vendor, setVendor] = useState([]);
    const [loop, setLoop] = useState(true);



    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await apiJson.get('/bus/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                setBus(response?.data?.data?.buses || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }

            try {
                const response = await apiJson.get('/categories/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setCategory(response?.data?.data?.categories || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }

            try {
                const response = await apiJson.get('/brand/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setMerek(response?.data?.data?.brand || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }

            try {
                const response = await apiJson.get('/vendor/show', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setVendor(response?.data?.data?.vendors || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }

            setLoop(false)

        };

        if (loop === true) {
            fetchData();
        }
    }, [loop]);


    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className={"mt-4"}>
                <ul className={"gap-2 grid-cols-2 grid md:grid-cols-4"}>
                    <li className={"w-full lg:w-3/12"}>
                        <WidgetComponent
                            icon={<Bus size={24} className="h-7 w-7" />}
                            title={"Total Bus"}
                            subtitle={bus.length}
                        />
                    </li>
                    <li className={"w-full lg:w-3/12"}>
                        <WidgetComponent
                            icon={<BiCategory className="h-6 w-6" />}
                            title={"Total Category"}
                            subtitle={category.length}
                        />
                    </li>
                    <li className={"w-full lg:w-3/12"}>
                        <WidgetComponent
                            icon={<BsTag size={24} className="h-7 w-7" />}
                            title={"Total Merek"}
                            subtitle={merek.length}
                        />
                    </li>
                    <li className={"w-full lg:w-3/12"}>
                        <WidgetComponent
                            icon={<Seat className="h-6 w-6" />}
                            title={"Total Vendor"}
                            subtitle={vendor.length}
                        />
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">List Merek</span>
                                </h3>
                                <a href="/panel/add/new/brand" className="p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Tambahkan Merek</a>
                            </div>
                            <div className="px-9">
                                <span className="font-medium mt-1">Semua data merek dari database</span>
                            </div>
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 ps-3 text-start min-w-[50px]">Id</th>
                                                <th className="pb-3 pr-12 text-end min-w-[140px]">Nama</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className={"scrollbar-hide"}>
                                            {merek.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6">
                                                        <div className={"my-10 mx-4"}>
                                                            <h1>Data kosong</h1>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : (
                                                <>
                                                    {merek.map((item, index) => (
                                                        <CardPanelMerekComponent
                                                            key={item.id} // Added key prop
                                                            index={index}
                                                            id={item?.id}
                                                            item={item}
                                                            navigate={navigate}
                                                            setMerek={setMerek}
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

export default PanelMerek