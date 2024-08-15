import { useEffect, useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import apiImage from "../../../function/axiosImage";
import { LabelText } from "../../../component/Label.Component";
import { InputImage, InputSelectOption, InputNumber, InputText, InputTextArea } from "../../../component/Input.Component";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";

function AddPanelMerek() {
    const [selectedGalleryFiles, setSelectedGalleryFiles] = useState([]);
    const [selectedThumbFile, setSelectedThumbFile] = useState(null);

    const [busName, setBusName] = useState("");
    const [description, setDescription] = useState("");
    const [busCategory, setBusCategory] = useState("");
    const [busMerek, setbusMerek] = useState("");
    const [busType, setBusType] = useState("");
    const [busSeat, setBusSeat] = useState("");

    const [categories, setCategories] = useState([])
    const [merek, setMerek] = useState([])

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
        if (!selectedThumbFile || !selectedGalleryFiles.length || !busSeat || !busName || !description || !busCategory || !busType || !busMerek) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }

        const dataForm = {
            name: busName,
            description: description,
            seat: busSeat,
            categories_id: busCategory,
            type: busType,
            merek_id: busType
        }

        try {
            // FETCHING
            const responseData = await apiAuth.post('/bus/add/new', dataForm)

            // // RESPONE
            if (responseData.status === 200) {
                const formDataGallery = new FormData();
                formDataGallery.append('bus_id', responseData.data.data[0].insertId);
                selectedGalleryFiles.forEach((file, index) => {
                    formDataGallery.append('files', file);
                });

                const formDataThumb = new FormData();
                formDataThumb.append('bus_id', responseData.data.data[0].insertId);
                formDataThumb.append('thumb', true);
                formDataThumb.append('files', selectedThumbFile);


                const responseGallery = await apiImage.post('/bus/add/new/image/bus', formDataGallery);
                const responseThumb = await apiImage.post('/bus/add/new/image/bus', formDataThumb);

                if (responseGallery.data.status === 200 && responseThumb.data.status === 200) {
                    console.log('data bus uploaded successfully');
                    setBusName("");
                    setDescription("");
                    setBusType("")
                    setbusMerek("")
                    setBusSeat("")
                    setBusCategory("")
                    event.target.reset();
                    textPopUp("Success", "Berhasil menambah data kedatabase", "success")
                }

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

    const checkDataCategory = async () => {
        const responseCategories = await apiAuth.get('/categories/show');
        const responseMerek = await apiAuth.get('/vendors/show');
        setCategories(responseCategories.data.data)
        setMerek(responseMerek.data.data)
    }

    useEffect(() => {
        checkDataCategory()
    }, [])

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
                                                <InputSelectOption data={categories} id={"category_bus"} value={busCategory} set={setBusCategory} text={"Pilih Category"} />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Merk Kendaraan"} htmlFor={"merk_bus"} />
                                                <InputSelectOption data={merek} id={"merk_bus"} value={busMerek} set={setbusMerek} text={"Pilih Merek"} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <LabelText text={"Seat"} htmlFor={"seat"} />
                                        <InputNumber id={"seat"} value={busSeat} set={setBusSeat} placeholder={"Enter Bus Seat"} />
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

export default AddPanelMerek;