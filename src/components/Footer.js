import React, { useState } from "react";
import { FiGithub, FiClipboard } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import FooterTab from "./FooterTab";

const Footer = () => {
  const [showNotification, setShowNotification] = useState(false);
  const email = "ellenuttley@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <footer className="group fixed dark:bg-secondary  dark:text-lightPurple dark:shadow-lightPurple dark:border-primary dark:border bottom-1 left-1 right-1 xl:left-20 xl:right-20 z-50 flex h-fit w-auto xl:translate-y-[80%] xl:transform flex-row justify-evenly rounded-md bg-mywhite pb-2 pt-2 font-lexend border-darkPrimary border-2  text-secondary shadow-sm shadow-secondary xl:transition-transform xl:duration-300 xl:hover:translate-y-0">
      <a
        href="https://github.com/ellenuttley/ellenuttley.com"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-icon"
      >
        <FiGithub size="22" className="md:mr-2 " />
        <span className="hidden md:inline">View the code for this site</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ellenuttley"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-icon"
      >
        <FaLinkedinIn size="22" className="md:mr-2" />
        <span className="hidden md:inline">Visit my LinkedIn</span>
      </a>
      <div className="sidebar-icon" onClick={copyToClipboard}>
        <FiClipboard size="22" className="mr-2" />
        <span className="">{email}</span>
        {showNotification && (
          <div className="absolute  rounded bg-primary px-2 py-1 text-xs text-mywhite shadow-sm dark:bg-darkPrimary">
            Email copied to clipboard!
          </div>
        )}
      </div>
      <div className="fixed -top-3 left-5 hidden xl:block z-10">
				<FooterTab />
			</div>
    </footer>
  );
};

export default Footer;
