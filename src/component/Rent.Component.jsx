import { InputCheckbox } from "./Input.Component";
import { CardComponent, ListCardComponent } from "./Card.Component";
import { useState } from "react";

export const RentContentComponent = ({ all_kendaraan, category_checkbox, Type_Bus, search }) => {

    const [selectedColors, setSelectedColors] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedColors(selectedColors === value ? '' : value);
    };

    // Ini untuk deteksi category checkbox + search
    console.log(search)
    console.log(selectedColors)

    return (
        <div className={"w-full lg:w-11/12 mt-8 lg:mt-10 mx-auto container"}>
            <div className={"w-full"}>
                <div className={"w-full block lg:flex gap-4"}>

                    <div className={"lg:w-3/12 my-4"}>

                        <div className={"border-b border-gray-300 lg:shadow w-11/12 mx-auto py-4 px-3 rounded-md shadow-md"}>

                            {/* DASKTOP */}
                            <div className={"hidden lg:block w-11/12"}>
                                <div className={"w-10/12 mx-auto container"}>
                                    <div className={"mb-3 border-b border-gray-100 pb-3"}>
                                        <h2 className={"text-md text-gray-700 font-semibold"}>Categories</h2>
                                    </div>
                                    <div className={"mt-4"}>
                                        <ul className={"block"}>

                                            {/* Category Map */}
                                            {category_checkbox.map((item, index) => {
                                                return (
                                                    <li className={"w-full  my-2"}>
                                                        <InputCheckbox name={item?.name} toggle={handleChange} selectedColors={selectedColors} value={item?.value} />
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* MOBILE */}
                            <div className={"block lg:hidden w-11/12"}>
                                <ul className={"flex "}>
                                    {category_checkbox.map((item, index) => {
                                        return (
                                            <li className={"w-6/12 mx-auto container"}>
                                                <InputCheckbox name={item?.name} toggle={handleChange} selectedColors={selectedColors} value={item?.value} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className={"w-full my-4 lg:w-9/12 "}>
                        <div className={"w-full "}>

                            {/* Type Bus */}
                            <ListCardComponent title={"Jenis-Jenis Kendaraan "} data={Type_Bus} />

                            <div className={"lg:w-11/12 mx-auto container"}>
                                <div className={"my-5"}>
                                    <h2 className={"font-bold xl:text-xl text-md text-gray-800 mx-4"}>Semua Kendaraan</h2>
                                </div>
                                <ul className={"w-full block flex-wrap relative"}>

                                    {/* Mapping Semua Kendaraan */}
                                    {all_kendaraan.map(res => {
                                        return (<li className={"w-full  my-3"}>
                                            <CardComponent data={res} />
                                        </li>)
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}