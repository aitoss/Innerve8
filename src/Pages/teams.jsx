import React from 'react'

const Teams = () => {
  return (
    <>
      <section className="h-full w-screen">
        <Nav />
        <Heading />

      </section>


    </>
  )
}


const Heading = () => {
  return (
    <div className="text-center lg:block hidden tracking-[8px] font-medium text-[150px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <div className=" translate-y-[-120px] tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#222121] to-[#525252] whitespace-nowrap">
        Team
      </div>
    </div>
  );
};


export default Teams