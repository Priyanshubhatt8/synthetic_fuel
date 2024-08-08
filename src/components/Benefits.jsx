import { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  const [view, setView] = useState("current"); // "current" or "past"

  // Filter benefits based on the selected view
  const filteredBenefits = benefits.filter((item) =>
    view === "current" ? item.title.includes("Current Project") : item.title ? item.title!=="Current Project":item.title
  );

  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our projects" />

        <div className="flex justify-center mb-10">
          <button
            className={`px-4 py-2 mx-2 text-lg font-medium text-white transition-all duration-300 ${view === "current" ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"}`}
            onClick={() => setView("current")}
          >
            Current Project
          </button>
          <button
            className={`px-4 py-2 mx-2 text-lg font-medium text-white transition-all duration-300 ${view === "past" ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"}`}
            onClick={() => setView("past")}
          >
            Past Projects
          </button>
        </div>

        <div className="flex   flex-wrap gap-10 mb-10">
          {filteredBenefits.map((item) => (
            <div
              className="block  relative p-0.5 bg-no-repeat bg-[length:100%_100%] flex-1"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative  z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 ">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
