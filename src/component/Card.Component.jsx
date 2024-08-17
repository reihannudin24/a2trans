import {Star, Fan, Monitor, User, PintGlass,  ArrowRight} from "@phosphor-icons/react";
import {useState} from "react";



export const ListCardProductComponent = ({ bus, categories }) => {
    const [selected, setSelected] = useState(1); // Initialize with the first category ID

    const handleSelected = (e) => {
        const target = parseInt(e.target.value); // Convert selected value to an integer
        setSelected(target);
    };

    const filterByCategory = (data, categoryId) => {
        return data.filter(item => item.categories_id === categoryId);
    };

    const filteredBus = filterByCategory(bus, selected);

    return (
        <div className="w-full my-4 mx-auto container">
            <div className="w-full">
                <div>
                    <div className="my-5">
                        <div className="mb-2">
                            <h2 className="font-semibold text-2xl text-black-700 mx-4">Tipe Kendaraan A2Trans</h2>
                            <p className="my-1 py-1 text-sm text-gray-600 mx-4">
                                Dengan berbagai pilihan model yang ditawarkan, A2trans menghadirkan solusi mobilitas yang sesuai dengan kebutuhan beragam konsumen.
                            </p>
                        </div>
                    </div>
                    <div className="mx-4 w-full my-4 border-b border-gray-200 pb-3">
                        <ul className="flex gap-4 overflow-x-scroll scrollbar-hide text-center w-full">
                            {categories.map((item, index) => (
                                <li key={index} className="mx-2 flex-shrink-0">
                                    <button
                                        value={item.id}
                                        onClick={handleSelected}
                                        className={`cursor-pointer text-md font-normal text-gray-500 w-full h-full z-10 mx-auto bg-white px-4 py-2 ${selected === item.id ? 'bg-gray-200' : ''}`}
                                    >{item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="w-full flex flex-wrap ">
                        {filteredBus.map((busItem, index) => (
                            <li key={index} className="w-11/12 mb-10 md:w-6/12 lg:w-3/12">
                                <CardProductComponent item={busItem} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};



export const CardProductComponent = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-99 mx-auto  shadow rounded-md pb-1">

            {/*NEW*/}
            <div className={"relative"}>
                <div className="w-full top-10 h-full">
                    <div className="h-img-product">
                        <img className="h-full w-full rounded-md object-cover" src={`http://localhost:3000/api/bus/image/${item?.id}`} alt={item.name} />
                    </div>
                </div>
                <div className="w-full my- z-20 border shadow shadow-gray-400 rounded-2xl border-gray-50">
                    <div className="w-11/12 mx-auto flex">
                        <div className="bg-gray-600/40 py-1 my-3 px-3 rounded-md">
                            <h2 className="text-white text-sm font-normal">{item?.category_name}</h2>
                        </div>
                    </div>
                    <div className={"mb-3 w-11/12 mx-auto"}>
                        <div className="border-b pb-2 border-gray-200 w-full">
                            <h1 className="text-xl text-gray-700 font-semibold">{item.name}</h1>
                        </div>
                        <div className={"my-2"}>

                        </div>
                        <div className={"w-full mx-auto"}>
                            <div className={""}>
                                <div className={"flex justify-between"}>
                                    <div className={""}>
                                        <p className={"text-md text-gray-600 font-medium"}>
                                            Seat : {item?.seat}
                                        </p>
                                    </div>
                                    <div className={""}>
                                        <p className={"text-md text-gray-600 font-medium"}>
                                            Tipe : {item?.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ul className={" w-full mx-auto gap-3 flex-wrap flex"}>
                                {item?.facilities?.map((res, index) => {
                                    return(
                                        <li key={index} className={"my-1"}>
                                            <div>
                                                <div>
                                                    <img />
                                                </div>
                                                <p className={"text-md text-gray-600 font-normal"}>
                                                    {res?.facility_name}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>

                        <div className="my-5 w-full mx-auto">
                            <a href="https://wa.me/6282111191279?text=Halo%20A2%20Trans%20saya%20ingin%20memesan%20kendaraan" target="_blank" rel="noopener noreferrer">
                                <button className="bg-red-600 border border-red-700 py-2 shadow shadow-red-700 w-full rounded-md">
                                    <p className="text-white text-sm">Pesan sekarang</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*OLD*/}
            {/*<div className="w-full  mx-auto">*/}
            {/*    <div className="w-full h-full">*/}
            {/*        <div className="h-img-product">*/}
            {/*            <img className="h-full w-full rounded-md object-cover" src={item.imageUrl || "/assets/img/bus/bus-1.jpg"} alt={item.name} />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="my-2 px-3 mx-0">*/}
            {/*        <div className="mb-3">*/}
            {/*            <div className="w-full flex justify-between">*/}
            {/*                <div className="bg-gray-500/50 py-1 my-3 px-3 rounded-sm">*/}
            {/*                    <h2 className="text-white text-sm font-normal">{item.type}</h2>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="">*/}
            {/*                <h1 className="text-xl text-gray-700 font-semibold">{item.name}</h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="w-full flex justify-between">*/}
            {/*            <Link to={`/detail/${item?.id}`}>*/}
            {/*                <button className="bg-red-500 py-3 rounded-full px-3">*/}
            {/*                    <p className="text-white text-xs">Detail Kendaraan</p>*/}
            {/*                </button>*/}
            {/*            </Link>*/}
            {/*            <div>*/}
            {/*                <button onClick={handleIsOpen} className="bg-red-500 rounded-full p-3 my-auto">*/}
            {/*                    <ArrowRight className="text-lg text-white" />*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="w-full mt-1">*/}
            {/*    {isOpen && (*/}
            {/*        <div className="w-11/12 mx-auto border shadow rounded-2xl border-gray-50">*/}
            {/*            <div className="w-11/12 mx-auto">*/}
            {/*                <div className="my-3 mx-2">*/}
            {/*                    <h2 className="text-sm font-normal text-gray-500">Fasilitas yang disediakan</h2>*/}
            {/*                </div>*/}
            {/*                <div className="w-full my-3 mx-auto">*/}
            {/*                    <ul className="list-disc">*/}
            {/*                        {item.facilities && item.facilities.map((facility, index) => (*/}
            {/*                            <li key={index} className="my-4 text-gray-500">*/}
            {/*                                <p className="text-sm text-gray-500">{facility}</p>*/}
            {/*                            </li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*    <div className="my-5 mx-4 rounded-md">*/}
            {/*        <a href="https://wa.me/6282111191279?text=Halo%20A2%20Trans%20saya%20ingin%20memesan%20kendaraan" target="_blank" rel="noopener noreferrer">*/}
            {/*            <button className="bg-red-500 border py-2 shadow w-full rounded-md">*/}
            {/*                <p className="text-white text-sm">Pesan sekarang</p>*/}
            {/*            </button>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}


export const ListCardComponent = ({ title, data }) => {
    return (
        <div className={"w-full my-4   mx-auto container"}>
            <div className={"w-full"}>
                <div className={"my-5"}>
                    <h2 className={"font-bold xl:text-2xl text-2xl text-black-700 mx-4"}>{title}</h2>
                </div>
                <div className="mx-4">
                    <div className={"w-full relative"}>
                        <ul className={"w-full   flex flex-wrap relative"}>
                            {data?.map((item, index) => {
                                return(
                                    <CardCategoriesComponent index={index} name={item.nama_bus} category={data.category} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const ReviewCardComponent = () => {
    return (
        <div className={"w-full shadow rounded-lg pt-4 pb-3 "}>
            <div className={"w-11/12 mx-auto"}>
                <div className={"w-full"}>
                    <ul>
                        <StarComponent />
                    </ul>
                    <div className={"my-4"}>
                        <p className={"text-sm text-gray-500"}>Pergi liburan keluarga pake Bus Luxury serasa kayak nginep di hotel berjalan. Bus luxury-nya cihuy banget, ada karaoke, kulkas, sofa empuk-empuk, sampe toilet dalem bus juga ada! Perjalanan jauh jadi berasa cepet gara-gara asyik nyanyi ama ngemil bareng. Top deh pokoknya!</p>
                    </div>
                </div>
                <div className={"my-2"}>
                    <p className={"text-primary  font-bold text-lg"}>
                        Reihannudin
                    </p>
                    <p className={"text-gray-500 text-sm "}>Jakarta</p>
                </div>
            </div>
        </div>
    )
}


export const StarComponent = () => {
    return (
        <div className={" flex gap-1"}>
            <li>
                <Star size={18} color="#FFD700" weight="fill" />
            </li>
            <li>
                <Star size={18} color="#FFD700" weight="fill" />
            </li>
            <li>
                <Star size={18} color="#FFD700" weight="fill" />
            </li>
            <li>
                <Star size={18} color="#FFD700" weight="fill" />
            </li>
            <li>
                <div style={{ position: "relative", width: "24px", height: "24px" }}>
                    <Star size={18} color="#FFD700" weight="fill" style={{ position: "absolute", clipPath: "inset(0 50% 0 0)" }} />
                    <Star size={18} color="#D3D3D3" weight="fill" style={{ position: "absolute" }} />
                </div>
            </li>
        </div>
    )
}


export const CardCategoriesComponent = ({ name, category, img }) => {
    return (
        <>
            <div className={"w-full md:w-6/12 mx-auto my-2  rounded-lg  shadow"} >
                <div className={"relative w-99 mx-auto"}>
                    <div className={"h-img-card relative"}>
                        <img alt="Bus" className={"w-full h-full object-cover radius-card-img"} src={"/assets/img/bus/bus-1.jpg"} />
                        <div className={"absolute bottom-0 top-0 radius-card-img right-0 left-0 w-full h-full bg-shadow"}>

                        </div>
                        <div className={"absolute z-10 bottom-0 my-1"}>
                            <div className={"mb-2 w-11/12 text-left mx-auto"}>
                                <div className={"mx-3 w-full"}>
                                    <div className={"mt-1 pt-2 w-full"}>
                                        <p className={"text-xl md:text-md w-full text-gray-50 "}>{category}</p>
                                    </div>
                                    <h3 className={"w-full text-2xl text-white  font-semibold"}>{name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const CardComponent = ({ data }) => {
    return (
        <>
            <div className={"w-99 mx-auto lg:w-full rounded-lg p-4 shadow-3"}>
                <div className={"flex gap-4 justify-between"}>
                    <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center sm:justify-normal">

                        <div className={"h-img-card flex gap-4"}>
                            <img alt="Img" className={"w-full h-full object-cover radius-card-img"} src={data.thumb} />
                        </div>


                        <div className={"flex-1 flex-col gap-4"}>
                            <h1 className={"text-xl font-medium mb-2"}>{data.nama_bus}</h1>
                            <div className="flex flex-wrap sm:gap-4 gap-2 mb-4">

                                {/* FACILITY ICON */}
                                {/* Note : Data array dummy ada di bawah */}
                                {FacilityArray.map(res => {
                                    return <FacilityCardComponent Icon={res.icon} text={res.text} />
                                })}

                            </div>

                            {/* MOBILE MODE */}
                            <div className="flex flex-col gap-2 xl:hidden">
                                {/* <div className="flex flex-col">
                                    <h1 className="text-md text-gray-500">Mulai dari</h1>
                                    <h1 className="text-2xl font-medium text-primary">IDR {data.harga}</h1>
                                </div> */}
                                <button className="p-2 bg-blue-500 text-white rounded-md w-full">Detial</button>
                            </div>
                        </div>

                    </div>

                    {/* DASKTOP MODE */}
                    <div className="items-end xl:flex hidden">
                        <div className="flex flex-col gap-2">
                            {/* <div className="flex flex-col">
                                <h1 className="text-md text-gray-500">Mulai dari</h1>
                                <h1 className="xl:text-2xl sm:text-md font-medium text-primary">IDR {data.harga}</h1>
                            </div> */}
                            <button className="p-2 bg-blue-500 text-white rounded-md w-full">Detial</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export const CardDetialComponent = ({ data }) => {
    return (
       <></>
    )
}

// Data Icon Dummy Array
const FacilityArray = [
    {
        icon: PintGlass,
        text: "Air"
    },
    {
        icon: User,
        text: "Kapasitas 40"
    },
    {
        icon: Monitor,
        text: "Hiburan"
    },
    {
        icon: Fan,
        text: "Full AC"
    },
]

const FacilityCardComponent = ({ text, Icon }) => {
    return (
        <div className="flex gap-2 items-center">
            <Icon size={30} className="text-gray-500" />
            <span className="text-gray-500">{text}</span>
        </div>
    )
}

const StatusCardComponent = ({ status }) => {
    return (
        <div className={`${status ? "bg-green-500" : "bg-red-500"} p-2 rounded-md text-white w-16 text-center mb-2`}>
            {status ? "Ready" : "Not Ready"}
        </div>
    )
}
