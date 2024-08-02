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
        <button className="bg-custom-pink hover:bg-pink-500 text-white py-2 px-4 font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
          Agenda una consulta
        </button>
      </div>
    </div>
  );
};

export default Nav;
