import {confirmDelete, textPopUp} from "../function/swal";
import apiAuth from "../function/axios";


export const CardPanelBusComponent =  ({index, id, item, navigate}) => {
    const handleDelete = async (e) => {
        e.preventDefault()
        await confirmDelete('Are you sure?', 'apa kamu yakin untuk menghapus data ini', id).then(result => {
            if (result.confirmed) {
                console.log(result)
                try{
                    const response = apiAuth.post('/bus/delete',{
                       id : id,
                    });
                    console.log(response);
                    textPopUp("Success", `${response?.message()}`, "success");
                    navigate('/dashboard'); // Redirect after successful login
                } catch (err){
                    console.error(err);
                    textPopUp("Error", `${err?.message()}`, "error");
                }


            }
        })
    }

    return(
        <tr key={index} className="border-b">
            <td className="p-3 pl-0">
                <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src={item?.image} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                    </div>
                </div>
            </td>
            <td className="p-3 pr-0 text-end">
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
                    <button onClick={() => handleDelete(id)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                    <a href="/panel/bus/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelFacilitiesComponent =  ({index, id, item, navigate}) => {
    const handleDelete = async (e) => {
        e.preventDefault()
        await confirmDelete('Are you sure?', 'apa kamu yakin untuk menghapus data ini', id).then(result => {
            if (result.confirmed) {
                console.log(result)
                try{
                    const response = apiAuth.post('/facilities/delete',{
                        id : id,
                    });
                    console.log(response);
                    textPopUp("Success", `${response?.message()}`, "success");
                    navigate('/dashboard'); // Redirect after successful login
                } catch (err){
                    console.error(err);
                    textPopUp("Error", `${err?.message()}`, "error");
                }


            }
        })
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
                    <button onClick={() => handleDelete(id)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                    <a href="/panel/facilities/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelMerekComponent = ({index, id, item, navigate}) => {

    const handleDelete = async (e) => {
        e.preventDefault()
        await confirmDelete('Are you sure?', 'apa kamu yakin untuk menghapus data ini', id).then(result => {
            if (result.confirmed) {
                console.log(result)
                try{
                    const response = apiAuth.post('/merek/delete',{
                        id : id,
                    });
                    console.log(response);
                    textPopUp("Success", `${response?.message()}`, "success");
                    navigate('/dashboard');
                } catch (err){
                    console.error(err);
                    textPopUp("Error", `${err?.message()}`, "error");
                }
            }
        })
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
                    <button onClick={() => handleDelete(id)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                    <a href="/panel/facilities/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

export const CardPanelCategoryComponent = ({index, id, item, navigate}) => {

    const handleDelete = async (e) => {
        e.preventDefault()
        await confirmDelete('Are you sure?', 'apa kamu yakin untuk menghapus data ini', id).then(result => {
            if (result.confirmed) {
                console.log(result)
                try{
                    const response = apiAuth.post('/category/delete',{
                        id : id,
                    });
                    console.log(response);
                    textPopUp("Success", `${response?.message()}`, "success");
                    navigate('/dashboard');
                } catch (err){
                    console.error(err);
                    textPopUp("Error", `${err?.message()}`, "error");
                }
            }
        })
    }

    return(
        <tr key={index} className="border-b">
            <td className="p-3 pr-0 text-end">
                <span className="font-semibold">{item?.id}</span>
            </td>
            <td className="p-3 pl-0">
                <div className="flex items-center">
                    <div className="flex flex-col justify-start">
                        <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out"> {item?.name}</div>
                    </div>
                </div>
            </td>
            <td className="p-3 pr-12 text-end">
                <div className="flex gap-4 justify-end">
                    <button onClick={() => handleDelete(id)} className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                    <a href="/panel/category/edit" className="cursor-pointer p-2 bg-blue-500 rounded-md text-white">Edit</a>
                </div>
            </td>
        </tr>
    )
}

