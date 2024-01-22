import React from 'react'
import classNames from 'classnames';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import one from "../assets/images/3.jpg"

const Teams = () => {
  return (
    <>

    <section className="bg-[#121212]">
    <div className="flex flex-col w-full lg:ml-24 max-auto lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-5xl leading-normal md:leading-relaxed mb-2 ">
                Team 010
              </p>
       
              </div>
      <div className="flex justify-center mx-auto items-center flex-wrap md:flex-row flex-col">
      <Card
        name="Harshal Patil" 
        githubLink="https://github.com/Harshal141"
        linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
        instagramLink="https://www.instagram.com/harshal_patil_141/"
        imgSrc={one}
        designation="Sec"
      />

<Card
        name="Harshal Patil"
        githubLink="https://github.com/Harshal141"
        linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
        instagramLink="https://www.instagram.com/harshal_patil_141/"
        imgSrc={one}
        designation="Sec"
      />
 <Card
        name="Harshal Patil" 
        githubLink="https://github.com/Harshal141"
        linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
        instagramLink="https://www.instagram.com/harshal_patil_141/"
        imgSrc={one}
        designation="Sec"
      />

<Card
        name="Harshal Patil"
        githubLink="https://github.com/Harshal141"
        linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
        instagramLink="https://www.instagram.com/harshal_patil_141/"
        imgSrc={one}
        designation="Sec"
      /> <Card
      name="Harshal Patil" 
      githubLink="https://github.com/Harshal141"
      linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
      instagramLink="https://www.instagram.com/harshal_patil_141/"
      imgSrc={one}
      designation="Sec"
    />

<Card
      name="Harshal Patil"
      githubLink="https://github.com/Harshal141"
      linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
      instagramLink="https://www.instagram.com/harshal_patil_141/"
      imgSrc={one}
      designation="Sec"
    /> <Card
    name="Harshal Patil" 
    githubLink="https://github.com/Harshal141"
    linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
    instagramLink="https://www.instagram.com/harshal_patil_141/"
    imgSrc={one}
    designation="Sec"
  />

<Card
    name="Harshal Patil"
    githubLink="https://github.com/Harshal141"
    linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
    instagramLink="https://www.instagram.com/harshal_patil_141/"
    imgSrc={one}
    designation="Sec"
  /> <Card
  name="Harshal Patil" 
  githubLink="https://github.com/Harshal141"
  linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
  instagramLink="https://www.instagram.com/harshal_patil_141/"
  imgSrc={one}
  designation="Sec"
/>

<Card
  name="Harshal Patil"
  githubLink="https://github.com/Harshal141"
  linkedinLink="https://www.linkedin.com/in/harshal-patil-5aa948221/"
  instagramLink="https://www.instagram.com/harshal_patil_141/"
  imgSrc={one}
  designation="Sec"
/>

        </div>


    </section>
      
    </>
  );
};

const Card = ({ name, githubLink, linkedinLink, instagramLink, imgSrc, designation }) => {


  return (
    <div className="flex flex-col justify-center px-10 p-16 w-full  items-center relative round-xl max-w-[400px] mx-4">
      {imgSrc && <img src={imgSrc} alt={`${name}'s profile`} className="w-full h-[360px] round-xl object-cover" />}

      <div className="absolute mt-[240px] mr-[180px] flex flex-col justify-center items-start">
        <p className="text-[#C1C1C1] text-[20px] ">{name}</p>
        <p className="text-[#A1A1A1] text-[16px] ">{designation}</p>
        <div className="flex flex-row justify-center pt-4 items-start">
          <a className="p-1" href={githubLink}>
            <FaGithub className="text-[#dfdfdf]"/>
          </a>
          <div className="p-1">
            <a className="ml" href={linkedinLink}>
              <FaLinkedinIn className="text-[#dfdfdf]" />
            </a>
          </div>
          <a className="p-0.5 mt-0.5" href={instagramLink}>
            <FaInstagram className="text-[#dfdfdf]" />
          </a>
        </div>
      </div>
    </div>
  );
};





export default Teams