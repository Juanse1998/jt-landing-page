import React from 'react';

const ConsultationBanner = () => {
  return (
    <div className="bg-gradient-to-l from-blue-500 to-blue-100 p-8 flex flex-col md:flex-row items-center">
      {/* Imagen */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={process.env.PUBLIC_URL + "/images/smilepng05.webp"}
          alt="Consulta Online"
          className="w-48 h-auto md:w-96 drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 10px rgba(0, 0, 0, .6))",
            boxShadow: "(0 0 85px #e0e0e0)"
          }}
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold text-white" style={{ textShadow: '2px 1px 9px pink', fontFamily: 'Mooli'}}>
          CONSULTA GRATUITA ONLINE
        </h1>
        <div className="flex space-x-4 justify-center md:justify-start">
          <p className="text-lg md:text-xl text-gray-700 font-semibold mt-1">
            Con nuestra doctora
          </p>
          <a href="#" className="text-3xl text-white hover:text-gray-600">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner;
