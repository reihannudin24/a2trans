import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useEffect, useMemo } from 'react';

export default function CalendarComponent() {

    // DATA DATE
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState(0);

    // DATA ROW
    const [rows, setRows] = useState([]);
    const [rowsMobile, setRowsMobile] = useState([]);



    const checkDaysInMonth = useMemo(() => (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return { month: monthNames[month], year, lastDay };
    }, []);

    function getDayOfWeek(dateString) {
        const [day, month, year] = dateString.split('-');
        const months = {
            "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
            "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
        };

        const date = new Date(year, months[month], day);
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return daysOfWeek[date.getDay()];
    }

    useEffect(() => {
        const { lastDay } = checkDaysInMonth(currentDate);
        setDaysInMonth(lastDay);
    }, [currentDate, checkDaysInMonth]);


    const { month, year } = useMemo(() => checkDaysInMonth(currentDate), [currentDate, checkDaysInMonth]);

    // INI CONTOH
    // Note : nnti ini simpen di usestate
    const DummyData = [
        {
            tanggal: "1-August-2024",
            text: "Hallo"
        },
        {
            tanggal: "15-August-2024",
            text: "Meeting"
        },
        {
            tanggal: "28-August-2024",
            text: "Vacation"
        }
    ]

    useEffect(() => {
        // MOBILE
        const tempRowsMobile = Array.from({ length: daysInMonth }, (_, i) => {
            const currentDate = `${i + 1}-${month}-${year}`;
            const eventData = DummyData.find(data => data.tanggal === currentDate);
            return {
                tanggal: i + 1,
                hari: getDayOfWeek(currentDate),
                text: eventData ? eventData.text : undefined
            };
        });

        // DESKTOP
        const tempRows = [];
        for (let i = 0; i < daysInMonth; i += 7) {
            const weekDays = Array.from({ length: 7 }, (_, j) => {
                const day = i + j + 1;
                if (day <= daysInMonth) {
                    const currentDate = `${day}-${month}-${year}`;
                    const eventData = DummyData.find(data => data.tanggal === currentDate);
                    return eventData ? { day, text: eventData.text } : { day };
                }
                return null;
            }).filter(Boolean);
            tempRows.push(weekDays);
        }

        setRows(tempRows);
        setRowsMobile(tempRowsMobile);
    }, [daysInMonth, month, year]);


    // HANDLE PREV DAN NEXT MONTH
    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };


    return (
        <div className="mx-4">
            <h1 className="font-bold text-2xl my-4">Calendar Kendaraan</h1>
            <div className="mt-10 mx-4">
                <div className="wrapper bg-white rounded shadow w-full">
                    <div className="header flex justify-between border-b p-2">
                        <span className="text-lg font-bold">
                            {month} {year}
                        </span>
                        <div>
                            <button onClick={handlePrevMonth}><CaretLeft size={30} /></button>
                            <button onClick={handleNextMonth}><CaretRight size={30} /></button>
                        </div>
                    </div>

                    {/* DASKTOP */}
                    <table className="w-full hidden lg:table">
                        <thead>
                            <tr>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Sun</th>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Mon</th>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Tue</th>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Wed</th>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Thu</th>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Fri</th>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Sat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="text-center h-20">
                                    {row.map((day, index) => (
                                        <td
                                            key={index}
                                            className={`border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300`}
                                        >
                                            <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                                                <div className="top h-5 w-full">
                                                    <span className="text-gray-500">{day.day}</span>
                                                </div>
                                                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                                    {day?.text && (<div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                                                        <span className="event-name">
                                                            {day.text}
                                                        </span>
                                                    </div>)}
                                                </div>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    {/* MOBILE UI */}
                    <div className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2 md:mx-12 lg:hidden'>

                        {rowsMobile.map((res, index) => {
                            return (
                                <div key={index} class={`flex group ${res?.text ? "bg-red-500" : "bg-green-500"} shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16`}>
                                    <div class='flex items-center px-4 py-4'>
                                        <div class='text-center'>
                                            <p class='text-gray-100 text-sm'> {res.hari}</p>
                                            <p class='text-gray-100  mt-3 font-bold'> {res.tanggal} </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
        </div>
    );
}
