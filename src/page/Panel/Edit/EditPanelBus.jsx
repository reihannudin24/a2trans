import { useEffect, useState } from "react";
import { LabelText } from "../../../component/Label.Component";
import { InputText } from "../../../component/Input.Component";
import { useParams } from "react-router-dom";
import apiAuth from "../../../function/axiosAuth";

function EditPanelBus() {
    const { id } = useParams();
    const [busName, setBusName] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();

    }

    const checkData = async ()  => {
        // const responseData = await apiAuth.post('/bus/add/new', dataForm)

    }

    useEffect(() => {
        checkData()
    }, [])
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full  mb-6  mx-auto">
                    <div className="relative flex flex-col  min-w-0 shadow-md rounded-md bg-white m-5">
                        <div className="relative flex flex-col  border border-dashed bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 font-semibold">Add Data</span>
                                    <span className="font-medium mt-1">Menambah data kedalam database</span>
                                </h3>
                            </div>

                            <div className="py-8 pt-6 px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text={"Bus Name"} htmlFor={"bus_name"} />
                                        <InputText id={"bus_name"} value={busName} set={setBusName} placeholder={"Enter Bus Name"} />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPanelBus;