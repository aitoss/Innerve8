import Accordion from '../Components/Accordian';
import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function Faqs() {
  const [generalList, setGeneralList] = useState([
    {
      question: "What are the perks of attending Innerve 7?",
      answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
    },
    {
        question: "What are the perks of attending Innerve 7?",
        answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
      },
      {
        question: "What are the perks of attending Innerve 7?",
        answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
      },
      {
        question: "What are the perks of attending Innerve 7?",
        answer: "Sessions with the top experts in their fields, a 24-hour hackathon with incredible problems, and rewards Swags and Goodies. C'mon, still need more?",
      },
  
  ]);

  const [stayList, setStayList] = useState([
    {
      question: "Where can I stay during Innerve 7?",
      answer: "We have partnered with several hotels nearby. You can find more information on our accommodation page.",
    },
    {
        question: "Where can I stay during Innerve 7?",
        answer: "We have partnered with several hotels nearby. You can find more information on our accommodation page.",
      },
      {
        question: "Where can I stay during Innerve 7?",
        answer: "We have partnered with several hotels nearby. You can find more information on our accommodation page.",
      },
      {
        question: "Where can I stay during Innerve 7?",
        answer: "We have partnered with several hotels nearby. You can find more information on our accommodation page.",
      },
 
  ]);

  const [travelList, setTravelList] = useState([
    {
      question: "What travel arrangements are available?",
      answer: "We recommend checking our travel guide for information on transportation options.",
    },
    {
        question: "What travel arrangements are available?",
        answer: "We recommend checking our travel guide for information on transportation options.",
      },
      {
        question: "What travel arrangements are available?",
        answer: "We recommend checking our travel guide for information on transportation options.",
      },
      {
        question: "What travel arrangements are available?",
        answer: "We recommend checking our travel guide for information on transportation options.",
      },
  ]);

  const [expensesList, setExpensesList] = useState([
    {
      question: "What expenses are covered?",
      answer: "Innerve 7 covers registration fees",
    },
    {
        question: "What expenses are covered?",
        answer: "Innerve 7 covers registration fees",
      },
      {
        question: "What expenses are covered?",
        answer: "Innerve 7 covers registration fees",
      },
      {
        question: "What expenses are covered?",
        answer: "Innerve 7 covers registration fees",
      },
 
  ]);


  
  const [activeList, setActiveList] = useState(generalList);

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

  const renderActiveList = () => {
    switch (activeList) {
      case 'stay':
        return stayList;
      case 'travel':
        return travelList;
      case 'expenses':
        return expensesList;
      default:
        return generalList;
    }
  };

  return (
    <>
    <div className="h-screen bg-[#F9F0E7] ">
      <Heading title="FAQs" />
      <HeadingMobile title="FAQs"/>
      <div className=" flex flex-col items-center justify-center lg:mt-16  w-screen lg:flex-row ">
      <div className="flex text-[#121212] lg:ml-[50px] mt-8 items-center justify-center space-x-[6px] lg:flex-col lg:space-y-[70px]">


  <Button label="General" onClick={() => setActiveList('general')} isActive={activeList === 'general'} />
        <Button label="Stay" onClick={() => setActiveList('stay')} isActive={activeList === 'stay'} />
        <Button label="Travel" onClick={() => setActiveList('travel')} isActive={activeList === 'travel'} />
        <Button label="Expenses" onClick={() => setActiveList('expenses')} isActive={activeList === 'expenses'} />

</div>
        <div className='bg-[#F9F0E7] w-screen pt-8 lg:ml-[120px] flex justify-center items-center'>
          <div className='list'>
            {renderActiveList().map((item, index) => (
              <Accordion
                key={index}
                datas={item}
                isActive={index === activeIndex}
                onToggle={() => toggleActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

const Heading = ({ title }) => {
  return (
      <div className="text-startflex hidden lg:block items-start mt-14 ml-[54px] font-medium text-7xl text-black whitespace-nowrap justify-start">
          <div className="tracking-tight text-black bg-clip-text whitespace-nowrap">
              {title}
          </div>
      </div>
  );
};


const Button = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`lg:w-[150px] items-center flex text-white font-bold py-1 px-2 rounded transition-colors duration-300 ease-in-out ${
        isActive ? 'bg-orange-300' : 'bg-[#DD6843]'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const HeadingMobile = ({ title }) => {
  return (
      <div className="text-center ml-[18px] pb-6 flex py-2 lg:hidden item-start justify-start  font-medium text-[36px] text-black whitespace-nowrap">
          <div className="tracking-tight ttext-black bg-clip-text whitespace-nowrap">
              {title}
          </div>
      </div>
  );
};

export default Faqs;