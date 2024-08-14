import { Star, Fan, Monitor, User, PintGlass } from "@phosphor-icons/react";


export const ListCardComponent = ({ title, data }) => {
    return (
        <div className={"w-full my-4  mx-auto container"}>
            <div className={"w-full"}>
                <div className={"my-5"}>
                    <h2 className={"font-bold xl:text-2xl text-md text-red-700 mx-4"}>{title}</h2>
                </div>
                <div className="mx-4">
                    <div className={"w-full relative"}>
                        <ul className={"w-full flex flex-wrap relative"}>
                            {data.map(res => {
                                return (<li className={"w-6/12 lg:w-3/12  my-3"}>
                                    <Card2Component name={data.nama_bus} category={data.category} />
                                </li>)
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
        <div className={"w-full"}>
            <div className={"w-full"}>
                <ul>
                    <StarComponent />
                </ul>
                <div className={"my-4"}>
                    <p className={"text-md text-gray-500"}>Pergi liburan keluarga pake Bus Luxury serasa kayak nginep di hotel berjalan. Bus luxury-nya cihuy banget, ada karaoke, kulkas, sofa empuk-empuk, sampe toilet dalem bus juga ada! Perjalanan jauh jadi berasa cepet gara-gara asyik nyanyi ama ngemil bareng. Top deh pokoknya!</p>
                </div>
            </div>
            <div className={"my-2"}>
                <p className={"text-primary  font-bold text-lg"}>
                    Reihannudin
                </p>
                <p className={"text-gray-500 text-sm "}>Jakarta</p>
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


export const Card2Component = ({ name, category, img }) => {
    return (
        <>
            <div className={"w-99 mx-auto lg:w-full rounded-lg  shadow"}>
                <div className={"relative"}>
                    <div className={"h-img-card relative"}>
                        <img alt="Bus" className={"w-full h-full object-cover radius-card-img"} src={"/assets/img/bus/bus-1.jpg"} />
                        <div className={"absolute bottom-0 top-0 radius-card-img right-0 left-0 w-full h-full bg-shadow"}>

                        </div>
                        <div className={"absolute z-10 bottom-0 my-1"}>
                            <div className={"mb-2 w-11/12 text-left mx-auto"}>
                                <div className={"mx-3 w-full"}>
                                    <div className={"mt-1 pt-2 w-full"}>
                                        <p className={"text-sm w-full text-gray-50 "}>{category}</p>
                                    </div>
                                    <h3 className={"w-full text-white text-lg font-semibold"}>{name}</h3>
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
        <div className="mx-4">
            <h1 className="font-bold text-2xl mb-4">Detail Kendaraan</h1>

            <div className={"flex gap-4 justify-between p-4 rounded-md shadow-md"}>
                <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center sm:justify-normal">

                    <div className={"h-img-card flex gap-4"}>
                        <img alt="Img" className={"w-full h-full object-cover radius-card-img"} src={data.thumbAsli} />
                    </div>


                    <div className={"flex-1 flex-col gap-4 justify-between"}>
                        <h1 className={"text-xl font-medium mb-2"}>{data.nama_bus}</h1>

                        {/* Status Bus */}
                        <StatusCardComponent status={data.status} />

                        <div className="flex flex-wrap sm:gap-6 gap-4 mb-4">

                            {/* FACILITY ICON */}
                            {/* Note : Data array dummy ada di bawah */}
                            {FacilityArray.map(res => {
                                return <FacilityCardComponent Icon={res.icon} text={res.text} />
                            })}

                        </div>

                        {/* Note : ini button masih blm kedirect ke nomor owner */}

                        {/* MOBILE MODE */}
                        <div className="flex flex-col gap-2 xl:hidden items-end">
                            <button className="p-2 bg-blue-500 text-white rounded-md w-full">Pesan Sekarang</button>
                        </div>
                    </div>

                </div>

                {/* DASKTOP MODE */}
                <div className="items-end xl:flex hidden">
                    <div className="flex flex-col gap-2">
                        <button className="p-4 bg-blue-500 text-white rounded-md w-full">Pesan Sekarang</button>
                    </div>
                </div>

            </div>

        </div>
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
