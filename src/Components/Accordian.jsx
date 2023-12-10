import React from "react";
import { MdOutlineStar } from "react-icons/md";

const Accordion = (props) => {
  const { datas, isActive, onToggle } = props;

  return (
    <div
      className={`w-[60vw] p-4  border-b-2 border-black text-[#121212]  mb-5 duration-500 group ${
        isActive ? 'is-active ' : ''
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center">
        <div className="w-full text-[18px] py-2 group-[.is-active]:font-medium">
          {datas.question}
        </div>
        <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]">
          <MdOutlineStar />
        </div>
      </div>
      <div className="overflow-hidden text-[#878787] text-[20px] duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
        {datas.answer}
      </div>
    </div>
  );
};

export default Accordion;
