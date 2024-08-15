import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiJson from "../../function/axios";
import { textPopUp } from "../../function/swal";
import {CardPanelCategoryComponent, CardPanelFacilitiesComponent} from "../../component/PanelComponent";
import {NavbarNewPanelComponent} from "../../component/Navbar.Component";
import {WidgetComponent} from "../../component/Widget.Component";
import {MdBarChart} from "react-icons/md";
import {IoDocuments} from "react-icons/io5";
import apiAuth from "../../function/axiosAuth";

function PanelFacilities() {
    const navigate = useNavigate();
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiAuth.get('/facilities/show' , {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setFacilities(response?.data?.data || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };
        fetchData();
    }, []);


    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full flex max-w-full mb-6 mx-auto">
                    <div className="relative w-3/12 flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-5 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">List Kategori</span>
                                </h3>
                                <a href="/panel/add/new/categories" className="p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Tambahkan Kategori</a>
                            </div>
                            <div className="px-5">
                                <span className="font-medium mt-1">Semua data Kategori dari database</span>
                            </div>

                        </div>
                    </div>
                    <div className="flex-auto w-10/12 block py-8 pt-6 px-0">
                        <div className={"mt-4"}>
                            <ul className={"flex gap-2"}>
                                {facilities.length === 0 ? (
                                    <div>
                                        <div>
                                            Tidak Ada data
                                        </div>
                                    </div>
                                ): (
                                    <>
                                        {facilities.map((item, index) => {
                                            return(
                                                <li className={"w-3/12"}>
                                                    <WidgetComponent
                                                        icon={<MdBarChart className="h-7 w-7" />}
                                                        title={""}
                                                        subtitle={item?.name}
                                                    />
                                                </li>
                                            )
                                        })}
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PanelFacilities;
