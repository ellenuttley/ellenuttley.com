import React from "react";
import padPortrait from "../../images/padPortrait.png";
import padLandscape from "../../images/padLandscape.png";
import gameRobot from "../../images/gameRobot.png";
import Accordion from "../Accordion";
import UxContent from "../DesignContent/uxContent";
import RedesignContent from "../DesignContent/redesignContent";
import WebContent from "../DesignContent/webContent";

const DesignContent = () => {
	return (
		<div className=" relative box-border size-full scroll-smooth max-h-full bg-transparent dark:bg-blend-overlay dark:bg-myblack">
			<div className=" size-full max-h-full z-10  ">
				<img
					className="object-top object-fill size-full sm:hidden dark:opacity-5  "
					src={padPortrait}
					alt="portrait notebook"
					loading="lazy"
				/>

				<img
					className="object-top object-fill size-full max-sm:hidden dark:opacity-5  "
					src={padLandscape}
					alt="landscape notebook"
					loading="lazy"
				/>

				<div className=" flex flex-col *:font-irene  box-content scroll-smooth  overflow-y-scroll z-20  absolute top-5 md:top-20 lg:top-24 max-h-full bottom-3 left-1 right-1 xl:left-3 xl:right-3 px-0.5  ">
					<h2 className=" font-walter blackHeader text-center lg:pb-2 z-20 ">
						Design
					</h2>
               <div className=" m-2 font-irene">Blah blah my style is ramble ramble</div>
					<div className=" border-l-4 rounded-tl-sm rounded-bl-lg border-l-[#C4AEEB] ">
						<Accordion title="UX / UI Design">
							<UxContent />
						</Accordion>
					</div>

					<div className=" border-l-4 rounded-tl-sm rounded-bl-lg border-l-[#B0E3EE]">
						{" "}
						<Accordion title="Web Design">
							<WebContent />
						</Accordion>
					</div>
					<div className=" border-l-4 rounded-tl-sm rounded-bl-lg border-l-[#F0B03D]">
						{" "}
						<Accordion title="Redesigns">
							<RedesignContent />
						</Accordion>
					</div>

					{/* <div className=" flex-grow relative"> */}
                  {/* <div className="origin-bottom relative"> */}
						<img
							className=" mt-5  object-contain flex-grow object-bottom size-[50%] xl:size-[40%] self-end translate-y-7 "
							src={gameRobot}
							alt="A Robot Character, with a speech bubble that reads 'Ellen Also Dabbles in Character and Game Design!'"
							loading="lazy"
						/>
						<div className="grassGradient w-full h-[10%] self-end flex-auto ">{"  "}</div>
                  {/* </div> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export { DesignContent };
