import React, { useState } from "react";
import portrait from "../images/ellen.png";
import bigPortrait from "../images/portrait.png";
import { WebTitle, WebContent } from './WebBlock';
import { SoftwareTitle, SoftwareContent } from './SoftwareBlock';
import { DesignTitle, DesignContent } from './DesignBlock';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselData = [
	   { title: <WebTitle />, content: <WebContent /> },
	   { title: <SoftwareTitle />, content: <SoftwareContent /> },
	   { title: <DesignTitle />, content: <DesignContent /> },
	   // Add more items as needed
	];
   
	const handlePrevious = () => {
	   setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
	};
   
	const handleNext = () => {
	   setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
	};
   
	return (
	<div className="outerHomeSm xl:outerHomeLg rounded-md bg-primary shadow-sm shadow-secondary dark:bg-secondary dark:shadow-primary/50 dark:bg-opacity-80 "> 
		<div className=" innerHomeSm md:innerHomeLg bg-mywhite rounded-md dark:bg-transparent ">
			<div className="grid gap-3 max-sm:gap-1 max-sm:gap-y-2 size-full grid-rows-10 grid-cols-12 *:size-full *:items-center *:content-center">
				<div className=" shadow-secondary shadow-sm rounded-md  size-full  col-span-6 md:col-span-4 xl:col-span-3 xl:row-span-full row-span-3 col-start-1 row-start-1 xl:col-start-1 xl:row-start-3 m-1 z-0 self-center  dark:bg-secondary/70  ">
					<img
						className="xl:hidden rounded-md  size-full object-top object-cover dark:opacity-30 hover:dark:opacity-70 dark:shadow-sm dark:shadow-primary/50   "
						src={portrait}
						alt="Portrait of Ellen"
					/>
					<img
						className=" max-xl:hidden rounded-md  object-top object-cover size-full dark:opacity-30 hover:dark:opacity-70 dark:shadow-sm dark:shadow-primary/50   "
						src={bigPortrait}
						alt="Portrait of Ellen"
					/>
				</div>
				<div className=" xl:pb-3 p-2  xl:col-span-full xl:bg-mywhite xl:rounded-md xl:row-span-2 xl:row-start-1 xl:size-full xl:m-1 xl:px-4 col-start-5 xl:col-start-1  z-20 row-start-1 row-end-4 col-span-8 xl:pt-3 size-full lg:dark:shadow-sm lg:dark:shadow-primary/30 lg:dark:bg-darkPrimary lg:dark:bg-opacity-60 ">
					<div className="max-lg:homepageBox size-full overflow-auto    ">
						<h2 className="md:mb-3 ">Hi, I'm Ellen</h2>
						<div className="size-full ">
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
<div className=" xl:col-start-4 row-start-4 xl:row-start-3 row-span-1 col-end-13 col-span-full  ">
 <div className="flex justify-between w-full">
    <div className="homepageButton size-fit" onClick={handlePrevious}>
      <FiArrowLeft />
    </div>
    <div className="rounded-md flex-grow mx-1">
      {carouselData[currentIndex].title}
    </div>
    <div className="homepageButton size-fit" onClick={handleNext}>
      <FiArrowRight />
    </div>
 </div>
</div>

				<div className=" overflow-auto rounded-md col-start-1 row-start-5 xl:col-start-4 xl:row-start-4 z-10 row-end-11  col-span-full shadow-inner shadow-secondary dark:shadow-none">
					{carouselData[currentIndex].content}
				</div>
			</div>
		</div>
	</div>
 );
};

export default Homepage;
