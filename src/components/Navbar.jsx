'use client'
import React from 'react';
import Image from 'next/image';
import logo from "../../public/assets/Container.png"
import Navlink from "../components/Navlink"; 
import Link from 'next/link';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';




const Navbar = () => {
      const [open, setOpen] = useState(false);
     const {data:session,isPending}=useSession();
     const user=session?.user;

     const router=useRouter();

const handleLogout = async () => {
  await signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/");
      },
    },
  });
};




    return (
      
 
  <nav className="relative border-b shadow-sm p-4">
    <div className="flex items-center justify-between">
      
     
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="flex items-center gap-2">
          <Image src={logo} width={25} height={15} className='h-auto  ' alt="Logo" />
          <p className="text-2xl font-bold text-[#0059BB]">
            DocAppoint
          </p>
        </div>
      </div>

      
      <div className="hidden md:flex gap-6 font-medium">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/appoint">All Appointment</Navlink>
        <Navlink href="/dashboard">Dashboard</Navlink>
      </div>

     
    <div className="hidden md:flex gap-6 font-medium">
      {
        user?( 
         <div className='flex gap-1'>
           <Avatar className="cursor-pointer">
                                        <Avatar.Image
                                            alt="User Image"
                                            src={user?.image}
                                            referrerPolicy="no-referrer"
                                        />
                                        <Avatar.Fallback>
                                            {user?.name?.[0] ?? "U"}
                                        </Avatar.Fallback>
                                    </Avatar>


             <button
                                    type="button"  onClick={handleLogout}
                                    className="p-2 bg-[#003D9B] text-white rounded-md mb-4 transition-all active:scale-95"
                                >
                                    Logout
                                </button>                         
         </div>
         
            
        
        ):(  <div className="hidden md:flex gap-2">
        <Link
          href="/login"
          className="px-4 py-2 border-2 border-[#0059BB] rounded-md text-[#0059BB]"
        >
          Log in
        </Link>

        <Link
          href="/register"
          className="px-4 py-2 bg-[#0059BB] rounded-md text-white"
        >
          Register
        </Link>
      </div>)
      }
    </div>
    </div>

   
    <div    className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? "max-h-96 mt-4" : "max-h-0"
      }`}
    >

        
      <div className="flex flex-col gap-4 rounded-lg border p-4 bg-white shadow">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/appoint">All Appointment</Navlink>
        <Navlink href="/dashboard">Dashboard</Navlink>

        <hr />

        <div>
             {
        user?( 
         <div className='flex   justify-center  gap-4'>
           <Avatar className="cursor-pointer ">
                                        <Avatar.Image
                                            alt="User Image"
                                            src={user?.image}
                                            referrerPolicy="no-referrer"
                                        />
                                        <Avatar.Fallback>
                                            {user?.name?.[0] ?? "U"}
                                        </Avatar.Fallback>
                                    </Avatar>


            <div  >
               <button
                                    type="button" onClick={handleLogout}
                                    className="p-2 bg-[#003D9B]    text-white rounded-md mb-4 transition-all active:scale-95"
                                >
                                    Logout
                                </button>  
              </div>                       
         </div>
         
            
        
        ):(  <div className=" flex gap-2">
        <Link
          href="/login"
          className="px-4 py-2 border-2 border-[#0059BB] rounded-md text-[#0059BB]"
        >
          Log in
        </Link>

        <Link
          href="/register"
          className="px-4 py-2 bg-[#0059BB] rounded-md text-white"
        >
          Register
        </Link>
      </div>)
      }
        </div>
      </div>
    </div>
  </nav>
);
  
};

export default Navbar;