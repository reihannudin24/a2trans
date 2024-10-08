import { useCallback, useEffect, useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import apiImage from "../../../function/axiosImage";
import { LabelText } from "../../../component/Label.Component";
import { InputImage, InputSelectOption, InputNumber, InputText, InputTextArea } from "../../../component/Input.Component";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";
import { useNavigate } from "react-router-dom";


function AddPanelBus() {

    const navigate = useNavigate();
    const [selectedThumbFile, setSelectedThumbFile] = useState(null);

    const [busName, setBusName] = useState("");
    const [linkYoutube, setLinkYoutube] = useState("");
    const [description, setDescription] = useState("");
    const [busCategory, setBusCategory] = useState(0);
    const [busMerek, setbusMerek] = useState(0);
    const [busVendor, setbusVendor] = useState(0);
    const [busType, setBusType] = useState("");
    const [busSeat, setBusSeat] = useState("");

    const [categories, setCategories] = useState([])
    const [merek, setMerek] = useState([])
    const [vendor, setVendor] = useState([])

    const handleFileChangeThumb = (event) => {
        const file = event.target.files[0];
        setSelectedThumbFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedThumbFile || !busSeat || !busName || !description || !busCategory || !busType || !busMerek || !busVendor) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }
        const dataForm = {
            name: busName,
            link: linkYoutube,
            description: description,
            seat: busSeat,
            categories_id: busCategory,
            type: busType,
            brand_id: busMerek,
            vendor_id: busVendor,
            thumbnail: selectedThumbFile
        }

        try {
            const responseData = await apiImage.post('/bus/add/new', dataForm)

            if (responseData.status === 201) {
                console.log('data bus uploaded successfully');
                setBusName("");
                setLinkYoutube("");
                setDescription("");
                setBusType("")
                setbusMerek(0)
                setBusSeat("")
                setBusCategory(0)
                event.target.reset();
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")

                navigate('/panel/bus');
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
    const checkDataCategory = useCallback(async () => {
        const responseCategories = await apiAuth.get('/categories/show');
        const responseMerek = await apiAuth.get('/brand/show');
        const responseVendor = await apiAuth.get('/vendor/show');
        if (responseVendor.data.data?.vendors.length !== 0 || responseCategories.data.data?.categories.length !== 0 || responseMerek.data.data?.brand.length !== 0) {
            setCategories(responseCategories.data.data?.categories)
            setMerek(responseMerek.data.data?.brand)
            setVendor(responseVendor.data.data?.vendors)
        }


        setLoop(false);
    }, []);

    useEffect(() => {
        if (loop === true) {
            checkDataCategory()
        }
    }, [loop, checkDataCategory])


    return (
        <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-5 lg:px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 text-lg font-semibold">Menambahkan data bus</span>
                                    <span className="font-medium mt-1">Menambah data kedalam database</span>
                                </h3>
                            </div>
                            <div className="py-8 pt-6 px-5 lg:px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text={"Bus Name"} htmlFor={"bus_name"} />
                                        <InputText id={"bus_name"} value={busName} set={setBusName} placeholder={"Enter Bus Name"} />
                                    </div>
                                    <div className="mb-5">
                                        <LabelText text={"Description"} htmlFor={"description"} />
                                        <InputTextArea id={"description"} value={description} set={setDescription} placeholder={"Enter Description Bus"} rows={4} />
                                    </div>
                                    <div className="mb-5">
                                        <LabelText text={"Image Thumb"} htmlFor={"image_thumb"} />
                                        <InputImage id={"image_thumb"} change={handleFileChangeThumb} multiple={false} />
                                    </div>
                                    <div className="mb-5">
                                        <LabelText text={"Link Youtube"} htmlFor={"link_youtube"} />
                                        <InputText id={"link_youtube"} value={linkYoutube} set={setLinkYoutube} placeholder={"Enter Link Youtube"} />
                                    </div>
                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Type Kendaraan"} htmlFor={"type_kendaraan"} />
                                                <InputText id={"type_kendaraan"} value={busType} set={setBusType} placeholder={"Enter Bus Name"} />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Vendor"} htmlFor={"vendor"} />
                                                <InputSelectOption data={vendor} id={"vendor"} value={busVendor} set={setbusVendor} text={"Pilih Vendor"} />
                                            </div>
                                        </div>
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
                                                <LabelText text={"Merek Kendaraan"} htmlFor={"merk_bus"} />
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

export default AddPanelBus;