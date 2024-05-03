import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
 const [isOpen, setIsOpen] = useState(false);

 return (
    <div className="relative group pagebox   ">
      <h3 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer font-bold font-irene border-inherit blackHeader ml-1 sticky z-50 top-0 transition-transform ease-linear duration-200  dark:text-darkPrimary   ">
        {title}
      </h3>
      <div className={`overflow-hidden transition-height transform duration-200 ease-linear  ${isOpen ? 'h-full m-2 scale-y-100 origin-top' : 'h-0 scale-y-0 origin-top'}`}>
        {children}
      </div>
    </div>
 );
};

export default Accordion;
