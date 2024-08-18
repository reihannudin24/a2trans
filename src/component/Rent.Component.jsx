import { InputCheckbox, InputCheckboxRound } from "./Input.Component";
import { CardProductComponent } from "./Card.Component";
import { useState } from "react";


// export const RentContentComponent = ({ bus,facilities, categories,  }) => {
//     const [selectedCategory, setSelectedCategory] = useState([]);
//     const [selectedFacilities, setSelectedFacilities] = useState([]);
//
//     const [searchQuery, setSearchQuery] = useState('');
//
//     const handleCategoryChange = (event) => {
//         const value = parseInt(event.target.value);
//         setSelectedCategory((prevSelected) =>
//             prevSelected.includes(value)
//                 ? prevSelected.filter((category) => category !== value)
//                 : [...prevSelected, value]
//         );
//     };
//
//     const handleFacilitiesChange = (event) => {
//         const value = parseInt(event.target.value);
//         setSelectedFacilities((prevSelected) =>
//             prevSelected.includes(value)
//                 ? prevSelected.filter((facilities) => facilities !== value)
//                 : [...prevSelected, value]
//         );
//     };
//
//
//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value.toLowerCase());
//     };
//
//     const filteredBus = bus.filter((item) => {
//         const matchesCategory = selectedCategory.length > 0 ? selectedCategory.includes(item.categories_id) : true;
//         const matchesFacilities = selectedFacilities.length > 0 ? selectedFacilities.includes(item.facility_id) : true;
//         const matchesSearch = searchQuery ? item.name.toLowerCase().includes(searchQuery) : true;
//         return matchesCategory && matchesSearch;
//     });
//
//
//     return (
//         <>
//             <div className={"bg-primary  relative pt-32 pb-20 lg:pt-52 lg:pb-32"}>
//                 <div className={"w-11/12 mx-auto container"} style={{maxWidth:"1500px"}}>
//                     <div className={"text-left lg:text-center"}>
//                         <h2 className={"text-white text-2xl lg:text-3xl font-semibold"}>Temukan Kendaraan yang Tepat untuk Setiap Perjalanan Anda!</h2>
//                         <div className={"my-3 lg:my-2"}>
//                             <p className={"text-white hidden lg:block lg:text-md text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan <br /> kendaraan yang tepat untuk setiap perjalanan Anda!</p>
//                             <p className={"text-white block lg:hidden lg:text-md text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={"w-10/12 right-0   left-0 absolute -bottom-6 mx-auto" } style={{maxWidth:"1500px"}}>
//                     <div className={"w-full lg:w-6/12 me-auto container"}>
//                         <div className={"bg-white  py-2 px-4 rounded-lg shadow"}>
//                             <div className={"flex justify-between"}>
//                                 <div className={"my-auto w-full"}>
//                                     <input
//                                         value={searchQuery}
//                                         onChange={handleSearchChange}
//                                         className={"py-2 text-md lg:text-lg w-full"} placeholder={"Cari kendaraan"}  />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={"w-full lg:w-11/12 pb-16 mt-8 lg:mt-10 mx-auto container"} style={{maxWidth:"1500px"}}>
//                 <div className={"w-full md:w-11/12 mx-auto lg:w-full"}>
//                     <div className={"w-full block md:flex justify-between "} style={{maxWidth:"1500px"}}>
//
//                         <div className={"w-11/12 sm:w-full md:w-4/12 lg:w-3/12  xl:w-3/12 2xl:w-3/12 mx-auto "}>
//                             <div className={"border-b  w-full mx-auto py-4 px-3 rounded-md "}>
//                                 <div className={"block w-full"}>
//                                     <div className={"w-full mx-auto container"}>
//                                         <div className={"mb-3 border-b border-gray-100 pb-3"}>
//                                             <h2 className={"text-md lg:text-lg text-gray-700 font-medium"}>Kategori</h2>
//                                         </div>
//                                         <div className={"mt-4"}>
//                                             <ul className={"flex w-full gap-3 flex-wrap"}>
//                                                 {categories.map((item, index) => (
//                                                     <li key={index} className="">
//                                                         <InputCheckboxRound
//                                                             name={item.name}
//                                                             toggle={handleCategoryChange}
//                                                             selectedColors={selectedCategory}
//                                                             value={item.id}
//                                                         />
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className={"border-b  w-full mx-auto py-4 px-3 rounded-md "}>
//                                 <div className={"block w-full"}>
//                                     <div className={"w-full mx-auto container"}>
//                                         <div className={"mb-3 border-b border-gray-100 pb-3"}>
//                                             <h2 className={"text-md lg:text-lg text-gray-700 font-medium"}>Fasilitas</h2>
//                                         </div>
//                                         <div className={"mt-4"}>
//                                             <ul className={"block w-full gap-3 "}>
//                                                 {facilities.map((item, index) => (
//                                                     <li key={index} className="my-3">
//                                                         <InputCheckbox
//                                                             name={item.name}
//                                                             toggle={handleCategoryChange}
//                                                             selectedColors={selectedCategory}
//                                                             value={item.id}
//                                                         />
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={"w-full md:w-7/12 lg:w-8/12 2xl:w-9/12 my-4  "}>
//                             <div className={"w-full "}>
//                                 <div className={"w-11/12 mx-auto container"}>
//                                     <ul className={"w-full flex flex-wrap relative"}>
//                                         {filteredBus.map((res, index) => (
//                                             <li key={index} className={"w-full sm:w-6/12 md:w-full lg:w-6/12 2xl:w-4/12 my-3"}>
//                                                 <CardProductComponent item={res} />
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//
//         </>
//     );
// }


