import React from 'react';
import phoneFrame from "../images/phoneFrame.png";
import phoneFrameSide from "../images/phoneFrameSide.png";




const AppTitle = () => {
 return (
    <h2>I Do Apps</h2>
 );
};

const AppContent = () => {
 return (
<div className='relative size-full '>
 <div className='absolute inset-0 flex items-center justify-center z-10 size-full p-3 '>
    <img
      className="object-center object-contain max-xl:hidden size-full"
      src={phoneFrameSide}
      alt="Image of a phone"
      loading="lazy"
    />

<img
      className="object-center object-contain xl:hidden size-full"
      src={phoneFrame}
      alt="Image of a phone"
      loading="lazy"
    />
 </div>
 <div className='absolute inset-0 flex items-center justify-center z-20 '>
   <div className='appbox font-solway max-w-[60%] size-fit text-center'>
      <div className='mb-2 font-bungee'> App Development</div>

    
    <div className=" font-solway">
								{" "}
								bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lectus nulla at volutpat diam ut. viverra aliquet.
							</div>
    </div>
 </div>
</div>

 );
};

export { AppTitle, AppContent };
