import React from 'react';
import { TETooltip } from "tw-elements-react";
import bardLogo from '../../images/bardLogo.png';

const BedtimeBard = () => {
 return (
    <div className="swiperslide font-solway">
  
    <div className='inline-flex justify-center bg-[#BBAFD3] p-3 rounded-xl w-full shadow-bardBlack shadow-sm lg:p-6'>
      
      <span>
      <TETooltip
          tag="a"
          title={<><p className='font-solway bg-bardBlack text-mywhite p-2 px-3 rounded-xl shadow-bardBlack shadow-sm'>Click me to view the GitHub!</p></>}
          placement="bottom"
          wrapperProps={{ href:'https://github.com/ellenuttley/bedtime-bard' }}
          className="transition duration-150 ease-in-out pointer-events-auto cursor-pointer font-solway"
        >
         <img className="h-auto w-auto flex-shrink justify-normal self-center" src={bardLogo}  alt="Bedtime Bard Logo" />
          
        </TETooltip>
        </span>
      <h1 className="slideTitle self-center font-bungee">BEDTIME BARD </h1> 
    </div>
  

      <p className="slideBody font-solway ">Bedtime Bard is a Flask built web app that uses the OpenAI API to take the stress out of bedtime. It writes tailor-made, age-appropriate bedtime stories, and then weaves in the child's bedtime routine steps. So, if they want to know what comes next, they better hurry up and brush their teeth! </p>
      
      <p className="slideBody font-solway mb-6 bg-[#9DC3CC] p-6 rounded-xl shadow-bardBlack shadow-sm">To learn more about BedtimeBard, feel free to click through the presentation below!</p>

      <div className="relative w-full h-auto rounded-xl shadow-bardBlack shadow-sm "
        style={{ paddingTop: '56.2500%', paddingBottom: '0', marginTop: '0.9em', marginBottom: '0.9em', overflow: 'hidden', willChange: 'transform'}}>
        <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}} src="https://www.canva.com/design/DAFjlSIcLYA/view?embed" allowFullScreen allow="fullscreen" title="Bedtime Bard Presentation"></iframe>
      </div>

      <p className="slideBody mb-6 bg-[#E7B1F6] font-solway p-6 rounded-xl shadow-bardBlack shadow-sm">Click the image below to view the wireframes and user story</p>

      <a href="https://www.canva.com/design/DAFiqI0neAQ/RlNIIqjLNbFkPRyxAojOdQ/view?utm_content=DAFiqI0neAQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="#" rel="noopener" className="relative block w-full h-auto rounded-xl shadow-bardBlack shadow-sm"
    style={{ paddingTop: '56.2500%', paddingBottom: '0', marginTop: '0.9em', marginBottom: '0.9em', overflow: 'hidden', willChange: 'transform', position: 'relative' }}>
    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }} src="https://www.canva.com/design/DAFiqI0neAQ/RlNIIqjLNbFkPRyxAojOdQ/view?embed" allowFullScreen allow="fullscreen" title="BedtimeBard Wireframes"></iframe>
    </a>




    </div>
 );
};

export default BedtimeBard;
