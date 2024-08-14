import { Bus, Van, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react"

export const CarousselComponent = () => {

  return (
    <>
      <section className="relative h-60 lg:h-full">
        <div>
          <img src="/assets/img/bus/banner-bus.jpg" alt="" className="absolute  inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex container h-60  lg:h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 relative z-1 justify-items-center">
          <div data-aos="fade-right" className="place-self-end m hidden xl:block">
            <h1 className="max-w-5xl text-white  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white drop-shadow-xl typing-animation">
              Yuk, cari tiket bus dan travel terbaik untuk kebutuhanmu.
            </h1>
          </div>
           {/*DASKTOP UI*/}
          <CardBannerDes />
        </div>
        {/* MOBILE UI */}
        <CardBannerMobile />
      </section>
    </>
  );
}


const PopupDes = ({ toggle, onSelect }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 shadow-md rounded-md sm:w-1/3">
        <h3 className="text-md sm:text-lg font-bold mb-2">Pilih tipe kendaraan</h3>
        <ul>
          {/* Nnti bikin jadi type bus */}
          <li className="cursor-pointer hover:bg-gray-100 p-2" onClick={() => onSelect("Jakarta")}>Jakarta</li>
          <li className="cursor-pointer hover:bg-gray-100 p-2" onClick={() => onSelect("Surabaya")}>Surabaya</li>
          <li className="cursor-pointer hover:bg-gray-100 p-2" onClick={() => onSelect("Bandung")}>Bandung</li>
        </ul>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={toggle}>Tutup</button>
      </div>
    </div>
  )
}



const CardBannerDes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Pilih Tipe Kendaraan");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    togglePopup();
  };

  return (
    <div data-aos="fade-right" className="place-self-end ml-96 absolute right-6 top-64 hidden xl:block w-1/3 mb-10">
      <div className={"w-10/12 mx-auto"}>
        <div className="rounded-xl bg-white px-4 pb-4 pt-2">
          <div className="bg-gray-300 p-2 rounded-xl my-2">
            <div className="flex items-center  hover:scale-105 transition-transform duration-200  gap-4 border-b border-gray-400 mx-4 py-3 cursor-pointer" onClick={togglePopup}>
              <span><Bus size={32} color="gray" /></span>
              <span className="text-gray-500 font-semibold  text-md">{selectedLocation}</span>
            </div>
            <div className="flex items-center gap-4 mx-4 py-2">
              <span className="text-gray-500 text-sm">Sesuaikan dengan kebutuhan anda</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="py-3 px-5 bg-blue-600 bg-primary text-white text-md rounded-md w-full">Cari Bus Dan Travel</button>
          </div>


          {showPopup && (
              <PopupDes toggle={togglePopup} onSelect={handleLocationSelect} />
          )}
        </div>
      </div>
    </div>
  )
}


const CardBannerMobile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Pilih lokasi keberangkatan");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    togglePopup();
  };

  return (
    <div className="rounded-xl absolute w-full top-52 bg-white p-6 rounded-t-2xl block xl:hidden place-self-end">
      <div className="bg-gray-300 p-2 rounded-xl my-4">
        <div className="flex items-center gap-4 border-b border-gray-400 mx-4 py-3" onClick={togglePopup}>
          <span><Bus size={32} color="gray" /></span><span className="text-gray-500">{selectedLocation}</span>
        </div>
        <div className="flex items-center gap-4 mx-4 py-3">
          <span><Van size={32} color="gray" /></span><span className="text-gray-500">Mau ke mana?</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="p-3 xl:p-5 bg-primary text-white text-xl rounded-xl w-full">Cari Bus Dan Travel</button>
      </div>

      {showPopup && (
        <PopupDes toggle={togglePopup} onSelect={handleLocationSelect} />
      )}

    </div>
  )
}

export const CarousselGalleryComponent = ({ data }) => {

  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const updateButtonVisibility = () => {
    const { current } = scrollRef;
    if (current) {
      setShowLeftButton(current.scrollLeft > 0);
      setShowRightButton(current.scrollLeft < (current.scrollWidth - current.clientWidth));
    }
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener('scroll', updateButtonVisibility);
      return () => current.removeEventListener('scroll', updateButtonVisibility);
    }
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-4">
      <h1 className="font-bold text-2xl my-4">Gallery Kendaraan</h1>
      <div className="relative">
        <div className="overflow-x-auto mx-4" ref={scrollRef}>
          <div className="flex gap-6 pb-4">

            {/* Mapping Gallery Image */}
            {data.map(res => {
              return (<img alt="Img" className="w-96 flex-shrink-0 object-cover radius-card-img hover:scale-105" src={res} />)
            })}

          </div>
        </div>
        {showLeftButton && (
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
            <CaretLeft size={24} />
          </button>
        )}
        {showRightButton && (
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
            <CaretRight size={24} />
          </button>
        )}
      </div>
    </div>
  )
}