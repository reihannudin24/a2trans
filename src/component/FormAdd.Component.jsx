export default function FormAddComponent() {
    return (
        <div className="lg:ml-80 ml-4 lg:mr-16 mr-4">
            <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full max-w-full  mb-6  mx-auto">
                    <div class="relative flex flex-col  min-w-0 shadow-md rounded-md bg-white m-5">
                        <div class="relative flex flex-col  border border-dashed bg-clip-border rounded-2xl">
                            <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
                                <h3 class="flex flex-col items-start justify-center ml-0 font-medium">
                                    <span class="mr-3 font-semibold">Add Data</span>
                                    <span class="font-medium mt-1">Menambah data kedalam database</span>
                                </h3>
                            </div>

                            <div class="py-8 pt-6 px-9">
                                <form>
                                    <div class="mb-5">
                                        <label for="name" class="mb-3 block text-base font-medium text-gray-600">
                                            Full Name
                                        </label>
                                        <input type="text" name="name" id="name" placeholder="Full Name"
                                            class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                    </div>
                                    <div class="mb-5">
                                        <label for="phone" class="mb-3 block text-base font-medium text-gray-600">
                                            Phone Number
                                        </label>
                                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                            class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                    </div>
                                    <div class="mb-5">
                                        <label for="email" class="mb-3 block text-base font-medium text-gray-600">
                                            Email Address
                                        </label>
                                        <input type="email" name="email" id="email" placeholder="Enter your email"
                                            class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                    </div>
                                    <div class="-mx-3 flex flex-wrap">
                                        <div class="w-full px-3 sm:w-1/2">
                                            <div class="mb-5">
                                                <label for="date" class="mb-3 block text-base font-medium text-gray-600">
                                                    Date
                                                </label>
                                                <input type="date" name="date" id="date"
                                                    class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                            </div>
                                        </div>
                                        <div class="w-full px-3 sm:w-1/2">
                                            <div class="mb-5">
                                                <label for="time" class="mb-3 block text-base font-medium text-gray-600">
                                                    Time
                                                </label>
                                                <input type="time" name="time" id="time"
                                                    class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-5 pt-3">
                                        <label class="mb-5 block text-base font-semibold text-gray-600 sm:text-xl">
                                            Address Details
                                        </label>
                                        <div class="-mx-3 flex flex-wrap">
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-5">
                                                    <input type="text" name="area" id="area" placeholder="Enter area"
                                                        class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-5">
                                                    <input type="text" name="city" id="city" placeholder="Enter city"
                                                        class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-5">
                                                    <input type="text" name="state" id="state" placeholder="Enter state"
                                                        class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-5">
                                                    <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                                        class="w-full rounded-md border border-white bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-blue-500 focus:shadow-md" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            class="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}