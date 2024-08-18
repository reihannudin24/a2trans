import { useCallback, useEffect, useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import apiImage from "../../../function/axiosImage";
import { LabelText } from "../../../component/Label.Component";
import { InputImage, InputSelectOption, InputNumber, InputText, InputTextArea } from "../../../component/Input.Component";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";

function EditPanelBus() {
    const { id } = useParams();

    const navigate = useNavigate()

    const [selectedThumbFile, setSelectedThumbFile] = useState(null);

    const [busName, setBusName] = useState("");
    const [description, setDescription] = useState("");
    const [busCategory, setBusCategory] = useState("");
    const [busMerek, setbusMerek] = useState("");
    const [busVendor, setbusVendor] = useState("");
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

        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', busName);
        formData.append('description', description);
        formData.append('seat', busSeat);
        formData.append('categories_id', busCategory);
        formData.append('type', busType);
        formData.append('brand_id', busMerek);
        formData.append('vendor_id', busMerek);
        formData.append('thumbnail', selectedThumbFile);


        try {
            // FETCHING
            const responseData = await apiImage.post('/bus/update', formData)
            console.log(responseData)

            // // RESPONE
            if (responseData.status === 200) {

                // const formDataThumb = new FormData();
                // formDataThumb.append('bus_id', id);
                // formDataThumb.append('thumb', true);
                // formDataThumb.append('files', selectedThumbFile);

                // const responseThumb = await apiImage.post('/bus/add/new/image/bus', formDataThumb);

                // if (responseThumb.data.status === 200) {
                console.log('data bus uploaded successfully');
                event.target.reset();
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")
                // }


                return;
            } else {
                console.error('File upload failed');
            }

        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const checkDataCategory = useCallback(async () => {
        const responseCategories = await apiAuth.get('/categories/show');
        const responseMerek = await apiAuth.get('/brand/show');
        const responseVendor = await apiAuth.get('/vendor/show');
        if (responseVendor.data.data?.vendors.length !== 0 || responseCategories.data.data?.categories.length !== 0 || responseMerek.data.data?.brand.length !== 0) {
            setCategories(responseCategories.data.data?.categories)
            setMerek(responseMerek.data.data?.brand)
            setVendor(responseVendor.data.data?.vendors)
        }
    }, [])

    const [loop, setLoop] = useState(true)
    const checkData = useCallback(async () => {
        const responseData = await apiAuth.get(`/bus/show?id=${id}`);
        if (responseData.data.data?.buses.length === 0) return navigate("/panel/bus")
        setBusName(responseData.data.data?.buses[0].name);
        setDescription(responseData.data.data?.buses[0].description);
        setBusCategory(responseData.data.data?.buses[0].categories_id);
        setbusMerek(responseData.data.data?.buses[0].brand_id);
        setBusType(responseData.data.data?.buses[0].type);
        setBusSeat(responseData.data.data?.buses[0].seat);

        setLoop(false);
    }, [id, navigate]);


    useEffect(() => {
        if (loop === true) {
            checkDataCategory()
            checkData()
        }
    }, [loop, checkData, checkDataCategory])

    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full  mb-6  mx-auto">
                    <div className="relative flex flex-col  min-w-0 shadow-md rounded-md bg-white m-5">
                        <div className="relative flex flex-col  border border-dashed bg-clip-border rounded-2xl">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 font-semibold">Edit Data</span>
                                    <span className="font-medium mt-1">Mengedit data bus</span>
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

                                    <div className="mb-5">
                                        <LabelText text={"Image Thumb"} htmlFor={"image_thumb"} />
                                        <InputImage id={"image_thumb"} change={handleFileChangeThumb} multiple={false} />
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

                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Seat"} htmlFor={"seat"} />
                                                <InputNumber id={"seat"} value={busSeat} set={setBusSeat} placeholder={"Enter Bus Seat"} />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <LabelText text={"Vendor"} htmlFor={"vendor"} />
                                                <InputSelectOption data={vendor} id={"vendor"} value={busVendor} set={setbusVendor} text={"Pilih Vendor"} />
                                            </div>
                                        </div>
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

export default EditPanelBus;