import { useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
// import apiImage from "../../../function/axiosImage";
import { LabelText } from "../../../component/Label.Component";
import { InputText } from "../../../component/Input.Component";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";
import {useNavigate} from "react-router-dom";

function AddPanelCategories() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    // const [selectedFiles, setSelectedFiles] = useState([]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }
        const dataForm = {
            name: name,
        }

        try {
            const responseData = await apiAuth.post('/categories/add/new', dataForm)

            // RESPONE
            if (responseData.status === 201) {
                console.log('data category uploaded successfully');
                setName("");
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")

                navigate('/panel/category');

            } else {
                console.error('File upload failed');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap md:-mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 font-semibold">Add Data</span>
                                    <span className="font-medium mt-1">Menambah data kedalam database</span>
                                </h3>
                            </div>

                            <div className="py-8 pt-6 px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text={"Category Bus"} htmlFor={"category_bus"} />
                                        <InputText id={"category_bus"} value={name} set={setName} placeholder={"Enter Category Bus"} />
                                    </div>
                                    {/* <div className="mb-5">
                                        <LabelText text={"Image Category"} htmlFor={"image_category"} />
                                        <InputImage id={"image_category"} change={handleFileChangeThumb} multiple={false} />
                                    </div> */}

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