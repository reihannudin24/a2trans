import { Bus, List,  CaretRight, Plus } from "@phosphor-icons/react"
import { useState, useRef, useEffect } from "react"

export default function SidebarComponent() {
    const [sidebar, setSidebar] = useState(false)
    const [showSidebar, setShowSidebar] = useState(true)
    const [expandBusList, setExpandBusList] = useState(false)
    const [expandAddBus, setExpandAddBus] = useState(false)
    const sidebarRef = useRef(null)

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebar(false)
            setShowSidebar(true)
        }
    }

    const handleClickSidebar = (event) => {
        event.preventDefault()
        setSidebar(!sidebar)
        setShowSidebar(!showSidebar)
        setExpandBusList(false)
        setExpandAddBus(false)
    }

    const toggleBusList = () => {
        setExpandBusList(!expandBusList)
    }

    const toggleAddBus = () => {
        setExpandAddBus(!expandAddBus)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <nav className="top-0 z-50 w-full ease-out duration-300 absolute lg:hidden">
                <div className="right-0 relative">
                    {showSidebar && <button onClick={handleClickSidebar}><List size={44} className="text-color-putih right-0 m-2 p-2 bg-purple-500 rounded-md text-white" /></button>}
                </div>
            </nav>
            <aside
                ref={sidebarRef}
                className={`fixed bg-white top-0 left-0 z-50 w-64 h-screen ${sidebar ? "" : "hidden"} lg:block bg-gray-50 shadow-xl transition-all scrollbar-hide ease-in duration-300`}
            >
                <div className="h-full px-6 pb-4 scrollbar-hide overflow-y-auto bg-color-abu2 ">
                    <ul className="space-y-2 font-medium pt-10 scrollbar-hide text-color-background text-sm">
                        <li className={"mb-5"}>
                            <div className={"h-10 "}>
                                <img alt="Logo" className={"h-full object-cover"} src={"/assets/img/hor-icon.svg"}/>
                            </div>
                        </li>
                        <li className="shadow-md rounded-md p-1">
                            <button onClick={toggleBusList} className="cursor-pointer w-full flex items-center justify-between p-2 hover:bg-color-biru rounded-lg text-gray-500">
                                <div className="flex items-center gap-4">
                                    <Bus size={44} className="p-2.5 bg-red-500 hover:bg-red-600 cursor-ppinter rounded-lg text-white shadow-md" />
                                    <div className={"text-md font-semibold"}>
                                        <p>
                                            Daftar
                                        </p>
                                    </div>
                                </div>
                                <CaretRight size={20} className={`transition-transform duration-200 ${expandBusList ? 'rotate-90' : ''}`} />
                            </button>
                            {expandBusList && (
                                <ul className="w-full mt-2 space-y-2">
                                    <li>
                                        <a href="/panel/bus" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700 rounded-lg text-gray-500">Daftar Bus</a>
                                    </li>
                                    <li>
                                        <a href="/panel/category" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700  rounded-lg text-gray-500">Daftar Kategori</a>
                                    </li>
                                    <li>
                                        <a href="/panel/facilities" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700  rounded-lg text-gray-500">Daftar Fasilitas</a>
                                    </li>
                                    <li>
                                        <a href="/panel/brand" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700  rounded-lg text-gray-500">Daftar Merek</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="shadow-md rounded-md p-1">
                            <button onClick={toggleAddBus} className="cursor-pointer w-full flex items-center justify-between p-2 hover:bg-color-biru rounded-lg text-gray-500">
                                <div className="flex items-center gap-4">
                                    <Plus size={44} className="p-2.5 bg-red-500 hover:bg-red-600 cursor-ppinter rounded-lg text-white shadow-md" />
                                    <div>Add Bus</div>
                                </div>
                                <CaretRight size={20} className={`transition-transform duration-200 ${expandAddBus ? 'rotate-90' : ''}`} />
                            </button>
                            {expandAddBus && (
                                <ul className=" mt-2 space-y-2">
                                    <li>
                                        <a href="/panel/add/new/bus" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700 rounded-lg text-gray-500">Tambahkan Bus</a>
                                    </li>
                                    <li>
                                        <a href="/panel/add/new/category" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700  rounded-lg text-gray-500">Tambahkan Kategori</a>
                                    </li>
                                    <li>
                                        <a href="/panel/add/new/facilities" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700  rounded-lg text-gray-500">Tambahkan Fasilitas</a>
                                    </li>
                                    <li>
                                        <a href="/panel/add/new/brand" className="block py-3  px-2 hover:bg-red-50 hover:text-red-700  rounded-lg text-gray-500">Tambahkan Merek</a>
                                    </li>

                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
