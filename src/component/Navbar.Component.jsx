import {Link} from "react-router-dom";

export const NavbarComponent = () => {

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

    return(
        <>
            <nav className={"fixed top-0  w-full "}>
                <div className={"bg-primary w-full"}>
                    <header className={"w-11/12 mx-auto  py-4"}>
                        <div className={"w-full flex justify-between"}>
                            <div className={"w-6/12 mt-1"}>
                                <div className={"w-5/12 h-full my-auto"}>
                                    <div className={"h-img my-auto"}>
                                        <img className={"w-full my-auto h-full object-fit"} src={"/assets/img/logo.svg"} />
                                    </div>
                                </div>
                            </div>
                            <div className={"w-6/12"}>
                                <div className={"w-10/12 ms-auto"}>
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
                            </div>
                        </div>
                    </header>
                </div>
            </nav>

        </>
    )
}

const ListNavbar = ({url, name}) => {
    return(
            <div className={"cursor-pointer text-white hover:text-white py-1 px-2 rounded-md hover:bg-white hover:bg-opacity-40"}>
                <Link to={`${url}`}>
                    <p className={" text-sm text-white "}>{name}</p>
                </Link>
            </div>
    )
}