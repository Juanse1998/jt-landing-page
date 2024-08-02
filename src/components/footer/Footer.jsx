import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="shadow rounded h-40 pt-10 mt-20"
    style={{backgroundImage: "url('/footerBg.svg')",  backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll',   backgroundPosition: '20% 80%', }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between ">
        <div className="flex">
          <p className="flex items-center text-black-500 font-bold">© 2024 JT Odontologia. Todos los derechos reservados.</p>
          {/* <p className="text-xs text-black-500">Desarrollador por Juan Segundo Sosa</p> */}
          {/* <p className="text-xs text-black-500">Contacto: <a href="mailto:juansesosa98@gmail.com" className="text-indigo-600 hover:underline">juansesosa98@gmail.com</a></p> */}
        </div>
        <div className="flex items-center space-x-4 ">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
