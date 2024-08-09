import {InputCheckbox, InputFilter} from "./Input.Component";
import {CardComponent, ListCardComponent} from "./Card.Component";

const rent = [
    {
        "name" : "Bus 1",
        "img" : "/assets/img/bus/bus-1.jpg",
        "type" : "Travel",
        "category" : "Luxury",
        "price" : "Rp.1000 - Rp.1000",
    }
]

const category = [
    {
        "id" : 1,
        "name" : "Luxury",
        "value" : "luxury",
    },
    {
        "id" : 2,
        "name" : "Bus",
        "value" : "bus",
    },
    {
        "id" : 3,
        "name" : "Mini Bus",
        "value" : "mini_bus",
    },
]

export const RentContentComponent = () => {
    return(
        <div className={"w-full lg:w-11/12 mt-8 lg:mt-10 mx-auto"}>
            <div className={"w-full"}>
                <div className={"w-full block lg:flex gap-4"}>
                    <div className={"lg:w-3/12 my-4 "}>
                        <div className={"border-b border-gray-300 lg:shadow w-11/12 mx-auto   py-4 px-3 rounded-lg"}>
                            <div className={"hidden lg:block w-11/12"}>
                                <div className={"w-10/12 mx-auto"}>
                                    <div className={"mb-3 border-b border-gray-100 pb-3"}>
                                        <h2 className={"text-md text-gray-700 font-semibold"}>Categories</h2>
                                    </div>
                                    <div className={"mt-4"}>
                                        <ul className={"block"}>
                                            {category.map((item, index) => {
                                                return(
                                                    <li className={"w-full  my-2 "}>
                                                        <InputCheckbox  name={item?.name} id={item?.id} value={item?.value}  />
                                                    </li>
                                                )
                                            })}
                                            {/*{rent.map((item, index) => {*/}
                                            {/*    return(*/}
                                            {/*        <li className={"my-2"}>*/}
                                            {/*            <InputCheckbox name={item?.name} />*/}
                                            {/*        </li>*/}
                                            {/*    )*/}
                                            {/*})}*/}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className={"block lg:hidden w-11/12"}>
                                <div className={""}>
                                    <ul className={"flex "}>
                                        {category.map((item, index) => {
                                            return(
                                                <li className={"w-6/12 mx-auto"}>
                                                    <InputCheckbox  name={item?.name} id={item?.id} value={item?.value}  />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full my-4 lg:w-9/12 "}>
                        <div className={"w-full "}>
                            <div>
                                <ListCardComponent title={"Jenis-Jenis Kendaraan "} />
                            </div>
                            <div className={"w-full relative"}>
                                <ul className={"w-full block flex-wrap relative"}>
                                    <li className={"w-full  my-3"}>
                                        <CardComponent />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}