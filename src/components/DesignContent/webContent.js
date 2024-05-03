import React from "react";
// import webdesignClosed from "../../images/webdesignClosed.png";
import webdesignOpen from "../../images/webdesignOpen.png";

const WebContent = () => {
	return (
		<div>
			<div className="size-full">

				<img
					className="object-top object-fill size-full touch-manipulation  "
					src={webdesignOpen}
					alt="Detailed breakdown from a page of a mobile app"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default WebContent;
