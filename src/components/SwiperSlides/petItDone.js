import React from 'react';
import petitdoneLogo from '../../images/petitdoneLogo.png';
import petitdoneAx from '../../images/petitdoneAx.png';

const PetItDone = () => {
 return (
    <div className="swiperslide font-irene">
  
  <div className='inline-flex justify-center bg-[#B0E3EE] p-3 rounded-xl w-full shadow-bardBlack shadow-sm lg:p-6'>
    <img className=" h-14 lg:h-32 w-auto" src={petitdoneAx} alt="Pet It Done Axolotl" />
    <img className=" h-14 lg:h-32 w-auto" src={petitdoneLogo} alt="Pet It Done Logo" />
  </div>
  

      <p className="slideBody">PetItDone is a React Native app that combines a digipet and to-do list. Designed by neurodivergent people, with neurodivergent people in mind, in hopes that the urgency of the digipet getting sad, will give a boost in motivation for people who struggle to get their tasks done.</p>
      
      <p className="slideBody mb-6 bg-[#FFCAD4] p-6 rounded-xl shadow-bardBlack shadow-sm">To learn more about PetItDone, feel free to click through the presentation below!</p>

      <div className="relative w-full h-auto rounded-xl shadow-bardBlack shadow-sm "
        style={{ paddingTop: '56.2500%', paddingBottom: '0', marginTop: '0.9em', marginBottom: '0.9em', overflow: 'hidden', willChange: 'transform'}}>
        <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}} src="https://www.canva.com/design/DAFmsU7LAAY/EdWZWd-9UDv-P71XZPqqmg/view?embed" allowFullScreen allow="fullscreen" title="PetItDone Presentation"></iframe>
      </div>

      <p className="slideBody mb-6 bg-[#FAF2A2] p-6 rounded-xl shadow-bardBlack shadow-sm">Click the image below to view the wireframes and user story</p>

      <a href="https://www.canva.com/design/DAF_meJFe6U/t2E-58NiuIXIAAy7122iGg/view?utm_content=DAF_meJFe6U&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="#" rel="noopener" className="relative block w-full h-auto rounded-xl shadow-bardBlack shadow-sm"
    style={{ paddingTop: '56.2500%', paddingBottom: '0', marginTop: '0.9em', marginBottom: '0.9em', overflow: 'hidden', willChange: 'transform', position: 'relative' }}>
    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }} src="https://www.canva.com/design/DAF_meJFe6U/t2E-58NiuIXIAAy7122iGg/view?embed" allowFullScreen allow="fullscreen" title="PetItDone Wireframes"></iframe>
    </a>



    </div>
 );
};

export default PetItDone;