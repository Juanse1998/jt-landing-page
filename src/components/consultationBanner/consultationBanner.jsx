import React from 'react';

const ConsultationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-blue-200 p-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
        <img src="./smilepng05.png" alt="Consulta Online" className="w-48 h-auto md:w-96" />
      </div>
      <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-96 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">CONSULTA GRATUITA ONLINE</h1>
        <p className="text-lg md:text-xl text-gray-700">Con nuestra doctora</p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a href="#" className="text-3xl text-gray-900 hover:text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-3xl text-gray-900 hover:text-gray-600">
            <i className="fas fa-phone-alt"></i>
          </a>
          <a href="#" className="text-3xl text-gray-900 hover:text-gray-600">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner;