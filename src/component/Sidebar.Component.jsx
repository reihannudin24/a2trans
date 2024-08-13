import { Bus, List, MonitorPlay } from "@phosphor-icons/react"
import { useState, useRef, useEffect } from "react"

export default function SidebarComponent() {
    const [sidebar, setSidebar] = useState(false)
    const [showSidebar, setShowSidebar] = useState(true)
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
                className={`fixed top-0 left-0 z-50 w-64 h-screen ${sidebar ? "" : "hidden"} lg:block bg-gray-50 shadow-xl transition-all ease-in duration-300`}
            >
                <div className="h-full px-6 pb-4 overflow-y-auto bg-color-abu2 ">
                    <ul className="space-y-2 font-medium pt-10 text-color-background text-sm">
                        <li>
                            <h1 className={"text-2xl text-gray-500 my-auto text-center mb-10"}>A2Trans</h1>
                        </li>
                        <li className="shadow-md rounded-md p-1">
                            <a href="/panel" className="cursor-pointer w-full flex items-center gap-4 p-2 hover:bg-color-biru rounded-lg text-gray-500">
                                <Bus size={44} className="p-2.5 bg-purple-500 rounded-lg text-white shadow-md" />
                                <div>List Bus</div>
                            </a>
                        </li>
                        <li className="shadow-md rounded-md p-1">
                            <a href="/panel/add" className="cursor-pointer w-full flex items-center gap-4 p-2 hover:bg-color-biru rounded-lg text-gray-500">
                                <MonitorPlay size={44} className="p-2.5 bg-purple-500 rounded-lg text-white shadow-md" />
                                <div>Add Bus</div>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}
