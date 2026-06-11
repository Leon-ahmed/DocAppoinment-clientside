import React from 'react';
import Image from 'next/image';
import rv1 from "../../public/assets/rv1.png";
import rv2 from "../../public/assets/rv2.png";
import comma from "../../public/assets/coma.png";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className='bg-blue-300/20 py-12 md:py-20 px-4 md:px-20'>
            <div className='text-center pb-12'>
                <h2 className='text-3xl md:text-4xl font-semibold'>
                    Patient Voices
                </h2>
                <p className='text-gray-500 font-medium'>
                    Real stories from our healthy and happy community.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>

                <div className='rounded-4xl bg-white shadow border p-6 md:p-12'>
                    <div className='flex justify-between items-start md:items-center gap-4'>
                        <div className='flex gap-2 items-center'>
                            <Image
                                src={rv1}
                                height={64}
                                width={64}
                                alt='reviewer1'
                                className='w-12 h-12 md:w-16 md:h-16'
                            />
                            <div>
                                <h3 className='font-semibold'>
                                    Jessica Thompson
                                </h3>
                                <span className='flex text-[#4FDBC8]'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={comma}
                                alt='comma'
                                className='w-8 md:w-auto'
                            />
                        </div>
                    </div>

                    <blockquote className='mt-6 text-sm md:text-base leading-7 text-gray-600'>
                        &quot;The booking process was incredibly smooth. I found a
                        specialist within minutes, and the appointment reminder
                        system ensured that I didn&apos;t miss my appointment.
                        DocAppoint truly values its patients&apos; time.&quot;
                    </blockquote>
                </div>

                <div className='rounded-4xl bg-white shadow border p-6 md:p-12'>
                    <div className='flex justify-between items-start md:items-center gap-4'>
                        <div className='flex gap-2 items-center'>
                            <Image
                                src={rv2}
                                height={64}
                                width={64}
                                alt='reviewer2'
                                className='w-12 h-12 md:w-16 md:h-16'
                            />
                            <div>
                                <h3 className='font-semibold'>
                                    Jessica Thompson
                                </h3>
                                <span className='flex text-[#4FDBC8]'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={comma}
                                alt='comma'
                                className='w-8 md:w-auto'
                            />
                        </div>
                    </div>

                    <blockquote className='mt-6 text-sm md:text-base leading-7 text-gray-600'>
                        &quot;The booking process was incredibly smooth. I found a
                        specialist within minutes, and the appointment reminder
                        system ensured that I didn&apos;t miss my appointment.
                        DocAppoint truly values its patients&apos; time.&quot;
                    </blockquote>
                </div>

            </div>
        </div>
    );
};

export default Reviews;