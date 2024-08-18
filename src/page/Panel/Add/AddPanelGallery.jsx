import { useCallback, useEffect, useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import apiImage from "../../../function/axiosImage";
import { LabelText } from "../../../component/Label.Component";
import { InputImage, InputSelectOption, InputNumber, InputText, InputTextArea } from "../../../component/Input.Component";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";
import { useParams, useNavigate } from "react-router-dom";



function AddPanelGallery() {
    const { id } = useParams();

    const navigate = useNavigate()

    const [selectedGalleryFiles, setSelectedGalleryFiles] = useState([]);

    const handleFileChangeGallery = (event) => {
        const files = Array.from(event.target.files);
        setSelectedGalleryFiles(files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedGalleryFiles.length) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }
        const dataForm = {
            bus_id: id,
            images: selectedGalleryFiles
        }
        console.log(selectedGalleryFiles)

        try {
            // FETCHING
            const responseData = await apiImage.post('/image_bus/add/new', dataForm)
            console.log(responseData)

            // // RESPONE
            if (responseData.status === 201) {

                console.log('data bus uploaded successfully');
                event.target.reset();
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")

                return;
            } else {
                console.error('File upload failed');
                textPopUp("Error", "Failed to fetch bus data. Please try again later.", "error");
            }

        } catch (error) {
            console.error('Error uploading files:', error);
            textPopUp("Error", "Failed to fetch bus data. Please try again later.", "error");
        }
    };

    const [loop, setLoop] = useState(true)
    const checkData = useCallback(async () => {
        const responseData = await apiAuth.get(`/bus/show?id=${id}`);
        if (responseData.data.data?.buses.length === 0) return navigate("/panel/bus")
        setLoop(false);
    }, [id, navigate]);


    useEffect(() => {
        if (loop === true) {
            checkData()
        }
    }, [loop, checkData])

    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full  mb-6  mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">Menambahkan data bus</span>
                                    <span className="font-medium mt-1">Menambah data kedalam database</span>
                                </h3>
                            </div>
                            <div className="py-8 pt-6 px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text={"Image Gallery"} htmlFor={"image_gallery"} />
                                        <InputImage id={"image_gallery"} change={handleFileChangeGallery} multiple={true} />
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

export default AddPanelGallery;