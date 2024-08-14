import { useNavigate } from "react-router-dom";

export const InputCheckbox = ({ name, toggle, selectedColors, value }) => {
    return (
        <div className={"flex gap-3"}>
            <div className={"my-auto"}>
                <input
                    className={"h-4 cursor-pointer my-auto w-4"}
                    type="checkbox"
                    name="color"
                    value={value}
                    checked={selectedColors === value}
                    onChange={toggle}
                />
            </div>
            <div className={"mb-1"}>
                <p className={"text-sm my-auto text-gray-600 "}>{name}</p>
            </div>
        </div>
    )
}

export const InputSearch = ({ search, setSearch, redirect }) => {
    const navigate = useNavigate();
    const handleSearch = (e) => {
        const change = e.target.value;
        setSearch(change)
    }
    const submitSearch = () => {
        navigate(`${redirect}?search=${search}`);
    };
    return (
        <div className={"bg-white  py-2 px-4 rounded-lg shadow"}>
            <div className={"flex justify-between"}>
                <div className={"my-auto w-full"}>
                    <input className={"py-2 text-sm w-full"} placeholder={"Cari kendaraan"} value={search} onChange={handleSearch} />
                </div>
                <div className={"my-auto"}>
                    <button onClick={submitSearch} className={"bg-btn-primary my-auto cursor-pointer text-xs text-white py-2 px-5 rounded-lg"}>
                        Cari
                    </button>
                </div>
            </div>
        </div>
    )
}

export const InputFilter = ({ defaultContent, content, selectedOption, setSelectedOption }) => {
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    }
    return (
        <>
            <div className={"text-gray-500 w-full"}>
               <select className={"text-sm w-11/12 mx-auto"} value={selectedOption} onChange={handleSelectChange}>
                    <option value={""} id={"default"} className={"cursor-pointer text-sm text-gray-700"}>{defaultContent}</option>
                    {content.map((option, index) => {
                        return (
                            <InputOptionFilter
                                key={index}
                                id={option.id}
                                name={option.name}
                                value={option.value}
                            />
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export const InputOptionFilter = ({ id, name, value, index }) => {
    return (
        <>
            <option key={index} id={id} name={name} value={value} className={"cursor-pointer text-sm text-gray-700"}>{name}</option>
        </>
    )
}