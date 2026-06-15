"use client";

import { useEffect, useState } from "react";
import { Modal, Button, Input } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Editmodal({
  isOpen,
  onOpenChange,
  booking,
}) {
  const [formData, setFormData] = useState({
    userEmail: "",
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (booking) {
      setFormData({
        userEmail: booking.userEmail || "",
        patientName: booking.patientName || "",
        gender: booking.gender || "",
        phone: booking.phone || "",
        appointmentDate: booking.appointmentDate || "",
        appointmentTime: booking.appointmentTime || "",
      });
    }
  }, [booking]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (close) => {
    try {
      const res = await fetch(
        `http://localhost:5000/bookings/${booking._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Updated successfully");
        close();
        router.refresh();
      } else {
        toast.info("No changes made");
      }
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    }
  };

  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Container >
        <Modal.Dialog>
          {({ close }) => (
            <>
              <Modal.Header>
                <Modal.Heading>
                  Update Appointment
                </Modal.Heading>
              </Modal.Header>

              
              <Modal.Body>
                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-4">

                 
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Doctor Name
                    </p>
                    <Input
                      value={booking?.doctorName || ""}
                      readOnly
                    />
                  </div>

                  
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Speciality
                    </p>
                    <Input
                      value={booking?.doctorSpeciality || ""}
                      readOnly
                    />
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
                    />
                  </div>

                
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Gender
                    </p>
                    <Input
                      value={formData.gender}
                      onChange={(e) =>
                        handleChange(
                          "gender",
                          e.target.value
                        )
                      }
                    />
                  </div>

                
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Phone Number
                    </p>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        handleChange(
                          "phone",
                          e.target.value
                        )
                      }
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
                    <Input
                      value={formData.appointmentTime}
                      readOnly
                    />
                  </div>

                </div>
              </Modal.Body>

              <Modal.Footer >
                <Button variant="light" onPress={close}  >
                  Cancel
                </Button>

                <Button 
              
                  color="primary"
                  onPress={() => handleSubmit(close)}
                >
                  Save Changes
                </Button >
              </Modal.Footer >
            </>
          )}
        </Modal.Dialog >
      </Modal.Container>
    </Modal.Backdrop>
  );
}