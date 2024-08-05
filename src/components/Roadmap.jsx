import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading  title="Environmental Impact" />

      <div className="relative grid gap-6 md:grid-cols-1 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
             
                <div >
                  <div >
                    {/* <Tagline>{item.date}</Tagline> */}

                    <div >
                     
                      {/* <div className="tagline">{status}</div> */}
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                  
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Contact US</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
