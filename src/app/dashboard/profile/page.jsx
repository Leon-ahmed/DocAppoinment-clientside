"use client";

import Loading from "@/app/loading";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import deuser from "../../../../public/assets/deuser.webp";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

const Profile = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until client hydration is complete
  if (!mounted || isPending) {
    return <Loading />;
  }

  if (!session?.user) {
    return <p>Please login first.</p>;
  }

  const user = session.user;

  const openModal = () => {
    setName(user.name || "");
    setEmail(user.email || "");
    setImage(user.image || "");
    setIsOpen(true);
  };

const updateProfile = async () => {
  try {
    const response = await fetch("http://localhost:5000/user/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentEmail: user.email,
        name,
        email,
        image,
      }),
    });

    const data = await response.json();

    console.log("Backend response:", data);

    if (!response.ok) {
      throw new Error("Update failed");
    }

    setIsOpen(false);
       window.location.reload();

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="flex flex-col justify-center items-center border p-20 rounded-2xl bg-linear-to-br from-cyan-50 via-white to-blue-100 space-y-5">

<Image
  width={100}
  height={100}
  alt="User Image"
  src={user.image?.trim() || deuser}
  className="rounded-xl"
/>

      <p>
        <span className="font-medium">Name: </span>
        {user.name}
      </p>

      <p>
        <span className="font-medium whitespace-nowrap">Email: </span>
        {user.email}
      </p>

      <Button variant="secondary" onPress={openModal}>
        Update Profile
      </Button>

      <Modal.Backdrop
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-2xl">
                Update Profile
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">

                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input
                      readOnly
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="image"
                    type="url"
                    variant="secondary"
                  >
                    <Label>Profile Image URL</Label>
                    <Input
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </TextField>

                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onPress={() => setIsOpen(false)}
              >
                Cancel
              </Button>

              <Button onPress={updateProfile}>
                Update
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </div>
  );
};

export default Profile;