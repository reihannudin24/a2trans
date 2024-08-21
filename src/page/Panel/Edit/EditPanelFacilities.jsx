import { useCallback, useEffect, useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
import { LabelText } from "../../../component/Label.Component";
import { InputText } from "../../../component/Input.Component";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";
import apiJson from "../../../function/axios";

function EditPanelFacilities() {
    const { id } = useParams();

    const navigate = useNavigate()

    const [name, setName] = useState("");
    // const [icon, setIcon] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name ) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }

        const dataForm = {
            id: id,
            name: name,
            // icon: icon
        }

        try {
            const responseData = await apiAuth.put('/facilities/update', dataForm)

            // RESPONE
            if (responseData.status === 200) {
                console.log('data category uploaded successfully');
                textPopUp("Success", "Berhasil menambah data kedatabase", "success")

                return;
            } else {
                console.error('File upload failed');
            }

        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const [loop, setLoop] = useState(true)
    const checkData = useCallback(async () => {
        const responseData = await apiJson.get(`/facilities/show?id=${id}`);
        if (responseData.data.data.facilities.length === 0) return navigate("/panel/facilities")
        setName(responseData.data.data.facilities[0]?.name);
        // setIcon(responseData.data.data.facilities[0]?.icon);


        setLoop(false);
    }, [id, navigate]);


    useEffect(() => {
        if (loop === true) {
            checkData()
        }
    }, [loop, checkData])

    return (
        <div className="xl:ml-80 xl:mr-16 lg:ml-72 ml-0 lg:mr-10 mr-0 mt-0 ">
            <NavbarNewPanelComponent brandText="Dashboard" />
            <div className="flex flex-wrap lg:-mx-3 mb-5">
                <div className="w-full max-w-full mb-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 shadow-md rounded-2xl bg-white my-5 md:mx-4">
                        <div className="relative flex flex-col bg-clip-border rounded-2xl">
                            <div className="px-5 lg:px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span className="mr-3 font-semibold">Edit Data</span>
                                    <span className="font-medium mt-1">Mengedit data bus</span>
                                </h3>
                            </div>
                            <div className="py-8 pt-6 px-5 lg:px-9">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <LabelText text={"Name"} htmlFor={"name"} />
                                        <InputText id={"name"} value={name} set={setName} placeholder={"Enter Name"} />
                                    </div>

                                    {/* <div className="mb-5">
                                        <LabelText text={"Icon"} htmlFor={"icon"} />
                                        <InputText id={"icon"} value={icon} set={setIcon} placeholder={"Enter Icon"} />
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

export default EditPanelFacilities;