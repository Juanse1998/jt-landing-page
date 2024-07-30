import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-64 h-68 max-w-xs mx-auto">
      <div className="p-4 flex justify-center">
        <img className="h-24 rounded-t-lg" width={90} src={props.services.img} alt={props.services.title} />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{props.services.title}</h2>
        <p className="text-gray-600 text-sm text-center">{props.services.description}</p>
      </div>
    </div>
  );
};

export default Card;