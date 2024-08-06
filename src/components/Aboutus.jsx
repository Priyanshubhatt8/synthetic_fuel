import React from "react";
import { curve } from "../assets";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Aboutus = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[12rem] " id="2">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            About Us{" "}

          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Zeus Consulting is a leading firm specializing in business analysis, project management, and strategic partnerships. With a team of experts in various fields, we are committed to delivering robust solutions for complex projects.
          </p>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Our mission is to drive innovation and sustainability in the energy sector through comprehensive consulting services and strategic partnerships. We envision a future where sustainable energy solutions are at the forefront of global progress.
          </p>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Our services provide comprehensive solutions for you:
          </p>
          <ul className="list-disc list-inside max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            <li>Business Analysis</li>
            <li>Project Management</li>
            <li>Research and Development</li>
            <li>Strategic Partnerships</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Aboutus;
