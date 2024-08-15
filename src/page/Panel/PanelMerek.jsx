import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import apiJson from "../../function/axios";
import {textPopUp} from "../../function/swal";
import {CardPanelCategoryComponent, CardPanelMerekComponent} from "../../component/PanelComponent";
import {NavbarNewPanelComponent} from "../../component/Navbar.Component";
import {WidgetComponent} from "../../component/Widget.Component";
import {MdBarChart} from "react-icons/md";
import {IoDocuments} from "react-icons/io5";
import apiAuth from "../../function/axiosAuth";

function PanelMerek(){


    const navigate = useNavigate();
    const [merek, setMerek] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiAuth.get('/brand/show' , {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setMerek(response?.data?.data || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", `Terjadi kesalahan saat mengambil data ${error?.message}`, "error");
            }
        };
        fetchData();
    }, []);


    return(
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className={"mt-4"}>
                <ul className={"flex gap-2"}>
                    <li className={"w-3/12"}>
                        <WidgetComponent
                            icon={<MdBarChart className="h-7 w-7" />}
                            title={"Earnings"}
                            subtitle={"$340.5"}
                        />
                    </li>
                    <li className={"w-3/12"}>
                        <WidgetComponent
                            icon={<IoDocuments className="h-6 w-6" />}
                            title={"Spend this month"}
                            subtitle={"$642.39"}
                        />
                    </li>
                    <li className={"w-3/12"}>
                        <WidgetComponent
                            icon={<MdBarChart className="h-7 w-7" />}
                            title={"Earnings"}
                            subtitle={"$340.5"}
                        />
                    </li>
                    <li className={"w-3/12"}>
                        <WidgetComponent
                            icon={<IoDocuments className="h-6 w-6" />}
                            title={"Spend this month"}
                            subtitle={"$642.39"}
                        />
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full flex max-w-full mb-6 mx-auto">
                    <div className="relative lg:w-7/12 flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">List Kategori</span>
                                </h3>
                                <a href="/panel/add/new/categories" className="p-2 px-3 bg-green-500 rounded-lg text-sm text-white">Tambahkan Kategori</a>
                            </div>
                            <div className="px-9">
                                <span className="font-medium mt-1">Semua data Kategori dari database</span>
                            </div>
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0">
                                        <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 text-start min-w-[175px]">Id</th>
                                            <th className="pb-3 pr-12 text-end min-w-[175px]">Image</th>
                                            <th className="pb-3 text-end min-w-[175px]">Name</th>
                                            <th className="pb-3 pr-12 text-end min-w-[175px]">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {merek.map((item, index) => (
                                            <CardPanelMerekComponent
                                                key={item.id} // Added key prop
                                                index={index}
                                                id={item?.id}
                                                item={item}
                                                navigate={navigate}
                                            />
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:w-5/12 flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">List Bus</span>
                                </h3>
                            </div>
                            <div className="px-9">
                                <span className="font-medium mt-1">Semua data Kategori dari database</span>
                            </div>
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <div className="w-full my-0">
                                        <ul className={"w-full flex flex-wrap"}>
                                            {merek.map((item, index) => (
                                                <li className={"w-6/12"}>
                                                    <CardPanelMerekComponent
                                                        key={item.id} // Added key prop
                                                        index={index}
                                                        id={item?.id}
                                                        item={item}
                                                        navigate={navigate}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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