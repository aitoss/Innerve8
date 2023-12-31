import React from 'react';
import DarkSlider from '../Components/darkSlider';
import HeadingMainBlack from '../Components/HeadingMainBlack';
const Timeline = () => {
  return (
    <>
      <section>
        <div className="bg-[#121212] text-white relative py-4">
          <DarkSlider text={['Timeline']} />
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-5xl leading-normal md:leading-relaxed mb-2">Dive deep</p>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Here’s your guide to Innerve 8. Go through all the steps.
              </p>
              {/* <a
                href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Know more
              </a> */}
              <img src="/images/V5.png" alt="" />
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-[#F5AEDD] absolute h-full border transition-opacity duration-300"
                    style={{
                      right: '50%',
                      border: '2px solid #F5AEDD',
                      borderRadius: '1%',
                      background: 'var(--pink, linear-gradient(to left, #743ad5, #d53a9d)',
                    }}
                  >

                  </div>
                  <div
                    className="border-2-2 border-[#F5AEDD] absolute h-full border transition-opacity duration-300"
                    style={{
                      right: '50%',
                      border: '2px solid #F5AEDD',
                      borderRadius: '1%',
                      background: 'var(--pink, linear-gradient(to left, #743ad5, #d53a9d)',
                    }}
                  ></div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text- text-[#D9D9D9]">15 Dec, 2023</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Registration Starts</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Secure your spot starting December 15, 2023, at 12:00 AM IST. Join us for an exciting 24-hour hackathon by registering early!
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-xl text-[#D9D9D9]">15 Jan, 2024</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Registration Ends</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Last date to register for the hackathon!. Don't miss out on this opportunity—finalize your participation before it's too late!                      </p>

                    </div>
                  </div>


                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">25 Jan, 2024</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Pre-Innerve Game-1</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Embark on an exciting Pre-Innerve game designed exclusively for first-year students!
                      </p>
                    </div>
                  </div>

                  <div className="border-white hover:border-black no-underline">
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4">
                        <p className="mb-3 text-xl text-[#D9D9D9]">25 Jan, 2024</p>
                        <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">Pre-Innerve Game-2</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Embark on an exciting Pre-Innerve game designed exclusively for first-year students!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-xl text-[#D9D9D9]">25 Jan, 2024</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Pre-Innerve Game-3</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Embark on an exciting Pre-Innerve game designed exclusively for first-year students!
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-xl text-[#D9D9D9]">9 Feb, 2024 8:00 AM - 9:00 AM</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Participant Check-in and Onboarding</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Engage in a warm welcome, thorough orientation, and the distribution of essential welcome kits as we kick off the hackathon experience.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-xl text-[#D9D9D9]">9 Feb, 2024 10:00 AM - 11:00 AM</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-right">Speaker Session</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Elevate your knowledge with a brief, impactful speaker session—an opportunity for inspiration and insights from industry leaders. 
                      </p>
                    </div>
                  </div>

                  <div className="border-white hover:border-black no-underline">
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4">
                        <p className="mb-3 text-xl text-[#D9D9D9]">9 Feb, 2024 05:00 PM - 07:00 PM</p>
                        <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">Mentorship Session</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                        Get personalized guidance from experienced mentors in a dedicated session.                        </p>
                      </div>
                    </div>
                  </div>




                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">10 Feb, 2024 12:00 AM</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Midnight Jam and Energizer</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Fuel your creativity with our Midnight Jam—a lively session featuring energizing activities and music.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">10 Feb, 2024 10:00 AM</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">Coding hours end</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Wrap up your coding journey, take a breather, and gear up for the project submission phase.
                      </p>
                    </div>
                  </div>



                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-xl text-[#D9D9D9]">10 Feb, 2024 12:00 PM - 3:00 PM</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl">Judging Round</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      Step into the spotlight as you present your projects in the judging round. Showcase your innovation.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-xl text-[#D9D9D9]">10 Feb, 2024 5:00 PM</p>
                      <h4 className="mb-3 font-medium text-lg md:text-2xl text-left">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                      The moment you've been waiting for is here! Discover the hackathon winners and celebrate the outstanding achievements of participants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="flex relative justify-center">
            <HeadingMainBlack name="Timeline" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
