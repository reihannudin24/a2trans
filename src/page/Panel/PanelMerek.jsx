import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import apiJson from "../../function/axios";
import {textPopUp} from "../../function/swal";
import {CardPanelFacilitiesComponent, CardPanelMerekComponent} from "../../component/PanelComponent";

function PanelMerek(){


    const navigate = useNavigate();

    const [merek, setMerek] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await apiJson.get('/merek/show');
                setMerek(response?.data);
            }catch (error){
                console.log(error)
                textPopUp("Error", "Login failed. Please check your credentials.", "error");
            }
        }
        fetchData()
    }, []);


    return(
        <>
            <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full max-w-full  mb-6  mx-auto">
                        <div className="relative flex flex-col  min-w-0 shadow-md rounded-md bg-white m-5">
                            <div className="relative flex flex-col  border border-dashed bg-clip-border rounded-2xl">
                                <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                    <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                        <span className="mr-3 font-semibold">List Bus</span>
                                    </h3>
                                    <a href="/panel/add" className="p-2 px-3 bg-green-500 rounded-lg text-white">Add Bus</a>
                                </div>
                                <div className="px-9">
                                    <span className="font-medium mt-1">Semua data bus dari database</span>
                                </div>
                                <div className="flex-auto block py-8 pt-6 px-9">
                                    <div className="overflow-x-auto">
                                        <table className="w-full my-0 ">
                                            <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[175px]">Id</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">Image</th>
                                                <th className="pb-3 text-end min-w-[175px]">Name</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {merek.map((item, index) => {
                                                return (
                                                    <CardPanelMerekComponent index={index} id={item?.id} item={item} navigate={navigate} />
                                                )
                                            })}
                                            </tbody>
                                        </table>
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

export default PanelMerek