import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="Implementation">
      <div className="container">
        <Heading
          title="Implementation Strategy"
          text="Project Planning"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className=" h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Project Planning</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Business Analysis Approach: Detailed assessment and strategic planning.
Lifecycle Management: Effective management of project lifecycles from initiation to completion.
Stakeholder Engagement: Engaging stakeholders to ensure project alignment with goals.
              </p>
              
                 
              <h4 className="h4 mb-4"> Market Leadership </h4>
              <p className="body-2 mb-[3rem] text-n-3">
              By embracing advanced technologies and sustainable practices, TC Energy can position itself as a market leader. This positioning will help attract new business opportunities and partnerships, further cementing its status in the industry.
                </p>
            




              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Compliance Assurance </h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Continuous compliance monitoring guarantees adherence to industry standards and environmental regulations. This proactive approach reduces the risk of non-compliance penalties, enhancing TC Energy's reputation and safeguarding against potential legal issues.
              </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                   
              <h4 className="h4 mb-4">Sustainable Practices </h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Ensuring the quality and sustainability credentials of raw materials, coupled with optimized inventory management, enables TC Energy to reduce its environmental footprint. Promoting sustainable practices not only meets regulatory requirements but also resonates with increasingly eco-conscious consumers.              </p>

              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
