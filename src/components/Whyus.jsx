import React from 'react';
import Image from 'next/image';
import container from "../../public/assets/Container.png"
import list from "../../public/assets/list.png"
import service from "../../public/assets/service.png"
const Whyus = () => {
    return (
        <div className='bg-[#F8F9FF] py-20'>
             
          <div className='text-center space-y-3' >
            <h2 className='text-3xl font-medium  '>Why Choose DocAppoint?</h2>
            <p className='text-[#414754]'>Delivering care that exceeds expectations.</p>
          </div>


          <div className='grid grid-cols-1 pt-8 w-11/12  md:w-10/12 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='bg-white flex flex-col justify-center items-center md:justify-start md:items-start  rounded-4xl p-12 space-y-3 shadow-backdrop'>
                <div className='rounded-2xl w-15 h-15 flex justify-center items-center bg-[#84adda54]'>
            <Image src={container} alt='container'  ></Image>
            </div >
            <h3 className='font-medium text-[16px] sm:text-xl'>Expert Doctors</h3>
             <p className='text-gray-500 text-center md:text-left  '>Access a network of board-
certified specialists with years of
clinical expertise.</p> 
            </div>
            <div className='bg-white flex flex-col justify-center items-center md:justify-start md:items-start  rounded-4xl p-12 space-y-3 shadow-backdrop'>
                <div className='rounded-2xl w-15 h-15 flex justify-center items-center bg-[#9df7e9]'>
            <Image src={list} alt='container'  ></Image>
            </div >
            <h3 className='font-medium text-[16px] sm:text-xl'>Easy Booking</h3> 
             <p className='text-gray-500 text-center md:text-left  '>Schedule your visit in less than 60
seconds with our streamlined
interface.</p> 
            </div>
            <div className='bg-white flex flex-col justify-center items-center md:justify-start md:items-start  rounded-4xl p-12 space-y-3 shadow-backdrop'>
                <div className='rounded-2xl w-15 h-15 flex justify-center items-center bg-[#DCE9FF]'>
            <Image src={service } alt='container'  ></Image>
            </div >
            <h3 className='font-medium text-[16px] sm:text-xl'>24/7 Support</h3>
             <p className='text-gray-500 text-center md:text-left  '>Our dedicated care team is always
online to assist with your medical
inquiries. </p> 
            </div>
          
                        
           


          </div>






        </div>
    );
};

export default Whyus;