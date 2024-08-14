import {useState} from "react";
import {textPopUp} from "../../../function/swal";

function AddPanelCategories () {

    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if ( !busName || !description || !busCategory || !busType || !busMerek) {
        //     textPopUp("Error", "Ada Value yang tidak terisi", "error")
        //     return;
        // }
    }

    return(
        <>

        </>
    )
}

export default AddPanelCategories;