export const RentContentComponent = ({ bus, facilities, categories }) => {
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCategoryChange = (event) => {
        const value = parseInt(event.target.value);
        setSelectedCategory((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((category) => category !== value)
                : [...prevSelected, value]
        );
    };

    const handleFacilitiesChange = (event) => {
        const value = parseInt(event.target.value);
        setSelectedFacilities((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((facility) => facility !== value)
                : [...prevSelected, value]
        );
    };

    const handleCategory1Change = (event) => {
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

        // Check if the bus has at least one of the selected facilities
        const matchesFacilities = selectedFacilities.length > 0
            ? item.facilities.some(facility => selectedFacilities.includes(facility.facility_id))
            : true;

        const matchesSearch = searchQuery ? item.name.toLowerCase().includes(searchQuery) : true;
        return matchesCategory && matchesFacilities && matchesSearch;
    });

    return (
        <>
            <div className={"bg-primary  relative pt-32 pb-20 lg:pt-52 lg:pb-32"}>
                <div className={"w-11/12 mx-auto container"} style={{ maxWidth: "1500px" }}>
                    <div className={"text-left lg:text-center"}>
                        <h2 className={"text-white text-2xl lg:text-3xl font-semibold"}>Temukan Kendaraan yang Tepat untuk Setiap Perjalanan Anda!</h2>
                        <div className={"my-3 lg:my-2"}>
                            <p className={"text-white hidden lg:block lg:text-md text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan <br /> kendaraan yang tepat untuk setiap perjalanan Anda!</p>
                            <p className={"text-white block lg:hidden lg:text-md text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan</p>
                        </div>
                    </div>
                </div>
                <div className={"w-10/12 right-0   left-0 absolute -bottom-6 mx-auto"} style={{ maxWidth: "1500px" }}>
                    <div className={"w-full lg:w-6/12 me-auto container"}>
                        <div className={"bg-white  py-2 px-4 rounded-lg shadow"}>
                            <div className={"flex justify-between"}>
                                <div className={"my-auto w-full"}>
                                    <input
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className={"py-2 text-md lg:text-lg w-full"} placeholder={"Cari kendaraan"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full lg:w-11/12 pb-16 mt-8 lg:mt-10 mx-auto container"} style={{ maxWidth: "1500px" }}>
                <div className={"w-full md:w-11/12 mx-auto lg:w-full"}>
                    <div className={"w-full block md:flex justify-between "} style={{ maxWidth: "1500px" }}>
                        <div className={"w-11/12 sm:w-full md:w-4/12 lg:w-3/12  xl:w-3/12 2xl:w-3/12 mx-auto "}>
                            <div className={"border-b  w-full mx-auto py-4 px-3 rounded-md "}>
                                <div className={"block w-full"}>
                                    <div className={"w-full mx-auto container"}>
                                        <div className={"mb-3 border-b border-gray-100 pb-3"}>
                                            <h2 className={"text-md lg:text-lg text-gray-700 font-medium"}>Kategori</h2>
                                        </div>
                                        <div className={"mt-4"}>
                                            <ul className={"flex w-full gap-3 flex-wrap"}>
                                                {categories.map((item, index) => (
                                                    <li key={index} className="">
                                                        <InputCheckbox
                                                            name={item.name}
                                                            toggle={handleCategory1Change}
                                                            selectedColors={selectedCategory}
                                                            value={item.id}
                                                        />
     
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"border-b  w-full mx-auto py-4 px-3 rounded-md "}>
                                <div className={"block w-full"}>
                                    <div className={"w-full mx-auto container"}>
                                        <div className={"mb-3 border-b border-gray-100 pb-3"}>
                                            <h2 className={"text-md lg:text-lg text-gray-700 font-medium"}>Fasilitas</h2>
                                        </div>
                                        <div className={"mt-4"}>
                                            <ul className={"block w-full gap-3 "}>
                                                {facilities.map((item, index) => (
                                                    <li key={index} className="my-3">
                                                        <InputCheckbox
                                                            name={item.name}
                                                            toggle={handleFacilitiesChange}
                                                            selectedColors={selectedFacilities}
                                                            value={item.id}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-7/12 lg:w-8/12 2xl:w-9/12 my-4  "}>
                            <div className={"w-full "}>
                                <div className={"w-11/12 mx-auto container"}>
                                    <ul className={"w-full flex flex-wrap relative"}>
                                        {filteredBus.map((res, index) => (
                                            <li key={index} className={"w-full sm:w-6/12 md:w-full lg:w-6/12 2xl:w-4/12 my-3"}>
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


// {/*/!* MOBILE *!/*/}
// {/*<div className={"block lg:hidden w-11/12"}>*/}
// {/*    <ul className={"flex "}>*/}
// {/*        {categories.map((item, index) => (*/}
// {/*            <li key={index} className={"w-6/12 mx-auto container"}>*/}
// {/*                <InputCheckbox*/}
// {/*                    name={item.name}*/}
// {/*                    toggle={handleCategoryChange}*/}
// {/*                    selectedColors={selectedCategory}*/}
// {/*                    value={item.id}*/}
// {/*                />*/}
// {/*            </li>*/}
// {/*        ))}*/}
// {/*    </ul>*/}
// {/*</div>*/}