import { useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import { LabelText } from "../../../component/Label.Component";
import { InputText, InputTextArea } from "../../../component/Input.Component";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";

function AddPanelCategories() {

    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !icon) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }

        const dataForm = {
            name: name,
            icon: icon,
        }

        try {
            const responseData = await apiAuth.post('/facilities/add/new', dataForm);
            console.log(responseData.data.data[0].insertId)
            textPopUp("Success", "Berhasil menambah data kedatabase", "success")
        } catch (err) {
            console.error('Error uploading files:', err);
        }

    }

    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full  mb-6  mx-auto">
                    <div className="relative flex flex-col  min-w-0 shadow-md rounded-md bg-white m-5">
                        <div className="relative flex flex-col  border border-dashed bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 font-semibold">Add Facilities Data</span>
                                    <span className="font-medium mt-1">Menambah data kedalam database</span>
                                </h3>
                            </div>

                            <div className="py-8 pt-6 px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text={"Name"} htmlFor={"name"} />
                                        <InputText id={"name"} value={name} set={setName} placeholder={"Enter Name"} />
                                    </div>
                                    <div className="mb-5">
                                        <LabelText text={"Des"} htmlFor={"icon"} />
                                        <InputTextArea id={"description"} value={icon} set={setIcon} placeholder={"Enter Icon"} rows={4} />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="hover:shadow-form w-full rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                            Submit
                                        </button>
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

export default AddPanelCategories;