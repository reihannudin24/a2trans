import {Buildings, Phone, Star} from "@phosphor-icons/react";


export const ListCardComponent = ({title}) => {
    return(
        <div className={"w-full my-4 lg:w-11/12 mx-auto "}>
            <div className={"w-full "}>
                <div className={"my-5"}>
                    <h2 className={"font-bold xl:text-xl text-md text-gray-800"}>{title}</h2>
                </div>
                <div className={"w-full relative"}>
                    <ul className={"w-full flex flex-wrap relative"}>
                        <li className={"w-6/12 lg:w-3/12  my-3"}>
                            <Card2Component name={"Luxury Bus"} category={"Travel Bus"} />
                        </li>
                        <li className={"w-6/12 lg:w-3/12  my-3"}>
                            <Card2Component name={"Luxury Bus"} category={"Travel Bus"} />
                        </li>
                        <li className={"w-6/12 lg:w-3/12  my-3"}>
                            <Card2Component name={"Luxury Bus"} category={"Travel Bus"} />
                        </li>
                        <li className={"w-6/12 lg:w-3/12  my-3"}>
                            <Card2Component name={"Luxury Bus"} category={"Travel Bus"} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export const FAQCardComponent = () => {
    return(
        <div className={""}>
            <div className={""}>
                <h2 className={""}>Jenis bus apa yang cocok untuk kebutuhan saya?</h2>
            </div>
            <div className={""}>
                <div className={""}>
                    <p className={""}>Jenis bus apa yang cocok untuk kebutuhan saya?
                    </p>
                </div>
            </div>
        </div>

    )
}

export const ReviewCardComponent = () => {
    return(
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
    return(
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


export const Card2Component = ({name, category, img}) => {
    return(
        <>
            <div className={"w-99 mx-auto lg:w-full rounded-lg  shadow"}>
                <div className={"relative"}>
                    <div className={"h-img-card relative"}>
                        <img className={"w-full h-full object-cover radius-card-img"} src={"/assets/img/bus/bus-1.jpg"}/>
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


export const CardComponent = () => {

    const facilities = [
        {
            "id" : 1,
            "name" : "bla bla bla",
            "icon": <Buildings size={18} color="#gray" />
        },{
            "id" : 2,
            "name" : "blo blo blo",
            "icon": <Phone size={18} color="#gray" />
        },{
            "id" : 3,
            "name" : "ble ble ble",
            "icon": <Phone size={18} color="#gray"  />
        },  {
            "id" : 4,
            "name" : "bli bli bli",
            "icon": <Phone size={18} color="#gray"  />
        },

    ]

    return(
        <>
            <div className={"w-99 mx-auto lg:w-full py-3 shadow-lg rounded-lg "}>
                <div className={"w-99  h-52 relative  cursor-pointer mx-auto"}>
                    <div className={"w-full "}>
                        <div className={"mb-2 "}>
                            <div className={"flex justify-between w-full"}>
                                <div className={"mt-1 pt-2"}>
                                    <p className={"text-2xl font-semibold text-gray-800"}>Jackal holidays</p>
                                    <p className={"text-md text-gray-500"}>Big Bus - Luxury</p>
                                </div>
                                <div className={"pt-0.5 mt-1"}>
                                    <div className={"bg-gray-100 rounded-md py-1.5 px-2"}>
                                        <div className={"flex gap-2"}>
                                            <Star size={16} color="#FFD700" weight="fill" />
                                            <h3 className={"text-sm text-gray-500 font-semibold"}>4.7/5</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={""}>
                            </div>
                        </div>
                    </div>

                    <div className={"absolute w-full bottom-0"}>
                        <div className={"mt-1 w-full pt-2"}>
                            <div className={"w-full"}>
                                <div className={"flex w-full justify-between"}>
                                    <div className={"my-auto"}>
                                        <ul className={"flex my-auto gap-2 w-full"}>
                                            {facilities.map((item, index) => {
                                                return(
                                                    <li className={"my-auto"} key={index}>
                                                        <FacilityCardComponent id={item?.id} name={item?.name} icon={item?.icon} />
                                                    </li>
                                                    )
                                            })}
                                        </ul>
                                    </div>
                                    <div className={"my-auto h-full"}>
                                        <h1 className={"text-2xl my-auto font-semibold text-gray-800"}>Rp.1000 - Rp.1000</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className={"h-img-card"}>*/}
                    {/*    <img className={"w-full h-full object-cover rounded-md"} src={"/assets/img/bus/bus-1.jpg"}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

const FacilityCardComponent =  ({id, icon, name}) => {
    return(
        <div className={"my-auto flex gap-2"}>
            <div className={""}>
                {icon}

            </div>
            <div className={"my-auto"}>
                <p className={"text-sm  text-gray-500"}>{name}</p>
            </div>
        </div>
    )
}