import Accordion from '../Components/Accordian';
import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function Faqs() {
  const [list, setList] = useState([
    {
      question: "What are the perks of attending Innerve 7 ?",
      answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
    },
    {
      question: "What are the perks of attending Innerve 7 ?",
      answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
    },
    {
      question: "What are the perks of attending Innerve 7 ?",
      answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
    },
    {
      question: "What are the perks of attending Innerve 7 ?",
      answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='bg-[#F9F0E7] h-screen  flex justify-center items-center'>
        <div className="flex text-[#121212] flex-col">
        <Heading title="FAQs" />
        </div>
      <div className='list'>
        {list.map((item, index) => (
          <Accordion
            key={index}
            datas={item}
            isActive={index === activeIndex}
            onToggle={() => toggleActive(index)}
          />
        ))}
      </div>
    </div>
  );
}

const Heading = ({ title }) => {
    return (
        <div className="text-center flex  mt-14 font-medium text-[36px] text-black whitespace-nowrap">
            <div className="tracking-tight ttext-black bg-clip-text whitespace-nowrap">
                {title}
            </div>
        </div>
    );
};

export default Faqs;
