"use client";

import { useState } from "react";
import { Modal, Button, Input } from "@heroui/react";
 import { toast } from "react-toastify";
export default function BookingModal({
  isOpen,
  onOpenChange,
  doctor,
}) {
  const [formData, setFormData] = useState({
    userEmail: "user@gmail.com",
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

 const handleSubmit = async (close) => {
  const appointmentData = {
    userEmail: formData.userEmail,
    doctorName: doctor?.name,
    patientName: formData.patientName,
    gender: formData.gender,
    phone: formData.phone,
    appointmentDate: formData.appointmentDate,
    appointmentTime: formData.appointmentTime,
  };

  try {
    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    const data = await res.json();
    console.log("Saved:", data);

    if (data.acknowledged) {
  toast.success("Appointment booked successfully!");
  close();
} else {
  toast.error("Booking failed!");
}
  } catch (error) {
    console.error("Error saving appointment:", error);
  }
};

  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Container>
        <Modal.Dialog>
          {({ close }) => (
            <>
            
              <Modal.Header>
                <Modal.Heading>
                  Book Appointment with {doctor?.name}
                </Modal.Heading>
              </Modal.Header>

           
              <Modal.Body>
                <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">

               
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Doctor Name
                    </p>
                    <Input value={doctor?.name} readOnly />
                  </div>

               
                  <div>
                    <p className="text-sm font-medium mb-1">
                      User Email
                    </p>
                   <Input
                      value={formData.userEmail}
                      onChange={(e) =>
                        handleChange(
                          "userEmail",
                          e.target.value
                        )
                      }
                      placeholder="Enter your email"
                    />
                  </div>

                  
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Patient Name
                    </p>
                    <Input
                      value={formData.patientName}
                      onChange={(e) =>
                        handleChange(
                          "patientName",
                          e.target.value
                        )
                      }
                      placeholder="Enter patient name"
                    />
                  </div>

                 
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Gender
                    </p>
                    <Input
                      value={formData.gender}
                      onChange={(e) =>
                        handleChange("gender", e.target.value)
                      }
                      placeholder="Male / Female / Other"
                    />
                  </div>

             
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Phone Number
                    </p>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        handleChange("phone", e.target.value)
                      }
                      placeholder="01XXXXXXXXX"
                    />
                  </div>

             
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Appointment Date
                    </p>
                    <Input
                      type="date"
                      value={formData.appointmentDate}
                      onChange={(e) =>
                        handleChange(
                          "appointmentDate",
                          e.target.value
                        )
                      }
                    />
                  </div>

              
      <div>
  <p className="text-sm font-medium mb-1">
    Appointment Time
  </p>

  <div className="flex flex-wrap gap-2">
    {doctor?.availability?.map((time) => (
      <button
        key={time}
        type="button"
        onClick={() => handleChange("appointmentTime", time)}
        className={`px-3 py-1 rounded-full border text-sm transition ${
          formData.appointmentTime === time
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        {time}
      </button>
    ))}
  </div>
</div>

                </div>
              </Modal.Body>

             
              <Modal.Footer>
                <Button variant="light" onPress={close}>
                  Cancel
                </Button>

                <Button
                  color="primary"
                  onPress={() => handleSubmit(close)}
                >
                  Confirm Booking
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}