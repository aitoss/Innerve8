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
      <div className="bg-[#F9F0E7] flex flex-row h-screen">
        <div className="flex text-[#121212] items-start space-y-[66px] mt-[80px] lg:ml-[200px] flex-col">
          <Heading title="FAQs" />
          <Button label="General" onClick={() => setActiveList('general')} />
          <Button label="Stay" onClick={() => setActiveList('stay')} />
          <Button label="Travel" onClick={() => setActiveList('travel')} />
          <Button label="Expenses" onClick={() => setActiveList('expenses')} />
        </div>
        <div className='bg-[#F9F0E7] h-screen lg:ml-[180px] flex justify-center items-center'>
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
    </>
  );
}

const Heading = ({ title }) => {
  return (
    <div className="text-center flex mt-14 font-medium text-[60px] text-black whitespace-nowrap">
      <div className="tracking-tight ttext-black bg-clip-text whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 w-[150px] items-start hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Faqs;