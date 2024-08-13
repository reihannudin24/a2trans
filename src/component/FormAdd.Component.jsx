import { useState } from "react";
import { textPopUp } from "../function/swal";


export default function FormAddComponent() {
    const [selectedGalleryFiles, setSelectedGalleryFiles] = useState([]);
    const [selectedThumbFile, setSelectedThumbFile] = useState(null);
    const [busName, setBusName] = useState("");
    const [category, setCategory] = useState("");

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

        console.log(selectedThumbFile )
        console.log(selectedGalleryFiles )
        console.log(busName )
        console.log(category )
        if (!selectedGalleryFiles.length || !selectedThumbFile || !busName || !category) {
            textPopUp("Error", "Ada Value yang tidak terisi", "error")
            return;
        }

        const formData = new FormData();
        selectedGalleryFiles.forEach((file, index) => {
            formData.append(`image_gallery-${index}`, file);
        });

        const dataForm = {
            name_bus: busName,
            category: category
        }

        try {
            // FETCHING
            const responseData = await fetch('/api/add/bus', {
                method: 'POST',
                body: dataForm,
            });

            const responseGallery = await fetch('/api/upload/image-gallery', {
                method: 'POST',
                body: formData,
            });

            const responseThumb = await fetch('/api/upload/image-gallery', {
                method: 'POST',
                body: selectedThumbFile,
            });

            // RESPONE
            if (responseData.ok) {
                console.log('data bus uploaded successfully');
                setBusName("");
                setCategory("");
                event.target.reset();
                textPopUp("Error", "Terjadi Eror Pada Fetching Bus", "error")
                return;
            } else {
                console.error('File upload failed');
            }

            if (responseGallery.ok) {
                console.log('Files and data image gallery uploaded successfully');
                setSelectedGalleryFiles([]);
                event.target.reset();
                textPopUp("Error", "Terjadi Eror Pada Fetching Image Gallery", "error")
                return;
            } else {
                console.error('File upload failed');
            }

            if (responseThumb.ok) {
                console.log('Files and data image thumb uploaded successfully');
                setSelectedThumbFile("");
                event.target.reset();
                textPopUp("Error", "Terjadi Eror Pada Fetching Image Thumb", "error")
                return;
            } else {
                console.error('File upload failed');
            }

            textPopUp("Success", "Berhasil Mengupload Data", "success")

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
                                        <label htmlFor="bus_name" className="mb-3 block text-base font-medium text-gray-600">
                                            Bus Name
                                        </label>
                                        <input
                                            type="text"
                                            name="bus_name"
                                            id="bus_name"
                                            placeholder="Enter bus name"
                                            value={busName}
                                            onChange={(e) => setBusName(e.target.value)}
                                            className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="category" className="mb-3 block text-base font-medium text-gray-600">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            id="category"
                                            placeholder="Enter category"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
                                        />
                                    </div>

                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <label htmlFor="image_gallery" className="mb-3 block text-base font-medium text-gray-600">
                                                    Image Gallery
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image_gallery"
                                                    id="image_gallery"
                                                    multiple
                                                    onChange={handleFileChangeGallery}
                                                    className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <label htmlFor="image_thumb" className="mb-3 block text-base font-medium text-gray-600">
                                                    Image Thumb
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image_thumb"
                                                    id="image_thumb"
                                                    onChange={handleFileChangeThumb}
                                                    className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
                                                />
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