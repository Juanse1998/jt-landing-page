import React from 'react';
import logoDiente from './logoDiente.png';

const Nav = () => {
  return (
    <div className="section-nav flex fixed w-full justify-between items-center h-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg z-50">
      <div className="section-logo flex items-center ml-10">
        <img src={logoDiente} alt="Logo Diente" width={50} className="drop-shadow-2xl" />
      </div>
      <div className="section-ref hidden md:flex ml-10">
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a className="hover:text-gray-300 transition duration-300" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300 transition duration-300" href="#">
                Servicios
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300 transition duration-300" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mr-10">
        <button className="text-l bg-custom-pink hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Agenda una consulta
        </button>
      </div>
    </div>
  );
};

export default Nav;
