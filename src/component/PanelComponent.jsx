import {confirmDelete, textPopUp} from "../function/swal";
import apiAuth from "../function/axiosAuth";


export const CardPanelBusComponent =  ({index, id, item, navigate}) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                console.log(result);
                const response = await apiAuth.delete('/bus/delete', {
                    data: {id: id},
                });
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/dashboard');
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


    return(
        <tr key={index} className="border-b scrollbar-hide">
            <td className="p-3 pl-0">
                <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src={item?.thumb} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                    </div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <span className="font-semibold">{item?.seat}</span>
            </td>
            <td className="p-3 pr-0 text-end">
                <span className="font-semibold">{item?.categories_id}</span>
            </td>
            <td className="p-3 pr-0 text-end">
                <span className="font-semibold">{item?.type}</span>
            </td>
            <td className="p-3 pr-12 text-end">
                <span className="font-semibold">{item?.merek}</span>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                            className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                    <a href="/panel/bus/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelFacilitiesComponent =  ({index, id, item, navigate}) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                console.log(result);
                const response = await apiAuth.delete('/facilities/delete', {
                    data: {id: id},
                });
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/dashboard'); // Redirect after successful deletion
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


    return(
        <tr key={index} className="border-b">
            <td className="p-3 pr-0 text-end">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0">
                <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src={item?.icon} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                    </div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)}
                            className="p-2 bg-red-500 rounded-md text-white">Delete
                    </button>
                    <a href="/panel/facilities/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelMerekComponent = ({index, id, item, navigate}) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                console.log(result);
                const response = await apiAuth.delete('/brand/delete', {
                    data: {id: id},
                });
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/dashboard');
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }


        return (
            <tr key={index} className="border-b">
                <td className="p-3 pr-0 text-end">
                    <span className="font-semibold">{item?.id}</span>
                </td>
                <td className="p-3 pl-0">
                    <div className="flex items-center">
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                            <img src={item?.icon} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                 alt=""/>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                        </div>
                    </div>
                </td>
                <td className="p-3 pr-12 text-end">
                    <div className="flex gap-4 justify-end">
                        <button onClick={(e) => handleDelete(id, e)}
                                className="p-2 bg-red-500 rounded-md text-white">Delete
                        </button>
                        <a href="/panel/facilities/edit"
                           className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                    </div>
                </td>
            </tr>
        )
    }

export const CardPanelCategoryComponent = ({index, id, item, navigate}) => {

    const handleDelete = async (id, e) => {
        if (e) e.preventDefault();
        try {
            const result = await confirmDelete('Are you sure?', 'Apa kamu yakin untuk menghapus data ini', id);
            if (result.confirmed) {
                console.log(result);
                const response = await apiAuth.delete('/categories/delete', {
                    data: { id : id },
                });
                textPopUp("Success", `${response?.data?.message}`, "success");
                navigate('/dashboard'); // Redirect after successful deletion
            }
        } catch (err) {
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    };



    return(
        <tr key={index} className="border-b">
            <td className="p-3 pr-0 min-w-[50px] text-start">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0 min-w-[140px] text-center">
                <div className="flex items-center">
                    <div className="flex flex-col text-center justify-center">
                        <div className="mb-1 font-semibold text-center transition-colors duration-200 ease-in-out"> {item?.name}</div>
                    </div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={(e) => handleDelete(id, e)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                    <a href="/panel/category/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

