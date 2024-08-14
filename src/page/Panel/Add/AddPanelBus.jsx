import {useState} from "react";
import {textPopUp} from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import {LabelText} from "../../../component/Label.Component";
import {InputImage, InputSelectOption, InputText, InputTextArea} from "../../../component/Input.Component";

function AddPanelMerek () {
    const [selectedGalleryFiles, setSelectedGalleryFiles] = useState([]);
    const [selectedThumbFile, setSelectedThumbFile] = useState(null);

    const [busName, setBusName] = useState("");
    const [description, setDescription] = useState("");
    const [busCategory, setBusCategory] = useState("");
    const [busMerek, setbusMerek] = useState("");
    const [busType, setBusType] = useState("");

    const handleFileChangeGallery = (event) => {
        const files = Array.from(event.target.files);
        setSelectedGalleryFiles(files);
    };

    const handleFileChangeThumb = (event) => {
        const file = event.target.files[0];
        setSelectedThumbFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if ( !busName || !description || !busCategory || !busType || !busMerek) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }

        const formData = new FormData();
        selectedGalleryFiles.forEach((file, index) => {
            formData.append(`image_gallery-${index}`, file);
        });

        const dataForm = {
            name: busName,
            description: description,
            seat: 10,
            categories_id: busCategory,
            type: 1,
            merek_id: 2
        }

        try {
            // FETCHING
            const responseData = await apiAuth.post('/bus/add/new', dataForm)
            console.log(responseData.data.data[0].insertId)

            // const responseGallery = await fetch('/api/upload/image-gallery', {
            //     method: 'POST',
            //     body: formData,
            // });

            // const responseThumb = await fetch('/api/upload/image-gallery', {
            //     method: 'POST',
            //     body: selectedThumbFile,
            // });

            // // RESPONE
            if (responseData.status === 200) {
                console.log('data bus uploaded successfully');
                setBusName("");
                setDescription("");
                event.target.reset();
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")
                return;
            } else {
                console.error('File upload failed');
            }

            // if (responseGallery.ok) {
            //     console.log('Files and data image gallery uploaded successfully');
            //     setSelectedGalleryFiles([]);
            //     event.target.reset();
            //     textPopUp("Error", "Terjadi Eror Pada Fetching Image Gallery", "error")
            //     return;
            // } else {
            //     console.error('File upload failed');
            // }

            // if (responseThumb.ok) {
            //     console.log('Files and data image thumb uploaded successfully');
            //     setSelectedThumbFile("");
            //     event.target.reset();
            //     textPopUp("Error", "Terjadi Eror Pada Fetching Image Thumb", "error")
            //     return;
            // } else {
            //     console.error('File upload failed');
            // }

            // textPopUp("Success", "Berhasil Mengupload Data", "success")

        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

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
                                    <div className="mb-5">
                                        <LabelText text={"Description"} htmlFor={"description"} />
                                        <InputTextArea id={"description"} value={description} set={setDescription} placeholder={"Enter Description Bus"} rows={4} />
                                    </div>

                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Image Gallery"} htmlFor={"image_gallery"} />
                                                <InputImage id={"image_gallery"} change={handleFileChangeGallery} multiple={true} />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Image Thumb"} htmlFor={"image_thumb"} />
                                                <InputImage id={"image_thumb"} change={handleFileChangeThumb} multiple={false} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <LabelText text={"Type Kendaraan"} htmlFor={"type_kendaraan"} />
                                        <InputText id={"type_kendaraan"} value={busType} set={setBusType} placeholder={"Enter Bus Name"} />
                                    </div>

                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Category Kendaraan"} htmlFor={"category_bus"} />
                                                <InputSelectOption data={["Bus Gede", "Bus Kecil", "Bus Amatron"]} id={"category_bus"} value={busCategory} set={setBusCategory} />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Merk Kendaraan"} htmlFor={"merk_bus"} />
                                                <InputSelectOption data={["Bus Gede", "Bus Kecil", "Bus Amatron"]} id={"merk_bus"} value={busMerek} set={setbusMerek} />
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
    )
}

export default AddPanelMerek;