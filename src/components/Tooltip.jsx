import { useState } from "react";

const Tooltip = ({ children, text, link }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute top-full mt-2 w-48 bg-gray-800 text-white text-center py-2 rounded shadow-lg">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
