import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contáctanos</h1>
        <p className="text-lg text-gray-600 mb-12">
          ¿Tienes alguna pregunta o necesitas más información? No dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:flex-1 bg-pink-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información de Contacto</h2>
            <h4 className="text-gray-700 mb-4">
              <strong>Dra. Jorgelina Torres</strong>
            </h4>
            <p className="text-gray-700 mb-4">
              <strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Teléfono:</strong> +123 456 789
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> contacto@example.com
            </p>
          </div>
          <div className="md:flex-1 mt-8 md:mt-0 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envíanos un Mensaje</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Tu mensaje"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
