import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiJson from "../../../function/axios";
import {textPopUp} from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import {NavbarNewPanelComponent} from "../../../component/Navbar.Component";
import {LabelText} from "../../../component/Label.Component";
import {InputSelectOption} from "../../../component/Input.Component";

function AddPanelFacilitiesToBus(){

    const {id} = useParams();

    const navigate = useNavigate();
    const [facility_id, setFacility_id] = useState(0);
    const [facilities, setFacilities] = useState([]);
    const [loop, setLoop] = useState(true);


    const fetchData = async (endpoint, setData) => {
        try {
            const response = await apiJson.get(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 20000,
            });
            setData(response?.data?.data?.facilities || []);
        } catch (error) {
            console.error(error);
            textPopUp("Error", `Terjadi kesalahan saat mengambil data: ${error?.message}`, "error");
        }
    };

    useEffect(() => {
        if (loop) {
            fetchData('/facilities/show', setFacilities);
            setLoop(false);
        }
    }, [loop]);


    // Submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!facility_id || !id) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }
        const dataForm = {
            facilities_id: facility_id,
            bus_id: id,
        }

        try {
            const responseData = await apiAuth.post('/facilities/add/new/relation', dataForm);
            if (responseData.status === 201) {
                console.log('data facilities uploaded successfully');
                setFacility_id("");
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")

                navigate(`/panel/manage/detail/${id}/facilities`);

            } else {
                console.error('File upload failed');
            }

        } catch (err) {
            console.error('Error uploading files:', err);
        }

    }

    return(
        <>
            <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
                <NavbarNewPanelComponent brandText="Dashboard" />
                <div className="flex flex-wrap md:-mx-3 mb-5">
                    <div className="w-full max-w-full mb-6 mx-auto">
                        <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                            <div className="relative flex flex-col bg-clip-border rounded-2xl">
                                <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                    <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                        <span className="mr-3 font-semibold">Add Facilities Data</span>
                                        <span className="font-medium mt-1">Menambah data kedalam database</span>
                                    </h3>
                                </div>

                                <div className="py-8 pt-6 px-9">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-5">
                                            <LabelText text={"Fasilitas Id"} htmlFor={"facility_id"} />
                                            <InputSelectOption data={facilities} id={"facility_id"} value={facility_id} set={setFacility_id} text={"Pilih Facility id"} />
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

        </>
    )
}

export default AddPanelFacilitiesToBus