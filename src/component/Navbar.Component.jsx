import {Link} from "react-router-dom";
import {useState} from "react";
import {CaretDown} from "@phosphor-icons/react";

const navbar = [
    {
        "name" : "Home",
        "url" : "/",
    },
    {
        "name" : "Penyewaan",
        "url" : "/rent",
    },
    {
        "name" : "Tentang Kami",
        "url" : "/",
    },
    {
        "name" : "Kontak",
        "url" : "/Kontak",
    },
]

export const NavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <nav className={"sticky top-0 z-50 w-full mx-auto "} style={{minWidth:"300px"}}>
                <div className={"bg-primary-new-nav py-1 w-full"}>
                    <header className={"w-11/12 mx-auto container pt-2  lg:pt-4 pb-4"}>
                        <div className={"w-full flex justify-between"}>
                            <div className={"lg:w-6/12 mt-3 mb-auto lg:mb-0 lg:mt-0"}>
                                <div className={"w-full lg:w-5/12 h-full my-auto "}>
                                    <div className={"h-10 "}>
                                        <img alt="Logo" className={"h-full object-cover"} src={"/assets/img/hor-icon.svg"}/>
                                    </div>
                                    {/*<Logo />*/}
                                </div>
                            </div>
                            <div className={"lg:w-6/12 my-auto"}>
                                <div className={"w-10/12 my-auto lg:block hidden mx-auto"}>
                                    <ul className={"flex my-auto gap-10"}>
                                        {navbar.map((item, index) => {
                                            return(
                                                <li key={index} className={"ms-auto"}>
                                                    <ListNavbar name={item?.name} url={item?.url} id={index} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={"block my-auto lg:hidden"}>
                                   <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {isOpen && (
                    <MenuOpen navbar={navbar} />
                )}
            </nav>

        </>
    )
}


export const NavbarPanelComponent = () => {
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4 mt-16">
            <div className="justify-between flex items-center">
                <div className="text-gray-500">
                    <a href="/dashboard">Pages</a>
                    <span className="text-gray-600"> / Add</span>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="https://dummyimage.com/300" alt="" className="w-12 h-12 rounded-3xl shadow-md object-cover" />
                    <span className="text-gray-600 font-medium">Andrian</span>
                    <CaretDown  size={19}/>
                </div>
            </div>

            <h1 className="text-gray-500 font-bold">Add Data</h1>
        </div>
    )
}



export  const Logo = () => {
    return(
        <>
            <div className={"my-auto"}>
                <h1 className={"text-2xl text-white my-auto"}>A2Trans</h1>
            </div>
            {/*<div className={"hidden lg:block h-img my-auto"}>*/}
            {/*    <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} alt={"logo"}/>*/}
            {/*</div>*/}
            {/*<div className={"block lg:hidden h-img-2 my-auto"}>*/}
            {/*    <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} alt={"logo"}/>*/}
            {/*</div>*/}
        </>
    )
}


export  const LogoPrimary = () => {
    return(
        <>
            <div className={"my-auto"}>
                <h1 className={"text-2xl text-primary my-auto"}>A2Trans</h1>
            </div>
            {/*<div className={"hidden lg:block h-img my-auto"}>*/}
            {/*    <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} alt={"logo"}/>*/}
            {/*</div>*/}
            {/*<div className={"block lg:hidden h-img-2 my-auto"}>*/}
            {/*    <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} alt={"logo"}/>*/}
            {/*</div>*/}
        </>
    )
}

const Menu = ({toggleMenu , isOpen}) => {
    return(
        <button
            onClick={toggleMenu}
            className={"cursor-pointer text-white hover:text-white  py-1 lg:px-2 rounded-md "}
        >
            {isOpen ? (
                <div className={"menu-close"}>
                    <span className={"line-1"}></span>
                    <span className={"line-2"}></span>
                </div>
            ) : (
                <div className={"menu-open"}>
                    <span className={"line"}></span>
                    <span className={"line"}></span>
                    <span className={"line"}></span>
                </div>
            )}
        </button>
    )
}

const ListNavbar = ({url, name}) => {
    return(
        <div className={"w-5/12 mx-auto lg:w-full"}>
            <div className={"cursor-pointer text-15  mx-auto text-white hover:text-white hover:scale-110 transition-transform duration-200 py-1 md:px-2 rounded-md hover:bg-white hover:bg-opacity-40"}>
                <Link to={`${url}`}>
                    <p className={"font-semibold text-white  "}>{name}</p>
                </Link>
            </div>
        </div>

    )
}

const MenuOpen = ({navbar}) => {
    return(
        <div className={"bg-primary py-4 "}>
            <div className={""}>
                <ul className={"block gap-10 text-center"}>
                    {navbar.map((item, index) => {
                        return (
                            <li key={index} className={"my-10"}>
                                <ListNavbar name={item?.name} url={item?.url} id={index}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}