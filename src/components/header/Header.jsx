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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4" style={{ textShadow: '2px 1px 1px black'}}>
            SONRISAS SALUDABLES Y FELICES COMIENZAN AQUÍ
            {/* Servicios Odontológicos de Calidad */}
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6">
            Cuidamos tu sonrisa con los mejores tratamientos
          </p>
          <button className="bg-custom-pink hover:bg-pink-500 text-white py-2 px-4 font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
            Agenda una consulta
          </button>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-center justify-center w-full md:w-6/12 lg:w-7/12">
          <div className="contenedor flex items-center mb-4 md:mb-0 mr-14">
            <img src="./img-header-1.png" alt="imagen diente" className="imagen-diente w-24 md:w-32 lg:w-40 max-w-full"
            style={{filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'}} />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src="./img-header2.png"
              alt="imagen diente"
              style={{ transform: `translateY(${scrollY * 0.4}px)`, filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))' }}
              className="w-24 md:w-32 lg:w-40 max-w-full mb-4 md:mb-0 z-10"
            />
            <img src="./img-header-3.png" alt="imagen diente" className="imagen-diente w-24 md:w-32 lg:w-40 max-w-full"
            style={{filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
