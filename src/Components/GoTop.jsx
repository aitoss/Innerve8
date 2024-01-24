import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 10;
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
          className="top-btn w-[2.5rem] h-[2.5rem] text-xl font-[400] text-[#fff] fixed bottom-2 right-2 z-[99] flex justify-center items-center cursor-pointer rounded-full p-3 m-3 bg-[#24292F] hover:bg-[#24292F] transition-all duration-500"
          onClick={goToBtn}
        >
          ↑
        </div>
      )}
    </div>
  );
};

export default GoToTop;
