import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {CaretDown} from "@phosphor-icons/react";
import React from "react";
// import { FiAlignJustify } from "react-icons/fi";
// import { FiSearch } from "react-icons/fi";
// import avatar from "assets/img/avatars/avatar4.png";
import Dropdown from "./Dropdown.Component";
import {MdArrowBack} from "react-icons/md";
import SidebarComponent from "./Sidebar.Component";
import {confirmDelete, textPopUp} from "../function/swal";
import apiAuth from "../function/axiosAuth";

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
            <nav className={"fixed overflow-x-hidden top-0 z-30 w-full mx-auto "} style={{minWidth:"300px"}}>
                <div className={"bg-primary-new-nav py-1 w-full"}>
                    <header className={"w-11/12 mx-auto  pt-2  lg:pt-4 pb-4"} style={{maxWidth:"1500px"}}>
                        <div className={"w-full flex justify-between"}>
                            <div className={"lg:w-4/12 xl:w-6/12 mt-3 mb-auto lg:mb-0 lg:mt-0"}>
                                <div className={"w-full lg:w-7/12 xl:w-5/12 h-full my-auto "}>
                                    <div className={"h-9 lg:h-10 "}>
                                        <img alt="Logo" className={"h-full object-cover"} src={"/assets/img/hor-icon.svg"}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"lg:w-8/12 xl:w-6/12 my-auto"}>
                                <div className={"w-10/12 xl:w-11/12 my-auto lg:block hidden mx-auto"}>
                                    <ul className={"flex my-auto lg:gap-6 xl:gap-15"}>
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

export const NavbarNewPanelComponent = ({currentPath}) => {

    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1);
    }

    
    const handleLogout = async (e) => {
        if (e) e.preventDefault();
        try{
            const result = await confirmDelete('Are you sure?', 'Apakah kamu ingin login');
            if (result.confirmed){
                localStorage.removeItem('token');
                localStorage.removeItem('isAuth');
                textPopUp("Success", `Berhasil Logout`, "success");
                navigate('/login');
            }
        }catch (err){
            console.error(err);
            textPopUp("Error", `${err?.response?.data?.message || err.message}`, "error");
        }
    }

    return (
        <div className={"w-full  flex gap-2 mx-auto"}>
            <nav className="sticky lg:hidden mx-auto top-4 px-4 md:px-5 z-40 shadow-gray-300 hover:text-white text-white flex flex-row items-center w-2/12 md:w-1/12 me-auto md:me-0  ms-auto justify-between rounded-xl bg-red-500 cursor-pointer hover:bg-red-500 p-2 backdrop-blur-xl">
                <SidebarComponent />
            </nav>
            <nav className="sticky  top-4  z-30 shadow-gray-300 hover:text-white text-white flex flex-row items-center w-2/12 md:w-3/12 xl:w-2/12 me-auto md:me-0   ms-auto justify-between">
                <button onClick={onBack} className={"w-full px-4 md:px-5 rounded-xl h-full bg-red-500 cursor-pointer hover:bg-red-600 p-2 backdrop-blur-xl"}>
                    <div className={"flex gap-2 lg:gap-0"}>
                        <MdArrowBack  size={30}  className="text-2xl mx-auto lg:mx-2  font-semibold " />
                        <h2 className="ml-2 lg:ml-0  my-auto hidden font-semibold md:block">Kembali</h2>
                    </div>
                </button>
            </nav>
            <nav className="sticky top-4 px-5 z-30  shadow-gray-300 flex flex-row items-center w-9/12 md:w-10/12 lg:w-10/12 me-auto md:me-0 ms-auto justify-between rounded-xl bg-red-500 p-2 backdrop-blur-xl">
                <div className="flex items-center">
                    <div className="font-semibold  text-white"> 
                        <a href={`${currentPath}`} className="hover:underline">
                            {currentPath}
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <Dropdown
                        button={
                            <img
                                className="w-10 h-10 md:h-12 md:w-12 cursor-pointer rounded-full"
                                src="/assets/img/logo.svg"
                                alt="Profile"
                            />
                        }
                        children={
                            <div className="flex w-56 flex-col rounded-[20px] bg-white shadow-xl dark:bg-navy-700 dark:text-white">
                                <div className="p-4">
                                    <p className="text-sm font-bold text-black">
                                        👋 Hey, A2Trans
                                    </p>
                                </div>
                                <div className="h-px w-full bg-gray-200 dark:bg-white/20" />
                                <div className="flex flex-col px-4 pb-4">
                                    <button onClick={(e) => handleLogout(e)}
                                        className="mt-3 text-left text-sm py-2 font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out"
                                    >
                                        Log Out
                                    </button>
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
        <div className={"w-5/12 mx-auto py-4 lg:py-0 lg:w-full"}>
            <div className={"cursor-pointer text-15 lg:text-12 xl:text-15  mx-auto text-white hover:text-white hover:scale-105 xl:hover:scale-110 transition-transform duration-200 py-1 md:px-2 rounded-md hover:bg-white hover:bg-opacity-40"}>
                <Link to={`${url}`}>
                    <p className={"font-medium xl:text-md text-lg lg:text-md hover:text-md text-white "}>{name}</p>
                </Link>
            </div>
        </div>

    )
}

const MenuOpen = ({navbar}) => {
    return(
        <div className={"bg-primary-menu-nav h-screen py-4 menu-container"}>
            <div>
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

// const MenuOpen = ({navbar}) => {
//     return(
//         <div className={"bg-primary py-4 "}>
//             <div className={""}>
//                 <ul className={"block gap-10 text-center"}>
//                     {navbar.map((item, index) => {
//                         return (
//                             <li key={index} className={"my-10"}>
//                                 <ListNavbar name={item?.name} url={item?.url} id={index}/>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>
//     )
// }