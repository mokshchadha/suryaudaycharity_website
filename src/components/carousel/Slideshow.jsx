import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Gallery";
import ImageCard from "./ImageCard";

import { Autoplay, Pagination, Navigation } from "swiper";
import { SLIDESHOW } from "./imageData";

export default function App() {
  return (
    <div id={"slideshow"}>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SLIDESHOW.map((i) => (
          <SwiperSlide>
            <ImageCard src={i.src} alt={i.alt} classN={"slide_card"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
