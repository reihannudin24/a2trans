import {Link} from "react-router-dom";
import {useState} from "react";
import {CaretDown} from "@phosphor-icons/react";
import React from "react";
// import { FiAlignJustify } from "react-icons/fi";
// import { FiSearch } from "react-icons/fi";
// import avatar from "assets/img/avatars/avatar4.png";
import Dropdown from "./Dropdown.Component";
import {MdArrowBack} from "react-icons/md";

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
        "name" : "Kontak Kami",
        "url" : "/contact",
    },
]

export const NavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <nav className={"fixed overflow-x-hidden top-0 z-50 w-full mx-auto "} style={{minWidth:"300px"}}>
                <div className={"bg-primary-new-nav py-1 w-full"}>
                    <header className={"w-11/12 mx-auto container pt-2  lg:pt-4 pb-4"}>
                        <div className={"w-full flex justify-between"}>
                            <div className={"lg:w-6/12 mt-3 mb-auto lg:mb-0 lg:mt-0"}>
                                <div className={"w-full lg:w-5/12 h-full my-auto "}>
                                    <div className={"h-10 lg:h-10 "}>
                                        <img alt="Logo" className={"h-full object-cover"} src={"/assets/img/hor-icon.svg"}/>
                                    </div>
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

export const NavbarNewPanelComponent = () => {
    return (
        <div className={"container flex gap-2 me-auto "}>
            <nav className="sticky  top-4 px-5 z-40 shadow-gray-300 hover:text-white text-gray-700 dark:text-white flex flex-row items-center w-3/12 ms-auto justify-between rounded-xl bg-white/90 cursor-pointer hover:bg-red-500 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
                <div className={"flex gap-2"}>
                    <MdArrowBack className="text-2xl " />
                    <h2 className="ml-2  ">Kembali</h2>
                </div>
            </nav>
            <nav className="sticky top-4 px-5 z-40 shadow-gray-300 flex flex-row items-center w-9/12 ms-auto justify-between rounded-xl bg-white/90 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
                <div className="flex items-center">
                    <div className="text-gray-600 font-semibold  dark:text-white"> {/* Ubah ke warna yang jelas */}
                        <a href="/dashboard" className="hover:underline">
                            Pages
                        </a>
                        <span className="text-black dark:text-gray-300"> / Add</span> {/* Ubah ke warna yang jelas */}
                    </div>
                </div>
                <div className="flex items-center">
                    {/* Profile & Dropdown */}
                    <Dropdown
                        button={
                            <img
                                className="h-12 w-12 cursor-pointer rounded-full"
                                src="/assets/img/logo.svg"
                                alt="Profile"
                            />
                        }
                        children={
                            <div className="flex w-56 flex-col rounded-[20px] bg-white shadow-xl dark:bg-navy-700 dark:text-white">
                                <div className="p-4">
                                    <p className="text-sm font-bold text-black dark:text-white">
                                        👋 Hey, Adela
                                    </p>
                                </div>
                                <div className="h-px w-full bg-gray-200 dark:bg-white/20" />
                                <div className="flex flex-col p-4">
                                    <a
                                        href="#profile-settings"
                                        className="text-sm text-black dark:text-white hover:underline"
                                    >
                                        Profile Settings
                                    </a>
                                    <a
                                        href="#newsletter-settings"
                                        className="mt-3 text-sm text-black dark:text-white hover:underline"
                                    >
                                        Newsletter Settings
                                    </a>
                                    <a
                                        href="#logout"
                                        className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out"
                                    >
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        }
                        classNames="py-2 top-8 -left-[180px] w-max"
                    />
                </div>
            </nav>
        </div>
    );
};

export const NavbarPanelComponent = ({text, direct}) => {
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4 mt-16">
            <div className="justify-between flex items-center">
                <div className="text-gray-500">
                    <span>Pages</span>
                    <span className="text-gray-600"> / {direct}</span>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="https://dummyimage.com/300" alt="" className="w-12 h-12 rounded-3xl shadow-md object-cover" />
                    <span className="text-gray-600 font-medium">Andrian</span>
                    <CaretDown  size={19}/>
                </div>
            </div>

            <h1 className="text-gray-500 font-bold">{text}</h1>
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
                    <p className={"font-semibold lg:text-md text-xl text-white  "}>{name}</p>
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