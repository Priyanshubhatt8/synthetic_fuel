import React, { useState } from 'react';
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const ContactPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div 
        className={`bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-blue-500 max-w-sm w-full text-white transform transition-transform duration-500 ${isOpen ? 'scale-100' : 'scale-90'}`}
        style={{ transformOrigin: 'center' }}
      >
        <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Contact Us</h3>
        <p className="mb-4">Get in touch with us:</p>
        <p className="mb-2">Phone: +1-234-567-890</p>
        <p className="mb-2">Email: contact@zeusconsulting.com</p>
        <p className="mb-4">Office Locations:</p>
        <p className="mb-2">Headquarters: 123 Energy Lane, City, Country</p>
        <p>Regional Offices: Locations and contact details.</p>
        <button 
          onClick={onClose} 
          className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading title="Environmental Impact" />

        <div className="relative grid gap-6 md:grid-cols-1 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-gray-200"
              } transition-transform duration-300 hover:scale-105`}
              key={item.id}
            >
              <div className="relative p-8 bg-gray-800 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div>
                  <div>
                    {/* <Tagline>{item.date}</Tagline> */}

                    <div>
                      {/* <div className="tagline">{status}</div> */}
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15"></div>
                  <h4 className="text-xl font-semibold mb-4 text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              </div>
            </div>
          ))}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button 
            onClick={openPopup} 
            className=" text-white  transition-colors duration-200"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </Section>
  );
};

export default Roadmap;
