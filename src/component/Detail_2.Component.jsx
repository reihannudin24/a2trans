import { Question , Lightbulb, CaretRight, ExclamationMark  } from "@phosphor-icons/react"

export default function Detail_2() {
    return (
        <>
            <div className="xl:mt-10 mx-auto container pb-10">
                <div className="mx-4">
                    <h1 className="font-bold xl:text-xl text-md">Penting untuk Perjalananmu</h1>
                    <div className="grid xl:grid-cols-3 grid-cols-1 mt-6 gap-6">

                        <div className="flex flex-row gap-4 items-center border-b xl:border border-gray-300 p-4 rounded-xl shadow-md">
                            <div>
                                <Lightbulb size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md">Cara Memesan Bus & Travel</h1>
                                <p className="font-xs">Yuk, cari tau mudahnya cara memesan Bus & Travel di tiket.com.</p>
                            </div>
                            <div className="xl:hidden">
                                <CaretRight size={32} />
                            </div>
                        </div>


                        <div className="flex flex-row gap-4 items-center border-b xl:border border-gray-300 p-4 rounded-xl shadow-md">
                            <div>
                                <Question  size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md">Pertanyaan Sering Diajukan</h1>
                                <p className="font-xs">Temukan jawaban atas pertanyaan seputar Bus & Travel di tiket.com.</p>
                            </div>
                            <div className="xl:hidden">
                                <CaretRight size={32} />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-center border-b xl:border border-gray-300 p-4 rounded-xl shadow-md">
                            <div>
                                <ExclamationMark   size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md">Persyaratan Perjalanan</h1>
                                <p className="font-xs">Cek protokol dan syarat perjalanan selama pandemi.</p>
                            </div>
                            <div className="xl:hidden">
                                <CaretRight size={32} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
} 