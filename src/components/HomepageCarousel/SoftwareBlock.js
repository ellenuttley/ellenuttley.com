import React from 'react';
import { FiDownload, FiMinus, FiSquare, FiX } from "react-icons/fi";

const SoftwareContent = () => {
 return (
    <div className='relative size-full rounded-md bg-windows bg-cover dark:bg-blend-darken dark:bg-secondary/80 bg-center p-6 xl:p-16 xl:py-12 shadow-sm shadow-secondary dark:shadow-none '>
      <div className='size-full flex flex-col bg-gradient-to-b from-[#faf9fa]  via-lightGrey to-[#d0d0d0] dark:bg-black/70 rounded-md  shadow-black/50 shadow-xl'>
      {/* <div className='size-full flex flex-col bg-lightGrey dark:bg-black/70 rounded-md outline  outline-2  outline-slate-500  dark:border-none dark:outline-black shadow-black/50 shadow-xl'> */}
                  <div className=" flex  flex-row justify-start bg-gradient-to-b from-[#1C98E3]  via-[#37B9F3] to-[#027AD4] dark:bg-[#052b48] border-t-[#1C98E3] border-b-[#027AD4]/50 border border-x-2 border-x-[#37B9F3]/50 shadow-slate-700/50 shadow-sm dark:border-slate-100/50    items-center max-h-[15%] rounded-sm rounded-t-md  dark:bg-gradient-to-b dark:from-secondary/50  dark:via-[#052b48] dark:to-secondary/50">

                <div className=" w-full p-2 xl:px-3 whiteHeader xl:text-2xl ">
                    Software Development
                </div>
                <div className='inline-flex *:text-slate-100 *:mx-2 xl:text-xl '>
                <FiMinus />
                <FiSquare />
                <FiX />
                </div>
                
            </div>
							<div className=" p-3">
								{" "}
								bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lectus nulla at volutpat diam ut. viverra aliquet.
							</div>
    </div>
    </div>
 );
};

export { SoftwareContent };
