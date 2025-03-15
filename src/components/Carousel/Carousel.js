/*
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AlbumCard from "../Cards/AlbumCard"; // Ensure correct path

function Carousel({ albums }) {
  return (
    <Swiper
      spaceBetween={10} // Space between slides
      slidesPerView={1} // Adjust number of slides per view based on screen size
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <AlbumCard album={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
*/
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper styles
import AlbumCard from "../Cards/AlbumCard"; // Import AlbumCard
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg"; // Import Left Arrow
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg"; // Import Right Arrow
import styles from "./Carousel.module.css";

function Carousel({ albums }) {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <LeftArrow className={styles.arrow} />
      </div>
      <div className="swiper-button-next">
        <RightArrow className={styles.arrow} />
      </div>
    </div>
  );
}

export default Carousel;
