"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import b1 from "../../public/assets/banner1.png"
import b2 from "../../public/assets/b.png"
import b3 from "../../public/assets/screen.png"
import "swiper/css";
import "swiper/css/pagination";
 
export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-[70vh] md:h-screen"
    >
      
      <SwiperSlide>
        <div className="w-full h-full flex flex-col-reverse md:flex-row gap-5  md:gap-20  items-center justify-center bg-linear-to-r from-emerald-200/80 via-white to-sky-200 text-white px-6">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-5xl text-[#0059BB] font-bold">
              Book Your Doctor Appointment Easily
            </h1>
            <p className="mt-4 mb-5 text-black text-lg">
              Find trusted doctors and schedule appointments in just a few clicks.
            </p>
             
          </div>
             <div>
            <Image src={b1} alt="image" loading="eager"
              className="rounded-2xl h-auto w-auto"
              height={1150}
              width={950}

            ></Image>
          </div>
        </div>
      </SwiperSlide>

 
      <SwiperSlide>
        <div className="w-full h-full flex flex-col-reverse md:flex-row gap-5  md:gap-20 items-center justify-center bg-linear-to-r from-sky-50/90 via-sky-100 to-sky-100/50 text-white px-6">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl text-[#0059BB] md:text-5xl font-bold">
              Trusted & Verified Doctors
            </h1>
            <p className="mt-4 text-black text-lg">
              All doctors are verified professionals with years of experience.
            </p>
        
          </div>
          <div>
            <Image src={b2} alt="image"
              className="rounded-2xl h-auto w-auto"
              height={1150}
              width={950}
            ></Image>
          </div>
        </div>
      </SwiperSlide>

     
      <SwiperSlide>
        <div className="w-full h-full flex flex-col-reverse md:flex-row gap-5  md:gap-20   items-center justify-center bg-linear-to-br from-sky-100/90 via-emerald-50/70 to-green-50/40 text-white px-6">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-5xl text-[#0059BB] font-bold">
              Emergency Support Available
            </h1>
            <p className="mt-4 text-black text-lg">
              Get quick access to doctors for urgent medical needs.
            </p>
           
          </div>

             <div>
            <Image src={b3} alt="image"
              className="rounded-2xl h-auto w-auto"
              height={1150}
              width={950}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}