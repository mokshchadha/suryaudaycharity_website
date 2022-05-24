import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./carousel.css";
import { GALLERY_IMAGES } from "./imageData";
import ImageCard from "./ImageCard";

export default function Carousel() {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  return (
    <div id="gallery">
      <h1 className="gallery__title">Gallery</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {GALLERY_IMAGES.map((i) => (
          <SwiperSlide>
            <ImageCard src={i.src} alt={i.alt} classN={"image_card"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
