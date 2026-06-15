import { CiMoneyCheck1 } from "react-icons/ci";
import doctors from "../../public/doctor.json"
import React from 'react';
import { IoBagAddSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const topDoctors = [...doctors]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);


const TopRatedDoctor = () => {
    return (
    <div className="p-10 bg-amber-100/50">
                <p className="text-xl font-medium text-center md:text-3xl pb-5">Top Rated 3 Doctors</p>

              <div className="grid md:grid-cols-3 gap-6 ">
     {topDoctors.map((doctor) => (
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

export default TopRatedDoctor;