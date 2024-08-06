import React from 'react';
import './Styles.css';


const Card = (props) => {
  return (
    <div className="card bg-white shadow-pink-medium rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-64 h-68 max-w-xs mx-auto">
      <div className="p-4 flex justify-center">
        <img className="rounded-full border-4 border-pink-300 object-cover" width={110} src={`${process.env.PUBLIC_URL}/${props.services.img}`} alt={props.services.title} />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{props.services.title}</h2>
        <p className="text-gray-600 text-sm text-center">{props.services.description}</p>
      </div>
    </div>
  );
};

export default Card;