import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-full max-w-xs mx-auto">
      <div className="p-4 flex justify-center">
        <img className="h-32 object-cover rounded-t-lg" src={props.services.img} alt={props.services.title} />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{props.services.title}</h2>
        <p className="text-gray-600 text-sm">{props.services.description}</p>
      </div>
    </div>
  );
};

export default Card;