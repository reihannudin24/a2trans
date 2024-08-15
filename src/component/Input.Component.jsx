import { useNavigate } from "react-router-dom";
import {MdFileUpload} from "react-icons/md";

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

export const InputText = ({ id, value, set, placeholder }) => {
    return (
        <input
            type="text"
            name={id}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => set(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-md font-normal text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
        />
    )
}

export const InputTextArea = ({ id, value, set, placeholder, rows }) => {
    return (
        <textarea
            name={id}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => set(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-md font-normal text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
            rows={rows}
        ></textarea>
    )
}

export const InputSelectOption = ({ data, id, value, set }) => {
    return (
        <select
            name={id}
            id={id}
            value={value}
            onChange={(e) => set(e.target.value)}
            className="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md"
        >
            <option value="" disabled>Pilih Type</option>
            {data.map((res, index) => {
                return (
                    <option key={index} value={res.id}>{res.name}</option>
                )
            })}
        </select>
    )
}

export const InputImage = ({ id, change, multiple }) => {
    return (
        <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
            <label htmlFor={id}>
                <input
                    type="file"
                    name={id}
                    id={id}
                    multiple={multiple}
                    onChange={change}
                    className="hidden"
                />
                <div className="flex h-full py-4 w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200  dark:!border-navy-700 lg:pb-5">
                    <MdFileUpload className="text-[50px] text-red-500 dark:text-white" />
                    <h4 className="text-xl font-bold text-red-500 dark:text-white">
                        Upload Files
                    </h4>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                        PNG, JPG and GIF files are allowed
                    </p>
                </div>
            </label>
        </div>
    );
}


export const InputComponent = ({ id, name, label, value, type, placeholder , onChange}) => {

    return (
        <label htmlFor={id}>
            <p className="font-medium text-slate-700 pb-2">{label}</p>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder={placeholder}
            />
        </label>
    );
};
