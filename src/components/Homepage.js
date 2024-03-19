import React from 'react';
import portrait from '../images/portrait.png'

const Homepage = () => (
    <div className="mygrid grid-cols-3 gap-1 bg-transparent border-none shadow-none">
        <div className='flex flex-col justify-evenly h-[60%] text-center'>
        <div className=" gridbox gridbox-info order-1 col-span-1 h-fit bg-mywhite border-primary shadow-darkPrimary shadow-sm text-center">
            Hello, I am Ellen
        </div>

        <div className="gridbox gridbox-info order-2 col-span-1 h-fit bg-mywhite border-primary shadow-darkPrimary shadow-sm text-center">
            No, I don't really look like that
        </div>

        <div className=" gridbox gridbox-info order-3 col-span-1 h-fit bg-mywhite border-primary shadow-darkPrimary shadow-sm text-center">
        Press Some Buttons
        </div>
        </div>

        <div className='gridbox col-span-2 order-1 border-none'>
        <img className="h-[60%] w-auto rounded-lg p-6 bg-mywhite border-primary shadow-darkPrimary shadow-sm" src={portrait}  alt="Ellen Portrait" />
        </div>
    </div>
);

export default Homepage;