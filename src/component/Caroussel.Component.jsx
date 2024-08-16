import { Bus, Van, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react"

import { useNavigate } from "react-router-dom";

export const CarousselComponent = ({ categories }) => {
  return (
      <>
        <section className="relative h-full">
          <div className={"h-full"} style={{ maxHeight: "400px" }}>
            <img
                src="/assets/img/bus/banner-bus.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div
              className={
                "relative h-60 mx-auto justify-center items-center"
              }
              style={{
                minHeight: "600px",
                maxHeight: "800px",
                maxWidth: "1500px",
              }}
          >
            <div
                className={
                  "absolute md:w-10/12 w-11/12 mx-auto bottom-20 lg:bottom-10 left-0 right-0"
                }
            >
              <div className={"lg:flex lg:w-full block justify-between"}>
                <div className={"w-full lg:w-8/12"}>
                  <h1 className="text-white mb-5 lg:mt-20 text-3xl md:text-4xl font-extrabold tracking-tight leading-none xl:text-4xl dark:text-white drop-shadow-xl">
                    Yuk, cari tiket bus dan travel terbaik untuk kebutuhanmu.
                  </h1>
                </div>
                <div className={"w-full lg:w-4/12 ms-auto"}>
                  <div className={"absolute w-full -bottom-50 z-20 lg:relative"}>
                    <CardBannerDes categories={categories} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

const PopupDes = ({ toggle, onSelect, categories }) => {
  const navigate = useNavigate();

  const handleSelect = (categoryId) => {
    onSelect(categoryId);
    navigate(`/rent?categories_id=${categoryId}`);
  };

  return (
      <>
        <div
            onClick={toggle}
            className={"fixed bg-gray-700/50 top-0 bottom-0 left-0 right-0 z-50 h-screen w-full"}
        />
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 shadow-md rounded-md w-2/3 lg:w-1/3">
            <h3 className="text-md sm:text-lg font-bold mb-2">
              Pilih tipe kendaraan
            </h3>
            <ul>
              {categories?.map((item) => (
                  <li
                      key={item.id}
                      className="cursor-pointer hover:bg-gray-100 py-3 px-2"
                      onClick={() => handleSelect(item?.id)}
                  >
                    {item?.name}
                  </li>
              ))}
              <div className={"w-full mt-5"}>
                <button onClick={toggle} className={"bg-red-600 w-full text-sm text-white py-3 px-2 rounded-md"}>
                  Tutup
                </button>
              </div>
            </ul>
          </div>
        </div>
      </>
  );
};



const CardBannerDes = ({categories}) => {
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
    <div className=" ms-auto  block w-full mb-10">
      <div className={"w-full lg:w-11/12 xl:w-10/12 ms-auto "}>
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
              <PopupDes toggle={togglePopup} categories={categories} onSelect={handleLocationSelect} />
          )}
        </div>
      </div>
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
      <h1 className="font-bold text-xl py-5 my-4">Gallery Kendaraan</h1>
      <div className="relative">
        <div className="overflow-x-auto mx-4" ref={scrollRef}>
          <div className="flex gap-4 pb-4">

            {/* Mapping Gallery Image */}
            {data.map(res => {
              return (<img alt="Img" className="w-56 h-40 flex-shrink-0 object-cover radius-card-img hover:scale-105" src={res} />)
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