export default function TableComponent() {
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full max-w-full  mb-6  mx-auto">
                    <div class="relative flex flex-col  min-w-0 shadow-md rounded-md bg-white m-5">
                        <div class="relative flex flex-col  border border-dashed bg-clip-border rounded-2xl">
                            <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 class="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span class="mr-3 font-semibold">List Bus</span>
                                </h3>
                                <div className="p-2 px-3 bg-green-500 rounded-lg text-white">Add</div>
                            </div>
                            <div class="px-9">
                                    <span class="font-medium mt-1">Semua data bus dari database</span>
                            </div>
                            <div class="flex-auto block py-8 pt-6 px-9">
                                <div class="overflow-x-auto">
                                    <table class="w-full my-0 ">
                                        <thead class="align-bottom">
                                            <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th class="pb-3 text-start min-w-[175px]">Bus</th>
                                                <th class="pb-3 text-end min-w-[175px]">Type</th>
                                                <th class="pb-3 text-end min-w-[175px]">PROGRESS</th>
                                                <th class="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
                                                <th class="pb-3 pr-12 text-end min-w-[175px]">DEADLINE</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {/* MAPPING */}
                                            <tr class="border-b">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <div class="mb-1 font-semibold transition-colors duration-200 ease-in-out"> Bus Amatron </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold">Bus Gede</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold">Bus Gede</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span class="font-semibold">Bus Gede</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <div className="flex gap-4 justify-end">
                                                        <button className="p-2 bg-red-500 rounded-md text-white">Delete</button>
                                                        <button className="p-2 bg-blue-500 rounded-md text-white">Edit</button>
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}