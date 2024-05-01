import React from "react";
import padPortrait from "../images/padPortrait.png";
import padLandscape from "../images/padLandscape.png";
import Accordion from "./Accordion";
import UxContent from "./DesignContent/uxContent";
import RedesignContent from "./DesignContent/redesignContent";
import WebContent from "./DesignContent/webContent";

const DesignContent = () => {
	return (
		<div className=" relative box-border size-full scroll-smooth max-h-full bg-transparent dark:bg-blend-overlay dark:bg-myblack">
			<div className=" size-full max-h-full z-10  ">
				<img
					className="object-top object-fill size-full sm:hidden  "
					src={padPortrait}
					alt="portrait notebook"
					loading="lazy"
				/>

				<img
					className="object-top object-fill size-full max-sm:hidden  "
					src={padLandscape}
					alt="landscape notebook"
					loading="lazy"
				/>

				<div className="  box-content scroll-smooth  overflow-auto z-20  absolute top-5 md:top-20 lg:top-24 max-h-full bottom-5 left-1 right-1 xl:left-3 xl:right-3 ">
					<h2 className=" font-walter blackHeader text-center lg:pb-2 z-20 ">
						Design
					</h2>
					<div className="size-full">
						<Accordion title="UX / UI Design">
                     <UxContent/>
						</Accordion>
						<Accordion title="Web Design">
							<WebContent/>
						</Accordion>
						<Accordion title="Redesigns">
							<RedesignContent/>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DesignContent };
