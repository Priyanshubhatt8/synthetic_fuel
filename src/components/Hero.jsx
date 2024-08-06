import { curve, heroBackground, robot } from "../assets";
import zeus from "../assets/hero/Zeus.png"
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
    <h1 className="h1 mb-6">
        Welcome to Zeus Consulting {` `}
        <span className="inline-block relative">
        
        </span>
    </h1>
    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-white">
        Your partner in driving innovative energy solutions. Our mission is to leverage our expertise in business analysis, project management, and strategic partnerships.
    </p>
</div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">

            <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
  <img
    src={robot}
    className="w-full h-full object-cover md:object-contain md:h-auto scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] opacity-80 rounded-[0.9rem]"
    width={1024}
    height={490}
    alt="Syntheticfuel"
  />

  <img
    src={zeus}
    className="absolute inset-0 w-[30%] h-[30%] mb-72 m-auto object-contain"
    width={200}
    height={200}
    alt="Zeus"
  />
  {/* Text below the Zeus image */}
  <div className="absolute inset-x-0 bottom-40 text-center text-white text-2xl font-bold">
    Show us your dreams and we’ll figure out how to make them come true
  </div>

  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
</div>




            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full opacity-100"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
