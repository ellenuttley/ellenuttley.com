import React, { useState } from "react";
import portrait from "../images/ellen.png";
import { WebContent } from "./WebBlock";
import { SoftwareContent } from "./SoftwareBlock";
import { AppContent } from "./AppBlock";
import { DesignContent } from "./DesignBlock";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	// const carouselData = [
	//    { title: <WebTitle />, content: <WebContent /> },
	//    { title: <SoftwareTitle />, content: <SoftwareContent /> },
	//    { title: <AppTitle />, content: <AppContent /> },
	//    { title: <DesignTitle />, content: <DesignContent /> },
	//    // Add more items as needed
	// ];

	const carouselData = [
		{ content: <WebContent /> },
		{ content: <SoftwareContent /> },
		{ content: <AppContent /> },
		{ content: <DesignContent /> },
	];

	const handlePrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
	};

	return (
		<div className="outerHomeSm xl:outerHomeLg rounded-md bg-primary shadow-sm shadow-secondary dark:bg-secondary dark:shadow-primary/50 dark:bg-opacity-80 ">
			<div className=" innerHomeSm md:innerHomeLg bg-mywhite rounded-md dark:bg-transparent ">
				<div className="grid gap-3 max-sm:gap-1 max-sm:gap-y-2 size-full grid-rows-10 grid-cols-12 *:size-full *:items-center *:content-center  ">
					<div className="  rounded-md xl:p-3  size-full  col-span-6 md:col-span-4 xl:col-span-3 xl:row-span-7 xl:row-start-1 xl:translate-y-3 row-span-3 col-start-1 row-start-1 xl:col-start-1  m-1 z-0 self-center  dark:bg-secondary/70  ">
						<img
							className="rounded-md shadow-secondary  shadow-sm size-full object-top object-cover dark:opacity-30 hover:dark:opacity-70 dark:shadow-sm dark:shadow-primary/50   "
							src={portrait}
							alt="Portrait of Ellen"
							loading="lazy"
						/>
					</div>
					<div className="  p-2 xl:p-5 xl:px-6  xl:rounded-md xl:row-span-full xl:col-span-3 xl:row-start-6 xl:m-1  col-start-5 xl:col-start-1  z-20 row-start-1 row-end-4 max-xl:col-end-13  xl:pt-3 size-full lg:dark:shadow-sm lg:dark:shadow-primary/30 lg:dark:bg-darkPrimary lg:dark:bg-opacity-60 ">
						<div className="homepageBox max-xl:size-fit  overflow-auto xl:-translate-y-5    ">
							<h2 className="md:mb-3 xl:text-4xl ">Hi, I'm Ellen</h2>
							<div className="">
								{" "}
								bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lectus nulla at volutpat diam ut. viverra aliquet.
							</div>
						</div>
					</div>
					{/* <h2 className="box font-lexend text-right max-h-fit  row-start-4 xl:row-start-3  shadow-none bg-transparent xl:shadow-none col-span-2 row-span-1 col-start-1 xl:col-span-1 xl:col-start-4 p-0">
					I do :
				</h2> */}
					<div className=" xl:col-start-4 row-start-4 xl:row-start-1 size-full col-end-13 col-span-full row-span-full  ">
						<div className="flex size-full justify-between ">
						<div className="homepageButton w-fit max-h-full my-10 " onClick={handlePrevious}>
							<FiArrowLeft className="h-full" />
						</div>
						{/* <div className="rounded-md flex-grow mx-1">
      {carouselData[currentIndex].title}
    </div> */}


					<div className=" size-full mx-1 xl:mx-2 rounded-md ">
						<div className="size-full rounded-md  ">
							{carouselData[currentIndex].content} 
						</div>
					</div>
					<div className="homepageButton w-fit max-h-full my-10" onClick={handleNext}>
						<FiArrowRight className="h-full " />
					</div>
				</div>
				
						</div>
					</div>
			</div>
		</div>
	);
};

export default Homepage;
