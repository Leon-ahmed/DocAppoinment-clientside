import React from 'react';
import Image from 'next/image';
import logo from "../../public/assets/Container.png"
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className='bg-[#EFF4FF] grid grid-cols-1 gap-4 md:grid-cols-3 p-10 rounded'>
           
           <div className='space-y-2'>
            <div className="flex items-center gap-2">
                    <Image src={logo} width={25} height={15} alt="Logo" />
                    <p className="text-2xl font-bold text-[#0059BB]">
                      DocAppoint
                    </p>
                  </div>
           <p>&copy;2025. All rights reserved</p>
           </div>

           <div className='space-y-2'>
            <h3 className='text-xl font-bold   '>Contacts</h3>
            <p><span className='font-medium  hover:text-yellow-700'>Mobile: </span>+8801833458110</p>
            <p><span className='font-medium   hover:text-yellow-700'>Email: </span>docappoint@gmail.com</p>
           </div>


          <div className='space-y-2'>
            <h3 className='text-xl font-bold  '>Social Links</h3>
            <div className='flex gap-4  '>
               <FaFacebook  size={28} className=' hover:text-blue-500' />
               <FaSquareXTwitter  size={28} className=' hover:text-pink-500'  />
               <FaWhatsappSquare  size={28}  className=' hover:text-green-600'    />
            </div>
          </div>





        </footer>
    );
};

export default Footer;