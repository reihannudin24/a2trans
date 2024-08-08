import { Bus, Van } from "@phosphor-icons/react";
function Caroussel() {
  return (
    <>
      <section className="relative h-60 lg:h-full">
        <img src="https://dummyimage.com/600x400/000/fff" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="flex container h-60 lg:h-[800px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 relative z-1 justify-items-center">
          <div data-aos="fade-right" className="place-self-end lg:col-span-7 hidden xl:block">
            <h1 className="max-w-2xl mb-10 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white drop-shadow-xl">
              Yuk, cari tiket bus dan travel terbaik untuk kebutuhanmu.
            </h1>
          </div>

          {/* DASKTOP UI */}
          <div data-aos="fade-right" className="place-self-end ml-96 lg:col-span-7 hidden xl:block w-1/3 mb-10">
            <div className="rounded-xl bg-white p-6">
              <div className="bg-gray-300 p-2 rounded-xl my-4">
                <div className="flex items-center gap-4 border-b border-gray-400 mx-4 py-3">
                  <span><Bus size={32} color="gray" /></span><span className="text-gray-500">Pilih lokasi keberangkatan</span>
                </div>
                <div className="flex items-center gap-4 mx-4 py-3">
                  <span><Van size={32} color="gray" /></span><span className="text-gray-500">Mau ke mana?</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="p-5 bg-blue-600 bg-primary text-white text-xl rounded-xl w-full">Cari Bus Dan Travel</button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE UI */}
        <div className="rounded-xl absolute w-full top-52 bg-white p-6 rounded-t-2xl block xl:hidden place-self-end">
          <div className="bg-gray-300 p-2 rounded-xl my-4">
            <div className="flex items-center gap-4 border-b border-gray-400 mx-4 py-3">
              <span><Bus size={32} color="gray" /></span><span className="text-gray-500">Pilih lokasi keberangkatan</span>
            </div>
            <div className="flex items-center gap-4 mx-4 py-3">
              <span><Van size={32} color="gray" /></span><span className="text-gray-500">Mau ke mana?</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="p-3 xl:p-5 bg-primary text-white text-xl rounded-xl w-full">Cari Bus Dan Travel</button>
          </div>
        </div>

      </section>
    </>
  );
}

export default Caroussel;
