"use client";

import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { MdCalendarMonth, MdEmail } from "react-icons/md";
import Editmodal from "@/components/Editmodal";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function DashboardClient({ bookings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Deleted successfully");

        router.refresh();
      } else {
        toast.info("Nothing deleted");
      }
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-3">
      <p className="text-center pb-5 font-medium text-xl md:text-3xl">
        Upcoming Appointments
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="space-y-4 bg-white p-8 shadow rounded-2xl"
          >
            <div>
              <h3 className="text-xl font-medium">
                {booking.doctorName}
              </h3>

              <p className="text-[#0059BB] font-medium">
                {booking.doctorSpeciality}
              </p>
            </div>

            <hr />

            <div className="space-y-2">
              <p className="flex items-center text-xl gap-1">
                <IoPersonSharp />
                {booking.patientName}
              </p>

              <p className="flex items-center gap-1">
                <MdEmail />
                {booking.userEmail}
              </p>

              <p className="flex items-center gap-1">
                <MdCalendarMonth />
                {booking.appointmentDate}
              </p>

              <p className="flex items-center gap-1">
                <BsFillClockFill />
                {booking.appointmentTime}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedBooking(booking);
                  setIsOpen(true);
                }}
                className="p-2 bg-[#0059BB] text-white rounded-md transition-all hover:scale-105"
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(booking._id)}
                className="p-2 bg-red-500 text-white rounded-md transition-all hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Editmodal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        booking={selectedBooking}
      />
    </div>
  );
}