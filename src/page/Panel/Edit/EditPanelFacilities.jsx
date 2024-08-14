import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import apiJson from "../../../function/axios";
import {textPopUp} from "../../../function/swal";

function EditPanelFacilities () {


    const navigate = useNavigate();
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiJson.get('/facilities/show');
                setFacilities(response?.data || []);
            } catch (error) {
                console.error(error);
                textPopUp("Error", "Failed to fetch facility data. Please try again later.", "error");
            }
        };


        fetchData();
    }, []);

    return(
        <>

        </>
    )
}

export default EditPanelFacilities;