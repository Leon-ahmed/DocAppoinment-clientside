"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      {doctors.map((doctor, index) => (
        <div key={index}>
          <h2>{doctor.name}</h2>
          <p>{doctor.specialty}</p>

        <div className="w-75 h-50 relative overflow-hidden rounded-lg">
  <Image
    src={doctor.image}
    alt={doctor.name}
    fill
    className="object-cover"
  />
</div>
         
        </div>
      ))}
    </div>
  );
}