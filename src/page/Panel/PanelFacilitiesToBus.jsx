import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiAuth from "../../function/axiosAuth";
import { textPopUp } from "../../function/swal";
import { NavbarNewPanelComponent } from "../../component/Navbar.Component";
import { CardPanelFacilitiesToBusComponent } from "../../component/PanelComponent";

function PanelFacilitiesToBus() {

    const { id } = useParams();

    const navigate = useNavigate();
    const [facilities, setFacilities] = useState();
    const [loop, setLoop] = useState(true);

    const fetchData = async (endpoint, setData) => {
        try {
            const response = await apiAuth.get(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 20000,
            });

            setData(response?.data?.data?.buses[0] || []);
        } catch (error) {
            console.error(error);
            textPopUp("Error", `Terjadi kesalahan saat mengambil data: ${error?.message}`, "error");
        }
    };

    useEffect(() => {
        if (loop) {
            fetchData(`/bus/show?id=${id}`, setFacilities);
            setLoop(false);
        }
    }, [loop, id]);


    return (
        <>
            <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
                <NavbarNewPanelComponent brandText="Dashboard" currentPath={""} />
                <div className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full max-w-full mb-6 mx-auto">
                            <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                                <div className="relative flex flex-col bg-clip-border rounded-2xl">
                                    <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                        <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                            <span className="mr-3 text-lg font-semibold">List Fasilitas</span>
                                        </h3>
                                        <a href={`/panel/add/new/relation/facilities/${id}`} className="p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Tambahkan Fasilitas</a>
                                    </div>
                                    <div className="px-9">
                                        <span className="font-medium mt-1">Semua data Fasilitas dari database</span>
                                    </div>
                                    <div className="flex-auto block py-8 pt-6 px-9">
                                        <div className="overflow-x-auto scrollbar-hide">
                                            <table className="w-full my-0">
                                                <thead className="align-bottom">
                                                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                        <th className="pb-3 ps-3 text-start min-w-[50px]">Id</th>
                                                        <th className="pb-3 pr-12 text-start min-w-[140px]">Nama</th>
                                                        <th className="pb-3 pr-12 text-end min-w-[140px]">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className={"scrollbar-hide"}>
                                                    {facilities?.facilities.length === 0 ? (
                                                        <tr>
                                                            <td colSpan="6">
                                                                <div className={"my-10 mx-4"}>
                                                                    <h1>Data kosong</h1>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        <>
                                                            {facilities?.facilities.map((item, index) => (
                                                                <CardPanelFacilitiesToBusComponent
                                                                    key={item.facility_pivot_ids[0]} // Added key prop
                                                                    index={index}
                                                                    id={item?.facility_pivot_ids[0]}
                                                                    item={item}
                                                                    navigate={navigate}
                                                                    setFacilities={setFacilities}
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
            </div>
        </>
    )
}

export default PanelFacilitiesToBus