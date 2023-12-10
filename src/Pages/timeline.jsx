// Timeline.jsx

import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isTimelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section');
      const timelineSectionTop = timelineSection.offsetTop;
      const timelineSectionHeight = timelineSection.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= timelineSectionTop && scrollPosition <= timelineSectionTop + timelineSectionHeight) {
        setTimelineVisible(true);

        const scrollPercentage = ((scrollPosition - timelineSectionTop) / timelineSectionHeight) * 100;
        const dotIndex = Math.floor(scrollPercentage / 20);
        setActiveDot(dotIndex);
      } else {
        setTimelineVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dots = [
    { id: 0, content: 'Content for Dot 1' },
    { id: 1, content: 'Content for Dot 2' },
    { id: 2, content: 'Content for Dot 3' },
    { id: 3, content: 'Content for Dot 4' },
    { id: 4, content: 'Content for Dot 5' },
  ];

  return (
    <div id="timeline-section" className="relative h-screen overflow-hidden bg-[#121212]">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute left-1/2 transform -translate-x-1/2 ${
            dot.id === activeDot ? 'w-8 h-8' : 'w-4 h-4'
          } bg-blue-500 rounded-full`}
          style={{
            top: `${dot.id * 20}%`,
            transform: isTimelineVisible ? `translateY(${dot.id * 20 - activeDot * 20}%)` : 'none',
            transition: isTimelineVisible ? 'transform 0.3s ease-in-out' : 'none',
          }}
        >
          <div className="absolute left-10 top-0">
            {dot.id === activeDot && <p>{dot.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
