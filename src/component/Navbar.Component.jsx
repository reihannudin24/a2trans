import {Link} from "react-router-dom";
import {useState} from "react";

const navbar = [
    {
        "name" : "Home",
        "url" : "/",
    },
    {
        "name" : "Penyewaan",
        "url" : "/",
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
            <nav className={"fixed top-0 z-50 w-full "}>
                <div className={"bg-primary w-full"}>
                    <header className={"w-11/12 mx-auto  py-4"}>
                        <div className={"w-full flex justify-between"}>
                            <div className={"lg:w-6/12 mt-3 mb-auto lg:mb-0 lg:mt-1"}>
                                <div className={"w-full lg:w-5/12 h-full my-auto"}>
                                    <Logo />
                                </div>
                            </div>
                            <div className={"lg:w-6/12"}>
                                <div className={"w-10/12 lg:block hidden ms-auto"}>
                                    <ul className={"flex gap-10"}>
                                        {navbar.map((item, index) => {
                                            return(
                                                <li key={index} className={""}>
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

const Logo = () => {
    return(
        <>
            <div className={"hidden lg:block h-img my-auto"}>
                <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} alt={"logo"}/>
            </div>
            <div className={"block lg:hidden h-img-2 my-auto"}>
                <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} alt={"logo"}/>
            </div>
        </>
    )
}

const Menu = ({toggleMenu , isOpen}) => {
    return(
        <button
            onClick={toggleMenu}
            className={"cursor-pointer text-white hover:text-white  py-1 px-2 rounded-md "}
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
            <div className={"cursor-pointer mx-auto  text-white hover:text-white py-1 px-2 rounded-md hover:bg-white hover:bg-opacity-40"}>
                <Link to={`${url}`}>
                    <p className={"text-md lg:text-sm text-white "}>{name}</p>
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