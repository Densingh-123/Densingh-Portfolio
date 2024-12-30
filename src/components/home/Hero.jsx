import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

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
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent" key={i}>
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button
              className="primaryBtn"
              data-aos="fade-up-right"
              onClick={downloadCV}
            >
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
