
export const CardComponent = () => {
    return(
        <>
            <div className={"w-99 mx-auto lg:w-full rounded-lg pb-2 shadow"}>
                <div className={""}>
                    <div className={""}>
                        <img className={""} src={"/assets/img/bus/bus-1.jpg"}/>
                    </div>
                    <div className={"my-1"}>
                        <div className={"mb-2"}>
                            <div className={"mt-1 pt-2"}>
                                <p className={"text-xs text-gray-500 text-center"}>Travel</p>
                            </div>
                            <h3 className={"text-center text-md font-semibold"}>Name</h3>
                        </div>
                        <div className={"text-center"}>
                            <p className={"text-sm text-gray-600"}>Rp.1000 - Rp.1000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}