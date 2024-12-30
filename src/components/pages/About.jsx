import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  const downloadCV = () => {
    // Replace with the actual URL to your CV
    const url = "/Densingh-Resume.pdf"; // Place your CV file in the public folder
    const link = document.createElement("a");
    link.href = url;
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' className="user"/>
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button onClick={downloadCV}>Download CV</button>
                <button
                    className="primaryBtn"
                    onClick={downloadCV}
                  >
                    Download CV
                  </button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
