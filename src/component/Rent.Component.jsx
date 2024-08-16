import {InputCheckbox, InputSearch} from "./Input.Component";
import {CardComponent, CardProductComponent, ListCardComponent} from "./Card.Component";
import { useState } from "react";


export const RentContentComponent = ({   setSearch,bus, categories, search }) => {
    const [selectedCategory, setSelectedCategory] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (event) => {
        const value = parseInt(event.target.value);
        setSelectedCategory((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((category) => category !== value)
                : [...prevSelected, value]
        );
    };


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredBus = bus.filter((item) => {
        const matchesCategory = selectedCategory.length > 0 ? selectedCategory.includes(item.categories_id) : true;
        const matchesSearch = searchQuery ? item.name.toLowerCase().includes(searchQuery) : true;
        return matchesCategory && matchesSearch;
    });


    return (
        <>
            <div className={"bg-primary  relative pt-32 pb-20 lg:pb-20"}>
                <div className={"w-11/12 mx-auto container"}>
                    <div className={"text-left lg:text-center"}>
                        <h2 className={"text-white text-2xl lg:text-3xl font-semibold"}>Temukan Kendaraan yang Tepat untuk Setiap Perjalanan Anda!</h2>
                        <div className={"my-3 lg:my-2"}>
                            <p className={"text-white hidden lg:block text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan <br /> kendaraan yang tepat untuk setiap perjalanan Anda!</p>
                            <p className={"text-white block lg:hidden text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan</p>
                        </div>
                    </div>
                </div>
                <div className={"w-10/12 left-0 right-0 absolute -bottom-6 mx-auto"}>
                    <div className={"w-full lg:w-9/12 mx-auto container"}>

                        <div className={"bg-white  py-2 px-4 rounded-lg shadow"}>
                            <div className={"flex justify-between"}>
                                <div className={"my-auto w-full"}>
                                    <input
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className={"py-2 text-sm w-full"} placeholder={"Cari kendaraan"}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full lg:w-11/12 mt-8 lg:mt-10 mx-auto container"}>
                <div className={"w-full"}>
                    <div className={"w-full block lg:flex gap-4"}>

                        <div className={"lg:w-3/12 my-4"}>
                            <div className={"border-b border-gray-300 lg:shadow w-11/12 mx-auto py-4 px-3 rounded-md shadow-md"}>
                                <div className={"hidden lg:block w-11/12"}>
                                    <div className={"w-10/12 mx-auto container"}>
                                        <div className={"mb-3 border-b border-gray-100 pb-3"}>
                                            <h2 className={"text-md text-gray-700 font-semibold"}>Categories</h2>
                                        </div>
                                        <div className={"mt-4"}>
                                            <ul className={"block"}>
                                                {categories.map((item, index) => (
                                                    <li key={index} className={"w-full my-2"}>
                                                        <InputCheckbox
                                                            name={item.name}
                                                            toggle={handleCategoryChange}
                                                            selectedColors={selectedCategory}
                                                            value={item.id}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* MOBILE */}
                                <div className={"block lg:hidden w-11/12"}>
                                    <ul className={"flex "}>
                                        {categories.map((item, index) => (
                                            <li key={index} className={"w-6/12 mx-auto container"}>
                                                <InputCheckbox
                                                    name={item.name}
                                                    toggle={handleCategoryChange}
                                                    selectedColors={selectedCategory}
                                                    value={item.id}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"w-full my-4 lg:w-9/12 "}>
                            <div className={"w-full "}>
                                <div className={"w-11/12 mx-auto container"}>

                                    <ul className={"w-full block flex-wrap relative"}>
                                        {filteredBus.map((res, index) => (
                                            <li key={index} className={"w-full my-3"}>
                                                <CardProductComponent item={res} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
