"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHospital, FaStar, FaCalendarCheck } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoBagAddSharp } from "react-icons/io5";
import { BsMortarboardFill } from "react-icons/bs";
import { Button } from "@heroui/react";
import Bookingmodal from "../components/Bookingmodal";

export default function DoctorClient({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-linear-to-r from-emerald-100/80 via-gray-100 to-sky-200 p-4 sm:p-6 lg:p-10">
      <div className="flex flex-col md:flex-row gap-5 bg-white p-5 sm:p-8 lg:p-10 shadow rounded-xl items-center md:items-start">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src={data.image}
            alt={data.name}
            width={200}
            height={300}
            className="rounded-2xl w-35 sm:w-45 md:w-50 h-auto"
          />
        </div>

        <div className="font-medium space-y-2 text-center md:text-left">
          <p className="bg-[#0059BB] text-white px-2 py-1 text-xs sm:text-sm inline rounded-2xl">
            {data.specialty}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold">
            {data.name}
          </h2>

          <p className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            <FaHospital className="text-[#0059BB]" />
            {data.hospital}
          </p>

          <p className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            <FaStar className="text-[#0059BB]" />
            {data.rating}
          </p>

          <p className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            <FiMapPin />
            {data.location}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
        <div className="col-span-2 space-y-4">
          <div className="bg-white p-5 rounded-xl">
            <p className="text-[#0059BB] font-medium mb-2">
              About {data.name}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl">
              <div className="flex gap-3 items-center">
                <div className="bg-[#E6EEFF] rounded-full flex justify-center items-center h-10 w-10">
                  <IoBagAddSharp />
                </div>

                <div>
                  <p className="text-[#414754] text-sm">
                    EXPERIENCE
                  </p>
                  <p className="font-bold text-lg">
                    {data.experience}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl">
              <div className="flex gap-3 items-center">
                <div className="bg-[#E6EEFF] rounded-full flex justify-center items-center h-10 w-10">
                  <BsMortarboardFill />
                </div>

                <div>
                  <p className="text-[#414754] text-sm">
                    EDUCATION
                  </p>
                  <p className="font-bold text-lg">
                    {data.education}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border border-gray-100 p-5 rounded-xl space-y-5">
          <div>
            <p className="text-sm text-gray-500">
              Consultation Fee
            </p>
            <p className="text-xl font-bold">
              {data.fee}$/session
            </p>
          </div>

          <div className="bg-[#EFF4FF] p-3 rounded-xl">
            <p className="font-medium mb-2">
              Availability Days
            </p>

            <div className="flex flex-wrap gap-2">
              {data.days.map((day) => (
                <span
                  key={day}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#EFF4FF] p-3 rounded-xl">
            <p className="font-medium mb-2">
              Available Time
            </p>

            <div className="flex flex-wrap gap-2">
              {data.availability.map((time) => (
                <span
                  key={time}
                  className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          <Button
            color="primary"
            onPress={() => setIsOpen(true)}
          >
            <FaCalendarCheck />
            Book Appointment
          </Button>

          <p className="text-center text-sm text-gray-500">
            Instant confirmation after payment
          </p>
        </div>
      </div>

      <Bookingmodal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        doctor={data}
      />
    </div>
  );
}