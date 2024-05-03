import React from "react";
import foodApp from "../../images/foodApp.png";
import petScreen from "../../images/petScreen.png";


const UxContent = () => {
	return (
		<div className="size-full">
			<img
				className="object-top object-fill size-full touch-manipulation  "
				src={foodApp}
				alt="Wireframes of a table ordering mobile app"
				loading="lazy"
			/>
			<img
				className="object-top object-fill size-full touch-manipulation  "
				src={petScreen}
				alt="Detailed breakdown from a page of a mobile app"
				loading="lazy"
			/>
		</div>
	);
};

export default UxContent;
