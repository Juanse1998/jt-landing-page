import React from 'react';
import imgHead from './imgHead.png';

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10">
      <div className="container mt-24 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start md:ml-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Servicios Odontológicos de Calidad
          </h2>
          <p className="text-md md:text-lg lg:text-xl mb-6">
            Cuidamos tu sonrisa con los mejores tratamientos
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Agenda una consulta
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:mr-12">
          <img className="w-full max-w-sm drop-shadow-2xl rounded-lg" src={imgHead} alt="imagen head" />
        </div>
      </div>
    </header>
  );
};

export default Header;
