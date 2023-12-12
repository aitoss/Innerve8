import Accordion from '../Components/Accordian';
import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function Faqs() {
  const [generalList, setGeneralList] = useState([
    {
      question: "What are the main highlights of Innerve8?",
      answer: "Innerve 8 features sessions with top experts, a 24-hour hackathon with challenging problems, exciting swags, and goodies for participants.",
    },
    {
      question: "Can you provide more details about the hackathon phases?",
      answer: "Phase 1, the Idea Submission Round, will be conducted online, while Phase 2, the Building Round, will take place offline at the AIT Campus.",
    },
    {
      question: "Who is eligible to participate in Innerve8?",
      answer: "Innerve 8 welcomes participants with a passion for coding and problem-solving skills.",
    },
    {
      question: "What kind of prizes can participants expect?",
      answer: "Prizes include cash rewards, goodies, certificates, and special surprises for the winners.",
  }]);
  
  const [stayList, setStayList] = useState([
    {
      question: "Where can participants find accommodation during Innerve8?",
      answer: "We have partnered with several nearby hotels. Detailed information is available on our accommodation page.",
    },
    {
      question: "Is lodging available on the AIT campus?",
      answer: "Yes, participants can find lodging directly on the AIT campus, ensuring convenience during the event.",
    },
    {
      question: "Are there any recommended hotels for participants?",
      answer: "Yes, we recommend checking our accommodation page for a list of partnered hotels with special rates for Innerve 8 participants.",
    },
    {
      question: "How can participants book accommodation for Innerve8?",
      answer: "Participants can book accommodation through our official website or by following the instructions on the accommodation page.",
  }]);
  
  const [travelList, setTravelList] = useState([
    {
      question: "What transportation options are recommended for participants?",
      answer: "We advise participants to refer to our travel guide for comprehensive information on available transportation options.",
    },
    {
      question: "Is there a shuttle service available between the AIT Campus and recommended hotels?",
      answer: "Yes, a shuttle service will be provided to facilitate transportation between the AIT Campus and partnered hotels.",
    },
    {
      question: "Are there any discounts available for travel arrangements?",
      answer: "Participants may find special discounts on transportation options by referring to our travel guide or contacting our travel partners.",
    },
    {
      question: "Can participants use public transportation to reach the AIT Campus?",
      answer: "Yes, public transportation options are available, and details can be found in our travel guide for Innerve 8.",
  }]);
  
  const [expensesList, setExpensesList] = useState([
    {
      question: "What fees does Innerve 8 cover for participants?",
      answer: "Innerve 8 covers the registration fees for all participants, ensuring a seamless experience for attendees.",
    },
    {
      question: "Are travel-related expenses reimbursable for participants?",
      answer: "The OSS Club offers financial support to cover or partially reimburse travel expenses for participants.",
    },
    {
      question: "How can participants claim reimbursement for travel expenses?",
      answer: "Participants can follow the reimbursement process outlined on our website or contact the OSS Club for assistance.",
    },
    {
      question: "Is financial assistance available for participants facing travel-related challenges?",
      answer: "Yes, participants experiencing difficulties with travel expenses can reach out to the OSS Club for potential financial assistance or alternative solutions.",
  }]);


  const [activeList, setActiveList] = useState('general');
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
    <div className="h-full bg-[#F9F0E7] ">
      <Heading title="FAQs" />
      <HeadingMobile title="FAQs"/>
      <div className=" flex flex-col items-center justify-center   w-screen lg:flex-row ">
      <div className="flex text-[#121212] lg:ml-[36px] border-none px-3  lg:mt-8 mt-2 items-center justify-center gap-2 lg:flex-col lg:space-y-[70px]">


  <Button label="General" onClick={() => setActiveList('general')} isActive={activeList === 'general'} />
        <Button label="Stay" onClick={() => setActiveList('stay')} isActive={activeList === 'stay'} />
        <Button label="Travel" onClick={() => setActiveList('travel')} isActive={activeList === 'travel'} />
        <Button label="Expenses" onClick={() => setActiveList('expenses')} isActive={activeList === 'expenses'} />

</div>
        <div className='bg-[#F9F0E7] w-screen lg:pt-12 pt-6 lg:ml-[120px] flex justify-center items-center'>
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


const Button = ({ label, onClick, isActive = true}) => {
  return (
    <button
      className={`lg:w-[150px] items-center text-[18px] lg:text-[20px] rounded-[4px] flex text-white font-bold py-2 border-none none lg:px-3 px-2 transition-colors duration-300 ease-in-out ${
        isActive ? 'bg-gradient-to-r from-[#DD6843] via-[#F0A36D] to-[#DD6843] no-underline border-none' : 'bg-gradient-to-r from-[#DD6843] via-[#F0A36D] to-[#DD6843]  no-underline border-none opacity-60 '
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const HeadingMobile = ({ title }) => {
  return (
      <div className="text-center ml-[18px] pb-4 flex py-2 lg:hidden item-start justify-start  font-medium text-[54px] text-black whitespace-nowrap">
          <div className="tracking-tight ttext-black bg-clip-text whitespace-nowrap">
              {title}
          </div>
      </div>
  );
};

export default Faqs;