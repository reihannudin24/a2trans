import { useState } from "react";

export default function FormAddComponent() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
            formData.append(`image${index}`, file);
        });

        try {
            console.log(formData)
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Files uploaded successfully');
            } else {
                console.error('File upload failed');
            }
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
                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-gray-600">
                                            Full Name
                                        </label>
                                        <input type="text" name="name" id="name" placeholder="Full Name"
                                            className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-gray-600">
                                            Phone Number
                                        </label>
                                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                            className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                    </div>

                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <label htmlFor="date" className="mb-3 block text-base font-medium text-gray-600">
                                                    Image Gallery
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image_gallery"
                                                    id="image_gallery"
                                                    multiple
                                                    onChange={handleFileChange}
                                                    className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <label htmlFor="time" className="mb-3 block text-base font-medium text-gray-600">
                                                    Time
                                                </label>
                                                <input type="time" name="time" id="time"
                                                    className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5 pt-3">
                                        <label className="mb-5 block text-base font-semibold text-gray-600 sm:text-xl">
                                            Address Details
                                        </label>
                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <input type="text" name="area" id="area" placeholder="Enter area"
                                                        className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <input type="text" name="city" id="city" placeholder="Enter city"
                                                        className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <input type="text" name="state" id="state" placeholder="Enter state"
                                                        className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                                        className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
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