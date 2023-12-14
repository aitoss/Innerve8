import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Accordion = (props) => {
  const { datas, isActive, onToggle } = props;

  return (
    <div
      className={`p-2 lg:p-4 border-b-[1px] lg:border-b-[1px] border-[#121212] text-[#121212]  mb-6 duration-500 group ${
        isActive ? 'is-active ' : ''
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center">
        <div className="w-full text-[20px] py-2 group-[.is-active]:font-medium ">
          {datas.question}
        </div>
        <div className="text-2xl cursor-pointer duration-500 group-[.is-active]:rotate-[180deg]">
        <IoIosArrowDropdownCircle />
      </div>
      </div>
      <div className="overflow-hidden text-[#878787] text-[20px] duration-500 max-h-0 group-[.is-active]:max-h-[150px]">
        {datas.answer}
      </div>
    </div>
  );
};

export default Accordion;
