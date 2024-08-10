import {Link} from "react-router-dom";

export const FooterComponent = () => {

    const information = [
        {
            "value" : "A commitment to teaching essential skills to students globally." ,
        },
        {
            "value" : "Grand Catania blok O5/39 Citra Raya, Kabupaten Tangerang" ,
        }, {
            "value" : "reihannudin24@gmail.com" ,
        },{
            "value" : "+62812-1839-1138" ,
        }
    ]

    const footer = [
        {
            'footer' : {
                "title" : "About" ,
                "data" : [
                    {
                        "value" : "team", "url" : "/team"
                    },
                    {
                        "value" : "History" , "url" : "/history"
                    },
                    {
                        "value" : "Carrers" , "url" : "/carrers"
                    },
                ]
            },
        },
        {
            'footer' : {
                "title" : "Contact Us" ,
                "data" : [
                    {
                        "value" : "Privacy Policy", "url" : "/privacy-policy"
                    },
                    {
                        "value" : "Contact Us/About Us" , "url" : "/about"
                    },
                ]
            },
        },
        {
            'footer' : {
                "title" : "Country" ,
                "data" : [
                    {
                        "value" : "Indonesia", "url" : "/indonesia"
                    },
                    {
                        "value" : "Australia" , "url" : "/australia"
                    },
                ]
            },
        }
    ];


    const socialMedia = [
        {
            "name" : "Instagram",
            "image" : "1",
            "url" : "reihannudin24@gmail.com",
        },
        {
            "name" : "Instagram",
            "image" : "2",
            "url" : "https://www.facebook.com/reihannudin/",
        },
        {
            "name" : "Instagram",
            "image" : "3",
            "url" : "https://www.instagram.com/reihannudin/",
        },
        {
            "name" : "Instagram",
            "image" : "4",
            "url" : "https://www.linkedin.com/reihannudin/",
        },
    ];

    return(
        <>
            <footer className={"w-full xl:pt-10 py-2"}>
                <header className={"w-11/12 2xl:w-10/12  py-4  mx-auto container"} style={{minWidth:"400px" , maxWidth:"1500px"}}>
                    <div className={"w-full md:mx-5"}>
                        <div className={"md:flex block mx-4"}>
                            <div className={"md:w-5/12 w-full "}>
                                <div className={"w-full mb-3"}>
                                    <div className={"cursor-pointer"} style={{height:"50px"}}>
                                        <Link to={"/"}>
                                            <div className={"flex"}>
                                                <div className={"my-auto pe-3 border-r border-gray-300"} style={{height:"40px"}}>
                                                    <img className={"h-full my-auto object-cover"} src={"/assets/img/logo.svg"} />
                                                </div>
                                                <div className={"my-auto ps-3"} style={{height:"45px"}}>
                                                    <img className={"h-full my-auto object-cover"} src={"/assets/img/logo-icon.svg"} />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={"block w-full md:w-10/12 mt-5 my-3"}>
                                    {information.map((item) => {
                                        return(
                                            <div className={"my-2"}>
                                                <p className={"text-xs md:text-sm text-gray-500"}>
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
                                                <p className={"text-sm md:text-md font-semibold text-gray-700"}>
                                                    {item?.footer.title}
                                                </p>
                                                <ul className={"my-3 block"}>
                                                    {item?.footer?.data.map((itemData , indexData) => {
                                                        return(
                                                            <li key={indexData} className={"text-sm  py-2 my-auto h-full cursor-pointer text-gray-500 hover:text-yellow-400"}>
                                                                <Link to={`${itemData.url}`}>{itemData.value}</Link>
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
                                        {socialMedia.map((item) => {
                                            return(
                                                <li className={"mx-2"}>
                                                    <Link to={`${item.url}`}>
                                                        <div className={"bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-full w-10 h-10"} >
                                                            <div className={"py-3 px-3 w-full h-full"}>
                                                                <img className={" w-full h-full object-cover"} src={`assets/img/img-social/img-social${item?.image}.png`}/>
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
                                        <span className={"text-xs md:text-sm h-full my-auto text-gray-500"}>@copyright 2024 by reihannudin</span>
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