import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll = window.scrollY || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex justify-center items-center relative">
    {isVisible && (
      <div
        className="top-btn fixed bottom-5 right-5 z-[99999999] flex justify-center items-center cursor-pointer p-4 m-4 bg-[#121212] border-1 rounded-full"
        onClick={goToBtn}
      >
        <FaArrowUp className="top-btn--icon animate-gototop " />
      </div>
    )}
  </div>
  );
};

export default GoToTop;
