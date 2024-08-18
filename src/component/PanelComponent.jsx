import { confirmDelete, textPopUp } from "../function/swal";
import apiAuth from "../function/axiosAuth";
import { useState, useEffect } from "react";
import { checkCategoryById, checkMerekById } from "../function/function";
// import apiImage from "../function/axiosImage";


export const CardPanelBusComponent = ({ index, id, item, navigate, setBus }) => {
    const [brandName, setBrandName] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const [loop, setLoop] = useState(true)

    useEffect(() => {
        const fetchData = async () => {

            const merek = await checkMerekById(item?.brand_id);
            const category = await checkCategoryById(item?.categories_id);
            setBrandName(merek);
            setCategoryName(category);

            setLoop(false);
        };

        if (loop === true) {
            fetchData();
        }
    }, [item, loop]);

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                const response = await apiAuth.post('/bus/delete', {
                    id: id,
                });

                // await apiAuth.delete('/image/bus/deleteall', {
                //     data: { id_bus: id },
                // });
                setBus(prevBus => prevBus.filter(item => item.id !== id));
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/panel/bus');
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


    return (
        <tr key={index} className="border-b scrollbar-hide">
            <td className="pb-3 text-start min-w-[175px]">
                <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src={`http://127.0.0.1:8000${item?.thumb}`} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                    </div>
                </div>
            </td>
            <td className="pb-3 pr-12 text-end min-w-[175px]">
                <span className="font-semibold">{item?.seat}</span>
            </td>
            <td className="pb-3 text-end min-w-[175px]">
                <span className="font-semibold">{categoryName}</span>
            </td>
            <td className="pb-3 text-end min-w-[175px]">
                <span className="font-semibold">{item?.type}</span>
            </td>
            <td className="pb-3 pr-12 text-end min-w-[175px]">
                <span className="font-semibold">{brandName}</span>
            </td>
            <td className="pb-3 pr-12 text-end min-w-[175px]">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                        className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                    <a href={`/panel/edit/bus/${item?.id}`} className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                    <a href={`/panel/gallery/${item?.id}`} className="cursor-pointer p-2 bg-green-500 rounded-md text-white">Detail</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelFacilitiesComponent = ({ index, id, item, navigate }) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                const response = await apiAuth.delete('/facilities/delete', {
                    data: { id: id },
                });
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/panel/facilities'); // Redirect after successful deletion
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


    return (
        <tr key={index} className="border-b">
            <td className="p-3 pr-0 min-w-[50px] text-start">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0">
                <div className="flex flex-col text-start">
                    <div
                        className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                            className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                    <a href={`/panel/edit/facilities/${id}`} className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelVendorComponent = ({ index, id, item, navigate, setMerek }) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                const response = await apiAuth.delete('/vendor/delete', {
                    data: { id: id },
                });
                setMerek(prevBus => prevBus.filter(item => item.id !== id));
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/panel/vendor');
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


    return (
        <tr key={index} className="border-b ">
            <td className="p-3 pr-0 text-start">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0 text-end">
                <div
                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                        className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                    <a href={`/panel/edit/vendor/${item?.id}`}
                        className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelMerekComponent = ({ index, id, item, navigate, setMerek }) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                const response = await apiAuth.delete('/brand/delete', {
                    data: { id: id },
                });
                setMerek(prevBus => prevBus.filter(item => item.id !== id));
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/panel/brand');
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


    return (
        <tr key={index} className="border-b">
            <td className="p-3 pr-0 text-start">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0 text-end">
                <div
                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                        className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                    <a href={`/panel/edit/brand/${item?.id}`}
                        className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelImageGalleryComponent = ({ index, id, id_bus, item, navigate, setImageGallery }) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                const response = await apiAuth.delete(`/image_bus/delete?id=${id}`);
                setImageGallery(prevBus => prevBus.filter(item => item.image_id !== id));
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate(`/panel/gallery/${id_bus}`);
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }

    return (
        <tr key={index} className="border-b">
            <td className="p-3 pr-0 text-start">
                <span className="font-semibold">{item?.image_id}</span>
            </td>
            <td className="p-3 pl-0">
                <div className="flex items-center justify-start">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src={`http://127.0.0.1:8000${item?.image_path}`} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                            alt="" />
                    </div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                        className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelCategoryComponent = ({ index, id, item, navigate, setCategory }) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                const response = await apiAuth.delete('/categories/delete', {
                    data: { id: id },
                });
                setCategory(prevBus => prevBus.filter(item => item.id !== id));
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/panel/category'); // Redirect after successful deletion
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    };



    return (
        <tr key={index} className="border-b">
            <td className="p-3 pr-3 min-w-[50px] text-center">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0">
                <div className="flex flex-col text-start">
                    <div
                        className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                    <a href={`/panel/edit/categories/${item?.id}`} className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

