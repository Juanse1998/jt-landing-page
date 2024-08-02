import React, { useState, useEffect } from 'react';
import imgHead from './imgHead.png';
import './Header.css';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollLimit = 210;

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    setScrollY(Math.min(newScrollY, scrollLimit));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 md:py-20 relative overflow-hidden fixed w-full" style={{ minHeight: '550px' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 mt-20">
        <div className="flex flex-col items-center md:items-start md:ml-20 w-full md:w-6/12 lg:w-5/12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
            Servicios Odontológicos de Calidad
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6">
            Cuidamos tu sonrisa con los mejores tratamientos
          </p>
          <button className="bg-custom-pink hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Agenda una consulta
          </button>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-center justify-center w-full md:w-6/12 lg:w-7/12">
          <div className="contenedor flex items-center mb-4 md:mb-0 mr-14">
            <img src="./img-header-1.png" alt="imagen diente" className="imagen-diente w-24 md:w-32 lg:w-40 max-w-full" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src="./img-header2.png"
              alt="imagen diente"
              style={{ transform: `translateY(${scrollY * 0.4}px)` }}
              className="w-24 md:w-32 lg:w-40 max-w-full mb-4 md:mb-0"
            />
            <img src="./img-header-3.png" alt="imagen diente" className="imagen-diente w-24 md:w-32 lg:w-40 max-w-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
