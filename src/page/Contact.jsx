// import { Promo3Component } from "../component/Promo.Component";


function Contact() {
    return (
        <>
            <section>
                <div className="relative w-full h-96">
                    <img className="absolute h-full w-full object-cover object-center"
                        src={"/assets/img/bus/banner-bus.jpg"}
                        alt="Banner of a bus" />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative flex flex-col pt-28 text-center justify-center items-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            Contact Information
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70 w-full lg:w-1/2">
                            Terimakasih telah mengunjungi website kami jika anda memerlukan informasi lain atau mempunyai pertanyaan atau komentar, silakan hubungi kami menggunakan contact kami di bawah ini. Kami menghargai pertanyaan anda dan berharap dapat membantu anda.
                        </p>
                    </div>

                </div>
                <div className="-mt-16 mb-8 px-8 ">
                    <div className="container mx-auto">
                        <div
                            className="py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                            <div className="my-8 grid gap-6 px-4">
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-6">
                                        <path fill-rule="evenodd"
                                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">{process.env.LOCATION}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-6">
                                        <path fill-rule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">+{process.env.REACT_APP_PHONE_NUMBER}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-6">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">{process.env.REACT_APP_EMAIL}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact