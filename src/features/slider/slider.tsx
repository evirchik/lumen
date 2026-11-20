"use client";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMAGES } from "@/root/constants/images";
import Image from "next/image";

export const Slider = () => {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative w-full "
    >
      <div className="w-full h-25 bg-background absolute top-0 -translate-y-1/2 rounded-[50%] z-20" />
      <div className="w-full h-25 bg-background absolute bottom-0 translate-y-1/2 rounded-[50%] z-20" />

      <Swiper
        slidesPerView={1.5}
        centeredSlides
        loop
        breakpoints={{
          645: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
        spaceBetween={20}
        className="w-full!"
      >
        {IMAGES.map(({ image, name }, index) => (
          <SwiperSlide key={index}>
            <div className="h-[50dvh] w-full relative flex justify-center items-center group/slide cursor-pointer ">
              <Image
                src={image}
                alt={name}
                fill
                className="grayscale group-hover/slide:grayscale-0 duration-500"
              />
              <span className="text-[40px] z-10 text-background group-hover/slide:opacity-100 opacity-0 duration-500">
                {name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
