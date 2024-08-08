import { Armchair, Tag  } from "@phosphor-icons/react"

export default function Detail() {
    return (
        <>
            <div className="mt-60 xl:mt-10 mx-auto container pb-10">
                <div className="mx-4">
                    <h1 className="font-bold xl:text-xl text-md">Lebih Hemat dan Bebas Khawatir</h1>
                    <div className="grid xl:grid-cols-2 grid-cols-1 mt-6 gap-6">

                        <div className="flex flex-row gap-4 items-center">
                            <div>
                                <Armchair size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md">Pasti Dapet Kursi</h1>
                                <p className="font-xs">Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
                            </div>
                        </div>

                        
                        <div className="flex flex-row gap-4 items-center">
                            <div>
                                <Tag  size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md">Diskon Setiap Hari</h1>
                                <p className="font-xs">Nikmati harga spesial biar budget perjalanan makin aman.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}