import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'; // Correct import for Navigation in Swiper 11.x
import 'swiper/css'; // Import Swiper's CSS

import LeftArrow from "./LeftArrow"; // Custom Left Arrow component
import RightArrow from "./RightArrow"; // Custom Right Arrow component
import AlbumCard from "../Cards/AlbumCard"; // Import AlbumCard component

const Carousel = ({ albums }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Ensuring the navigation buttons are correctly set after the component mounts
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // You can initialize the Swiper with the buttons now
    }
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={20} // Space between each slide
        slidesPerView="auto" // Auto slides per view
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]} // Enable navigation module
        loop={false} // Disable loop
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 cards on small screens
          },
          768: {
            slidesPerView: 4, // 4 cards on medium screens
          },
          1024: {
            slidesPerView: 6, // 6 cards on larger screens
          },
        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard album={album} />
          </SwiperSlide>
        ))}

        {/* Custom Left Arrow Button */}
        <div className="swiper-button-prev" ref={prevRef}>
          <LeftArrow />
        </div>

        {/* Custom Right Arrow Button */}
        <div className="swiper-button-next" ref={nextRef}>
          <RightArrow />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
