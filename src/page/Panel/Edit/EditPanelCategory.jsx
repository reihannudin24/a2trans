import { useCallback, useEffect, useState } from "react";
import { textPopUp } from "../../../function/swal";
import apiAuth from "../../../function/axiosAuth";
// import apiImage from "../../../function/axiosImage";
import { LabelText } from "../../../component/Label.Component";
import { InputImage, InputText } from "../../../component/Input.Component";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarNewPanelComponent } from "../../../component/Navbar.Component";

function EditPanelCategory() {
    const { id } = useParams();

    const navigate = useNavigate()

    const [name, setName] = useState("");
    // const [selectedFiles, setSelectedFiles] = useState([]);

    // const handleFileChangeThumb = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedFiles(file);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }

        const dataForm = {
            id: id,
            name: name,
        }

        try {
            const responseData = await apiAuth.put('/categories/update', dataForm)

            // RESPONE
            if (responseData.status === 200) {
                // if (selectedFiles.length !== 0) {

                //     const formDataFiles = new FormData();
                //     formDataFiles.append('category_id', id);
                //     formDataFiles.append('category', true);
                //     formDataFiles.append('files', selectedFiles);

                //     const responseFiles = await apiImage.post('/categories/add/new/image', formDataFiles);
                //     if (responseFiles.data.status === 200) {
                //         console.log('data category uploaded successfully');
                //         textPopUp("Success", "Berhasil menambah data kedatabase", "success")
                //     }
                // } else {
                console.log('data category uploaded successfully');
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

    const [loop, setLoop] = useState(true)
    const checkData = useCallback(async () => {
        const responseData = await apiAuth.get(`/categories/show?id=${id}`);
        if (responseData.data.data.categories.length === 0) return navigate("/panel/bus")
        setName(responseData.data.data.categories[0].name);


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

export default EditPanelCategory;