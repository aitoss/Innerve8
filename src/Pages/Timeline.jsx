import React from 'react';
import DarkSlider from '../Components/darkSlider';

const Timeline = () => {
  return (
    <>
      <section>
        <div className="bg-[#121212] text-white py-8">
        <DarkSlider text={['Timeline']} />
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">Timeline</p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Dive deep</p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to Innerve 8. Go through all the steps.
              </p>
              <a
                href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Know more
              </a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border" style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border" style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021, and the results will be
                        announced on the WhatsApp groups and will be mailed to you.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021, and the results will be
                        announced on the WhatsApp groups and will be mailed to you.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>



                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021, and the results will be
                        announced on the WhatsApp groups and will be mailed to you.
                      </p>
                    </div>
                  </div>


                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">9-10 Feb, 2024</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses, and the winning goodies will be sent
                        to their addresses.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
