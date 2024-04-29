import React from "react";
import { FiLock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import yourLogo from "../images/YourLogo1.png";


const WebTitle = () => {
	return (
		<div className="size-full rounded-md content-center container mx-auto ">
			<div className="inline-flex flex-row flex-grow  min-w-full py-1 md:px-1 lg:px-2 justify-start items-center border-lightGrey/60  bg-white rounded-l-full rounded-r-full border-2 shadow-secondary/10 shadow-inner dark:shadow-sm dark:shadow-primary/30 dark:bg-darkPrimary dark:bg-opacity-60 dark:border-primary/20 dark:border  ">
				<FiLock className="h-fit text-base md:text-lg lg:text-2xl max-sm:text-sm  mx-2 lg:mx-3 max-h-full text-gray-400 " />
				<div className="text-base font-sans flex-grow  max-sm:text-sm md:text-xl lg:text-2xl   ">
					<span className=" text-gray-400  ">https://</span>
                    I Do Websites
				</div>
				<FaStar className=" inline-flex text-base md:text-lg lg:text-2xl max-sm:text-sm mx-2 mg:mx-3 text-right   text-[#e1b83e] max-h-fit" />
			</div>
		</div>
	);
};

const WebContent = () => {
	return (
		<div className=" flex flex-col size-full bg-lightGrey rounded-lg shadow-sm shadow-secondary dark:shadow-none  ">
            		<div className="rounded-md content-center px-2 p-1 ">
			<div className="inline-flex flex-row flex-grow  min-w-full py-1 md:px-1 lg:px-2 justify-start items-center border-lightGrey/60  bg-white rounded-l-full rounded-r-full border-2 shadow-secondary/10 shadow-inner dark:shadow-sm dark:shadow-primary/30 dark:bg-darkPrimary dark:bg-opacity-60 dark:border-primary/20 dark:border  ">
				<FiLock className="h-fit text-base md:text-lg lg:text-2xl max-sm:text-sm  mx-2 lg:mx-3 max-h-full text-gray-400 " />
				<div className="text-base font-sans flex-grow  max-sm:text-sm md:text-xl lg:text-2xl   ">
					<span className=" text-gray-400  ">https://</span>
                    Full-Stack Web Development 
				</div>
				<FaStar className=" inline-flex text-base md:text-lg lg:text-2xl max-sm:text-sm mx-2 mg:mx-3 text-right   text-[#e1b83e] max-h-fit" />
			</div>
		</div>
        <div className="bg-mywhite size-full flex flex-col rounded-md">
            <div className="sticky flex flex-row justify-start items-center bg-slate-200 max-w-full max-h-[15%] rounded-md m-1 ">
            <img
						className="p-3 max-h-full w-auto"
						src={yourLogo}
						alt="Example Logo"
                        height={100}
                        width={150}
					/>
                <div className="mx-2 p-1 hover:text-darkPrimary font-bitter font-medium">
                    From Design to Deployment 
                </div>
                {/* <div className="mx-2 p-1 hover:text-darkPrimary font-bitter font-medium">
                    Design
                </div> */}
            </div>

            <div className="flex-grow rounded-md m-1 p-1 px-3 font-sans bg-my">
                Content
            </div>

            <div className=" bg-slate-700 text-mywhite p-1 px-3 py-2 max-w-full h-fit rounded-md m-1 font-bitter whitespace-break-spaces">
                Need a website? {" "}Click here to reach out 
            </div>
			</div>
		</div>
	);
};

export { WebTitle, WebContent };
