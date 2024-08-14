import { useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import { LabelText } from "../../../component/Label.Component";
import { InputImage, InputText } from "../../../component/Input.Component";

function AddPanelMerek() {
    const [name, setName] = useState("");
    const [selectedImageFile, setSelectedImageFile] = useState(null);

    const handleFileChangeImage = (event) => {
        const file = event.target.files[0];
        setSelectedImageFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !selectedImageFile) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedImageFile);

        try {
            const response = await apiAuth.post('/facilities/add/new', formData);
            console.log(response.data.data[0].insertId);
            textPopUp("Success", "Berhasil menambah data ke database", "success");
        } catch (err) {
            console.error('Error uploading files:', err);
            textPopUp("Error", "Gagal mengunggah data", "error");
        }
    };

    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-md bg-white m-5">
                        <div className="relative flex flex-col border border-dashed bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 font-semibold">Add Data</span>
                                    <span className="font-medium mt-1">Menambah data ke dalam database</span>
                                </h3>
                            </div>

                            <div className="py-8 pt-6 px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text="Name" htmlFor="name" />
                                        <InputText id="name" value={name} set={setName} placeholder="Enter Name" />
                                    </div>

                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text="Image" htmlFor="image" />
                                                <InputImage id="image" change={handleFileChangeImage} multiple={false} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
    );
}

export default AddPanelMerek;
