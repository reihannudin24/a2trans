import {Link} from "react-router-dom";

export const FooterComponent = () => {

    const information = [
        {
            "value" : "A2Trans hadir sebagai pilihan yang cocok bagi Anda apabila ingin merencanakan perjalanan. Dengan banyaknya armada yang disediakan, serta jaminan kenyamanan bagi para penumpang, Andara menjadi penyedia layanan sewa bus Jakarta yang terbaik." ,
        },
        {
            "value" : "Grand Catania blok O5/39 Citra Raya, Kabupaten Tangerang" ,
        }
    ]

    const footer = [
        {
            'footer' : {
                "title" : "Kontak" ,
                "data" : [
                    {
                        "value" : "+62 821-1119-1279", "url" : "/team"
                    },
                    {
                        "value" : "+62 821-1119-1279" , "url" : "/history"
                    },
                    {
                        "value" : "a2trans@gmail.com" , "url" : "/history"
                    }
                ]
            },
        },
        {
            'footer' : {
                "title" : "Harga sewa" ,
                "data" : [
                    {
                        "value" : "Harga Sewa Big Bus", "url" : "/rent?category=big_bus"
                    },
                    {
                        "value" : "Harga Sewa Medium Bus" , "url" : "/rent?category=medium_bus"
                    },
                    {
                        "value" : "Harga Sewa Medium Bus Long" , "url" : "/rent?category=medium_long_bus"
                    },
                    {
                        "value" : "Harga Sewa Hiace" , "url" : "/rent?category=hiace"
                    },
                    {
                        "value" : "Harga Sewa Hiace Premio" , "url" : "/rent?category=hiace_premio"
                    },
                    {
                        "value" : "Harga Sewa Elf" , "url" : "/rent?category=elf"
                    },
                ]
            },
        },
        {
            'footer' : {
                "title" : "Armada Luxury" ,
                "data" : [
                    {
                        "value" : "Sewa Bus Luxury", "url" : "/rent/luxury=bus"
                    },
                    {
                        "value" : "Sewa Hiace Luxury" , "url" : "/rent/luxury=hiace"
                    },
                    {
                        "value" : "Sewa Hiace Premio Luxury" , "url" : "/rent/luxury=hiace_premio"
                    },
                ]
            },
        }
    ];


    const socialMedia = [
        {
            "name" : "Email",
            "image" : "1",
            "url" : "reihannudin24@gmail.com",
        },
        {
            "name" : "Facebook",
            "image" : "2",
            "url" : "https://www.facebook.com/reihannudin/",
        },
        {
            "name" : "Instagram",
            "image" : "3",
            "url" : "https://www.instagram.com/reihannudin/",
        },
        {
            "name" : "Whatapps",
            "image" : "4",
            "url" : "https://www.linkedin.com/reihannudin/",
        },
    ];

    return(
        <>
            <footer className={"w-full xl:pt-10 bg-gray-50 py-2"}>
                <header className={"w-full py-4  mx-auto container"} style={{minWidth:"300px" , maxWidth:"1500px"}}>
                    <div className={"w-full lg:w-11/12 mx-auto "}>
                        <div className={"md:flex block mx-4"}>
                            <div className={"md:w-5/12 w-full "}>
                                <div className={"w-full mb-3"}>
                                    <div className={"cursor-pointer"} style={{height:"50px"}}>
                                        <Link to={"/"}>
                                            <div className={"w-full lg:w-5/12 h-full my-auto"}>
                                                <div className={"h-10 "}>
                                                    <img alt="img" className={"h-full object-cover"} src={"/assets/img/hor-icon.svg"}/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={"block w-full md:w-10/12 mt-5 my-3"}>
                                    {information.map((item, index) => {
                                        return(
                                            <div key={index} className={"my-2"}>
                                                <p className={"text-md selectableText-new md:text-sm text-gray-500"}>
                                                    {item.value}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={"md:w-6/12 w-full"}>
                                <div className={"md:flex flex flex-wrap  mt-6 md:mt-8 mb-3 justify-between"}>
                                    {footer.map((item , index) => {
                                        return(
                                            <div key={index} className={"py-4"}>
                                                <p className={"text-lg md:text-md selectableText-new font-semibold text-gray-700"}>
                                                    {item?.footer.title}
                                                </p>
                                                <ul className={"my-3 block"}>
                                                    {item?.footer?.data.map((itemData , indexData) => {
                                                        return(
                                                            <li key={indexData} className={"selectableText-new text-md md:text-sm py-2 my-auto h-full cursor-pointer text-gray-500 hover:text-red-600"}>
                                                                <Link className={"selectableText-new"} to={`${itemData.url}`}>{itemData.value}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={"pt-0 md:pt-4 "}>
                            <div className={"md:flex block justify-between"}>
                                <div className={"w-6/12  md:mx-0 mx-auto"}>
                                    <ul className={"flex order-2  pb-4  md:pb-0 md:order-1 md:justify-start md:items-start justify-center items-center "}>
                                        {socialMedia.map((item, index) => {
                                            return(
                                                <li key={index} className={"mx-2"}>
                                                    <Link to={`${item.url}`}>
                                                        <div className={"bg-gray-100 cursor-pointer selectableText-new hover:bg-gray-200 rounded-full w-10 h-10"} >
                                                            <div className={"py-3 px-3 w-full h-full"}>
                                                                <img alt="img" className={"selectableText-new w-full h-full object-cover"} src={`/assets/img/icon/img-social${item?.image}.png`}/>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={"w-full md:w-6/12 order-1 md:order-2 my-auto h-full"}>
                                    <div className={"text-center md:text-right h-full my-auto"}>
                                        <span className={"text-md md:text-sm h-full selectableText-new my-auto text-gray-500"}>@copyright 2024 by reihannudin</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
            </footer>

        </>
    )
}