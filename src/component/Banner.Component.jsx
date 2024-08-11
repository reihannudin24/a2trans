import { InputSearch } from "./Input.Component";
import { useState } from "react";

export const HeaderRent = () => {

    const [search, setSeach] = useState("");

    return (
        <div className={"bg-primary  relative pt-20 pb-14 lg:pb-20"}>
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
                    {/*Search*/}
                    <InputSearch search={search} setSearch={setSeach} redirect={"/rent"} />
                </div>
            </div>
        </div>
    )
}