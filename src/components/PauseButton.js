import React from 'react';
import { FiPlay, FiPause } from "react-icons/fi"

const PauseButton = ({ isPaused, onClick }) => (
  <button
    onClick={onClick}
    className={`button self-center mt-5 p-3 ${
      isPaused 
      ? "bg-mywhite shadow-inner shadow-secondary blackHeader" 
      : "bg-secondary whiteHeader"
    }`}
  >
    {isPaused ? <FiPlay /> : <FiPause />}
  </button>
);

export default PauseButton;