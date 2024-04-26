import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const BeforeAfterCarousel = ({ beforeImage, afterImage }) => {
  const [currentImage, setCurrentImage] = useState(beforeImage);
  const [currentCaption, setCurrentCaption] = useState("Before"); // Initialize caption state

  const handleSlide = () => {
    const newImage = currentImage === beforeImage ? afterImage : beforeImage;
    const newCaption = newImage === beforeImage ? "Before" : "After"; // Update caption based on new image
    setCurrentImage(newImage);
    setCurrentCaption(newCaption); // Update caption state
  };

  return (
    <div className="relative md:size-auto md:w-full">
      <button
        onClick={handleSlide}
        className="absolute right-2 top-2 flex font-calistoga  text-secondary transform items-center justify-center rounded-full bg-lightGrey bg-opacity-50 p-1 pl-2 text-center text-sm shadow-sm hover:shadow-inner shadow-secondary hover:shadow-secondary hover:bg-opacity-20 active:bg-shadow-inner active:bg-shadow-secondary md:text-lg lg:text-xl"
      >
        {currentCaption}{" "}
        <span className="inline-block text-lg pl-1">
          <FiChevronRight />
        </span>
      </button>
      <img
        src={currentImage}
        alt="Before and After Design Images"
        className="rounded-lg object-contain m-0 md:pr-20 md:max-h-[70dvh] max-md:max-h-[25dvh] will-change-auto md:container  max-w-fill max-h-fill"
        loading="lazy"
        quality={100}

      />
    </div>
  );
};

export default BeforeAfterCarousel;
