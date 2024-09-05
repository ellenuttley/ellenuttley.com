import React from "react"
import portrait from "../../images/ellen.png"

const FirstBlockContent = () => {
	return (
		<div className="relative flex justify-center items-center ">
			<div className=" rounded-md z-0 dark:bg-secondary/70 thickBorder ">
			
					<img
						className=" max-h-[50dvh] relative rounded-md shadow-secondary shadow-sm   dark:opacity-30 hover:dark:opacity-70 dark:shadow-sm dark:shadow-primary/50  "
						src={portrait}
						alt="Portrait of Ellen"
						loading="lazy"
					/>


				<div className="absolute bottom-5 left-5 right-5 z-10 thickBorder text-pretty size-auto xl:m-5 p-0.5 shadow-md shadow-secondary ">
					<div className="bg-mywhite rounded-md homepageBox size-fit m-auto  ">
						<h2 className="md:mb-3 xl:text-4xl">Hi, I'm Ellen</h2>
						<div className="">
							{" "}
							A Software Developer and Designer based in Barnsley, England. I
							have a passion for backend development, and a flare for frontend
							and design.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { FirstBlockContent }
