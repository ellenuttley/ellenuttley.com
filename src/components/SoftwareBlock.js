import React from 'react';
import { FiDownload, FiMinus, FiSquare, FiX } from "react-icons/fi";

const SoftwareTitle = () => {
 return (
   <div className="size-full rounded-md content-center container mx-auto  ">
   <h2 className="inline-flex font-lexend flex-row px-2 md:px-4 lg:px-5 justify-evenly items-center  rounded-sm  ">
      <span className="mx-2 md:mx-3  font-bold bg-clip-text text-transparent bg-gradient-to-r  from-[#188e32]  from-50% to-70% to-slate-700 dark:to-slate-100  ">
              I Do Software
      </span>
      <FiDownload className='mx-2 md:mx-3 text-slate-700 dark:text-slate-100'/>
</h2>
</div>
 );
};

const SoftwareContent = () => {
 return (
    <div className='relative size-full rounded-md bg-windows bg-cover dark:bg-blend-darken dark:bg-secondary/80 bg-center p-16 py-12 shadow-sm shadow-secondary dark:shadow-none '>
      <div className='size-full flex flex-col bg-lightGrey rounded-md outline  outline-1  outline-slate-500  dark:border-slate-100/50 shadow-black shadow-sm'>
                  <div className=" flex flex-row justify-start bg-gradient-to-b from-[#1C98E3]  via-[#37B9F3] to-[#027AD4] dark:bg-[#052b48] border-1 border-slate-500/80 shadow-slate-700/50 shadow-sm dark:border-slate-100/50 rounded-t-md   items-center max-h-[15%] rounded-sm ">

                <div className="   w-full p-1 px-2 text-white">
                    Full-Stack Software Development
                </div>
                <div className='inline-flex *:text-slate-100 *:mx-2'>
                <FiMinus />
                <FiSquare />
                <FiX />
                </div>
            </div>

    </div>
    </div>
 );
};

export { SoftwareTitle, SoftwareContent };
