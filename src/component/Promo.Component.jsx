import {
    Armchair,
    Tag,
    Question,
    Lightbulb,
    CaretRight,
    ExclamationMark,
    CaretDown,
    EnvelopeSimple,
    WhatsappLogo, InstagramLogo
} from "@phosphor-icons/react"
import { ReviewCardComponent } from "./Card.Component";
import { useState } from "react";

export const PromoComponent = () => {
    return (
        <>
            <div className="mt-40 md:mt-40 lg:mt-10 mx-auto container pb-10">
                <div className="mx-4">
                    <h1 className="font-bold xl:text-xl selectableText-new text-xl">Lebih Hemat dan Bebas Khawatir</h1>
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        <div className="flex flex-row selectableText-new gap-4 items-center">
                            <div>
                                <Armchair size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold selectableText-new text-lg md:text-md">Pasti Dapet Kursi</h1>
                                <p className="selectableText-new font-sm md:font-xs ">Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <div>
                                <Tag size={32} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold selectableText-new text-lg md:text-md">Diskon Setiap Hari</h1>
                                <p className="font-sm md:font-xs selectableText-new">Nikmati harga spesial biar budget perjalanan makin aman.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export const Promo2Component = () => {
    return (
        <>
            <div className="xl:mt-10 mx-auto container pb-10">
                <div className="mx-4">
                    <h1 className="font-bold text-xl selectableText-new">Penting untuk Perjalananmu</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 mt-6 gap-6">

                        <div className="cursor-pointer flex flex-row gap-4 items-center border-b xl:border border-gray-300 p-4 rounded-xl shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
                            <div>
                                <Lightbulb size={32} />
                            </div>
                            <div className={"flex w-full justify-between"}>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-lg selectableText-new md:text-md">Cara Memesan Bus & Travel</h1>
                                    <p className="font-xs selectableText-new">Yuk, cari tau mudahnya cara memesan Bus & Travel di tiket.com.</p>
                                </div>
                                <div className="">
                                    <CaretRight size={32} />
                                </div>
                            </div>
                        </div>

                        <div className="cursor-pointer flex flex-row gap-4 items-center border-b xl:border border-gray-300 p-4 rounded-xl shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
                            <div>
                                <Question size={32} />
                            </div>
                            <div className={"flex w-full justify-between"}>
                                <div className="flex flex-col">
                                    <h1 className="font-bold selectableText-new text-lg md:text-md">Pertanyaan Sering Diajukan</h1>
                                    <p className="font-xs selectableText-new">Temukan jawaban atas pertanyaan seputar Bus & Travel di tiket.com.</p>
                                </div>
                                <div className="">
                                    <CaretRight size={32} />
                                </div>
                            </div>
                        </div>

                        <div className="cursor-pointer flex flex-row gap-4 items-center border-b xl:border border-gray-300 p-4 rounded-xl shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
                            <div>
                                <ExclamationMark size={32} />
                            </div>
                            <div className={"flex w-full justify-between"}>
                                <div className="flex flex-col">
                                    <h1 className="font-bold selectableText-new text-lg md:text-md">Persyaratan Perjalanan</h1>
                                    <p className="font-xs selectableText-new">Cek protokol dan syarat perjalanan selama pandemi.</p>
                                </div>
                                <div className="">
                                    <CaretRight size={32} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export const Promo3Component = () => {

    const promoLayanan = [
        {
            "name": "24 Jam",
            "category": "Layanan",
        },
        {
            "name": "100%",
            "category": "Kepercayaan Pelanggan",
        },
        {
            "name": "98%",
            "category": "Kepuasan Pelanggan",
        },
        {
            "name": "100%",
            "category": "Armada Bus Terbaik",
        }
    ]



    const contact = [
        {
            icon: <EnvelopeSimple size={32}  color="#ffffff" />, // Phosphor icon for email
            label: "Email",
            value: "user@example.com",
            id: "1"
        },
        {
            icon: <WhatsappLogo size={32} color="#ffffff" />, // Phosphor icon for WhatsApp
            label: "WhatsApp",
            value: "+1234567890",
            id: "2"
        },
        {
            icon: <InstagramLogo size={32} color="#ffffff" />, // Phosphor icon for Instagram
            label: "Instagram",
            value: "@username",
            id: "3"
        }
    ];


    return (
        <div className={"w-full bg-white"}>
            <div className={"w-full bg-gray-100 mx-auto container  py-10"}>
                <div className={"py-5"}>
                    <div className={"w-11/12 md:w-10/12 mx-auto container"}>
                        <div className={"text-center my-5"}>
                            <h2 className={"text-2xl selectableText-new text-center text-primary"}>
                                Profil <b>A2Trans.com</b> - Pusat Sewa Bus Pariwisata Jakarta
                            </h2>
                            <div className={"my-1"}>
                                <h3 className={"text-md selectableText-new text-gray-600 "}>by AJB TOUR & TRANS</h3>
                            </div>
                        </div>
                        <div className={"my-6 text-center"}>
                            <p className={"my-6 selectableText-new text-md text-gray-700"}>
                                Andarabus adalah penyedia layanan sewa bus pariwisata terbaik di Jakarta. Kami menyediakan berbagai armada yang bisa disesuaikan dengan kebutuhan Anda. Mulai dari study tour, wisata religi, outbond, gathering, rombongan mudik, dan masih banyak lagi.
                            </p>
                            <p className={"my-6 selectableText-new text-md text-gray-700"}>
                                Jaminan keamanan dan kenyamanan kami berikan kepada para pelanggan yang menggunakan layanan kami. Demi memberikan layanan yang terbaik untuk Anda, kamu bekerja sama dengan PO Bus Pariwisata yang terkemuka di wilayah Jabodetabek, Bali, Sumatera, serta Sulawesi.
                            </p>
                            <p className={"my-6 selectableText-new text-md text-gray-700"}>
                                Anda tidak perlu merisaukan tentang biaya yang harus dikeluarkan. Kami memberikan tarif yang sangat bersaing dan bisa disesuaikan dengan anggaran yang sudah Anda persiapkan. Setelah menyepakati harga, maka kami akan merekomendasikan armada yang sesuai dengan kebutuhan Anda
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full py-5 bg-primary"}>
                <div className={"mx-auto container"}>
                    <div className={"mx-4"}>
                        <ul className={"w-full flex  flex-wrap"}>
                            {promoLayanan.map((item, index) => {
                                return (
                                    <li key={index} className={"w-5/12  mx-auto text-center md:w-3/12"}>
                                        <div className={"my-1"}>
                                            <h2 className={"text-xl selectableText-new text-center font-semibold text-white "}>
                                                {item?.name}
                                            </h2>
                                            <p className={"text-center selectableText-new text-white font-normal text-sm my-2"}>
                                                {item?.category}
                                            </p>
                                        </div>
                                    </li>

                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"py-10 w-full"}>
                <div className={"w-full md:w-10/12 py-5 mx-auto container"}>
                    <div className={"text-center "}>
                        <h2 className={"font-semibold text-primary selectableText-new text-2xl"}><b>Hubungi</b> Kami</h2>
                    </div>
                    <div className={"my-5 w-11/12 mx-auto"}>
                        <div className={"py-5 text-center"}>
                            <p className={"text-md font-medium selectableText-new text-gray-600"}>Andarabus bukan hanya sekedar penyedia layanan sewa bus pariwisata, melainkan partner perjalanan yang siap mewujudkan perjalanan Anda menjadi pengalaman yang tak terlupakan. Dengan banyaknya armada yang beroperasi, fasilitas yang menarik, dan kemudahan pemesanan, Andarabus merupakan pilihan terbaik untuk setiap kebutuhan transportasi Anda.</p>
                            <br />
                            <p className={"text-md font-medium selectableText-new text-gray-600"}>
                                Andarabus memahami bahwa suatu perjalanan bukan hanya untuk mencapai tujuan atau destinasi saja, namun juga tentang menciptakan kenangan yang berharga. Bersama Andarabus, nikmati perjalanan yang nyaman, menyenangkan, dan tak terlupakan. Lakukan pemesanan dengan segera untuk mendapatkan penawaran menarik.
                            </p>
                        </div>

                    </div>
                    <div className={"my-5 w-full"}>
                        <div className={"w-full"}>
                            <ul className={"w-full block md:flex flex-wrap "}>
                                {contact.map((item, index) => {
                                    return(
                                        <li key={index} className={"w-full my-4 md:my-6 md:w-6/12 lg:w-4/12"}>
                                            <ContactCardComponent  icon={item?.icon} name={item?.label} value={item?.value}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const ContactCardComponent = ({icon, name, value}) => {
    return (
        <div className={"w-11/12 px-5 py-3 hover:bg-gray-50 rounded-md cursor-pointer mx-auto"}>
            <div className={"flex gap-3"}>
                <div className={"bg-red-600 rounded-full h-14 w-14 flex items-center justify-center"}>
                    {icon}
                </div>
                <div>
                    <h4 className={"text-gray-600 selectableText-new text-md md:text-md  font-medium"}>{name}</h4>
                    <p className={"text-gray-800  selectableText-new text-lg md:text-md font-semibold"}>{value}</p>
                </div>
            </div>
        </div>
    )
}

export const TestimonialComponent = () => {
    return (
        <>
            <div className="xl:mt-10 mx-auto container pb-10">
                <div className="w-full mt-10">
                    <div className={"w-full mx-4"}>
                        <div className={"flex gap-2 m-4 text-center"}>
                            <h1 className="font-bold selectableText text-primary text-2xl text-md">Testimoni</h1>
                            <h1 className="font-medium selectableText text-primary text-2xl text-md">Konsumen</h1>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 grid-cols-1 mt-3 md:mt-6 gap-6">
                        <div className="block flex-row gap-4 items-center pt-2  px-4 rounded-xl ">
                            <ReviewCardComponent />
                        </div>
                        <div className="block flex-row gap-4 items-center pt-2  px-4 rounded-xl ">
                            <ReviewCardComponent />
                        </div>
                        <div className="block flex-row gap-4 items-center pt-2  px-4 rounded-xl ">
                            <ReviewCardComponent />
                        </div>
                        <div className="block flex-row gap-4 items-center pt-2  px-4 rounded-xl ">
                            <ReviewCardComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export const FaqComponent = () => {

    const faq = [
        {
            "id": 1,
            "name": "Harga Sewa Bus Luxury / Premium / Mewah / Caravan Jakarta",
            "content": ""
        },
        {
            "id": 2,
            "name": "Harga Sewa Hiace Luxury / VVIP Jakarta",
            "content": ""
        },
        {
            "id": 3,
            "name": "Harga Sewa Big Bus Jakarta",
            "content": ""
        },
        {
            "id": 4,
            "name": "Harga Sewa Medium Bus",
            "content": ""
        },
        {
            "id": 5,
            "name": "Harga Sewa Hiace Jakarta",
            "content": ""
        },
    ]

    return (
        <div className={"bg-gray-50 w-full py-4 mx-auto container"}>
            <div className={"w-11/12 mx-auto"}>
                <div className={"block gap-4 mx-1 justify-between"}>
                    <div className={"w-full text-center py-6"}>
                        <div className={""}>
                            <div className={""}>
                                <h1 className={"text-2xl text-primary selectableText-new font-semibold"}>Pertanyaan Umum</h1>
                                <div className={"my-1"}>
                                    <p className={"text-gray-600 text-md selectableText-new font-light"}>5 pertanyaan yang sering ditanyakan kepada Andarabus seputar layanan Sewa Bus luxury</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={"w-full"}>
                        <ul className={"mx-auto "}>
                            {faq.map((item, index) => {
                                return (
                                    <>
                                        <li key={index} className={"my-3 text-center"}>
                                            <FaqCardComponent id={item?.id} title={item?.name} content={item?.content} />
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



const FaqCardComponent = ({ title, content, id }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onChangeIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={onChangeIsOpen}
                className="cursor-pointer border-b-2 w-full py-4 border-gray-100"
            >
                <div className="flex w-full justify-between">
                    <div className={"text-left"}>
                        <h2 className="text-lg selectableText-new font-semibold text-gray-600">{title}</h2>
                    </div>
                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <CaretDown size={16} />
                    </div>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="my-3">
                    <p className="text-left selectableText-new text-md text-gray-500">
                        Andarabus memiliki sejumlah fasilitas yang dikhususkan untuk menunjang keamanan dan kenyamanan para pelanggan. Berikut adalah beberapa fasilitas yang bisa Anda dapatkan saat menggunakan layanan dari Andarabus
                    </p>
                </div>
            </div>
        </div>
    );
};

const SplitPage = () => {
    return (
        <div className="w-full border-b border-gray-500"></div>
    )
}

