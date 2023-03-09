import { useState } from "react";

const Card = ({ title, description, html, link, date }) => {
  const [hovered, setHovered] = useState(false);

  const cardClasses = `max-w-sm rounded overflow-hidden shadow-lg m-4 ${hovered ? "shadow-lg hover:shadow-2xl border-blue-500 transition duration-400" : "shadow"
    }`;

  return (
    <div className={cardClasses} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: html || description }} />
          <div className="text-gray-500 py-4 text-sm">{date}</div> {/* new date prop */}
        </div>
        <div className="px-2 pb-2">
          <a href={link} target='_blank'>
            <button className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </a>
        </div>
      </div>
      );
};

      export default Card