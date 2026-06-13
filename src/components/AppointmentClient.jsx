"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoBagAddSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const AppointmentClient = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="bg-linear-to-br from-sky-100/90 via-emerald-50/70 to-green-50/40">

      <div className="text-center py-10">
        <h2 className="text-3xl md:text-5xl font-bold">Find Doctors</h2>
        <p className="text-xl md:text-4xl font-medium">
          Find and book appointments with top-rated medical specialists across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-10">

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border p-4 rounded-lg bg-white shadow space-y-5"
          >

            <div className="h-48 flex justify-center items-center">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={300}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>

            <hr />

            <div className="flex justify-between">
              <p className="text-[#0059BB] text-xl font-medium">
                {doctor.specialty}
              </p>

              <p className="flex font-medium gap-1 items-center">
                <FaStar className="text-[#67f3de]" />
                {doctor.rating}
              </p>
            </div>

            <h2 className="text-2xl font-bold">{doctor.name}</h2>

            <p className="text-[#414754] text-xl flex gap-1 font-semibold">
              <IoBagAddSharp size={24} />
              Experience: {doctor.experience}
            </p>

            <p className="text-[#414754] text-xl flex gap-1 font-semibold">
              <CiMoneyCheck1 size={24} />
              Fee: ${doctor.fee}
            </p>

            <div className="text-center mt-6">
              <Link
                href={`/appoint/${doctor.id}`}
                className="p-3 inline-block font-medium bg-[#0059BB] text-white rounded-xl"
              >
                View Details
              </Link>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AppointmentClient;