import React, { useState } from "react"
import { WebContent } from "./HomepageCarousel/WebBlock"
import { SoftwareContent } from "./HomepageCarousel/SoftwareBlock"
import { AppContent } from "./HomepageCarousel/AppBlock"
import { DesignContent } from "./HomepageCarousel/DesignBlock"
import { FirstBlockContent } from "./HomepageCarousel/FirstBlock"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const carouselData = [
		{ content: <FirstBlockContent />, buttonText: "Ellen does..."},
		{ content: <SoftwareContent />, buttonText: "Software" },
		{ content: <AppContent />, buttonText: "Apps" },
		{ content: <DesignContent />, buttonText: "Design" },
		{ content: <WebContent />, buttonText: "Websites" },
	]

	const handlePrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
		)
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
	}

	return (
		<div className="flex justify-center items-center m-auto max-h-dvh max-xl:pr-1 ">
			<div className="sticky container mx-auto w-[50dvw] h-[75dvh] xl:m-10 m-2">
				<div className="w-full h-full flex items-center justify-center overflow-hidden">
					{carouselData[currentIndex].content}
				</div>
				<button
					onClick={handlePrevious}
					className="absolute xl:-left-10 -left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-50 hidden xl:block"
				>
					<FiArrowLeft />
				</button>
				<button
					onClick={handleNext}
					className="absolute xl:-right-10 -right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-50 hidden xl:block"
				>
					<FiArrowRight />
				</button>
			</div>
			<div className="flex flex-col xl:ml-4 p-1  ">
				{carouselData.map((item, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`homepageButton ${
							currentIndex === index ? "bg-primaryPurple shadow-inner shadow-secondary whiteHeader" : ""
						}`}
					>
						{item.buttonText}
					</button>
				))}
			</div>
		</div>
	)
}

export default Homepage