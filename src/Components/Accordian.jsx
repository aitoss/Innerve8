import React from "react";
import { MdOutlineStar } from "react-icons/md";

const Accordion = (props) => {
  const { datas, isActive, onToggle } = props;

  return (
    <div
      className={`w-[60vw] p-5 bg-[#e9e9e9]  border border-[#c9c6c655] text-[#121212] rounded-md mb-5 duration-500 group ${
        isActive ? 'is-active bg-white' : ''
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center">
        <div className="w-full group-[.is-active]:font-medium">
          {datas.question}
        </div>
        <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]">
          <MdOutlineStar />
        </div>
      </div>
      <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
        {datas.answer}
      </div>
    </div>
  );
};

export default Accordion;
