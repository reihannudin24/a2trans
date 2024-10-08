import { confirmDelete, textPopUp } from "../function/swal";
import { useEffect, useState } from "react";
import apiAuth from "../function/axios";

export default function TableComponent({ data }) {

    const [bus, setBus] = useState([]);
    const [loop, setLoop] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiAuth.post('/bus/show');
                setBus(response?.data);
            } catch (error) {
                console.log(error)
                textPopUp("Error", "Login failed. Please check your credentials.", "error");
            }

            setLoop(false)
        }
        if(loop === true) {
            fetchData()
        }
    }, [loop]);


    const handleDelete = async (id) => {
        await confirmDelete('Are you sure?', 'apa kamu yakin untuk menghapus data ini', id).then(result => {
            if (result.confirmed) {
                console.log(result)

            }
        })
    }
    return (
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
                                    <table class="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[175px]">Bus</th>
                                                <th className="pb-3 text-end min-w-[175px]">Seat</th>
                                                <th className="pb-3 text-end min-w-[175px]">Kategori</th>
                                                <th className="pb-3 text-end min-w-[175px]">Tipe</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">Merek</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bus.map((res, index) => {
                                                return (
                                                    <tr key={index} className="border-b border-dashed last:border-b-0">
                                                        <td className="p-3 pl-0">
                                                            <div className="flex items-center">
                                                                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                    <img src={res.image} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                                                                </div>
                                                                <div className="flex flex-col justify-start">
                                                                    <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {res.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="p-3 pr-0 text-end">
                                                            <span className="font-semibold">{res.seat}</span>
                                                        </td>
                                                        <td className="p-3 pr-0 text-end">
                                                            <span className="font-semibold">{res.categories_id}</span>
                                                        </td>
                                                        <td className="p-3 pr-0 text-end">
                                                            <span className="font-semibold">{res?.type}</span>
                                                        </td>
                                                        <td className="p-3 pr-12 text-end">
                                                            <span className="font-semibold">{res?.merek}</span>
                                                        </td>
                                                        <td className="p-3 pr-12 text-end">
                                                            <div className="flex gap-4 justify-end">
                                                                <button onClick={() => handleDelete(res.id_bus)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                                                                <a href="/panel/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
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
    )
}