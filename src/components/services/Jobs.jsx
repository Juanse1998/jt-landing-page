import React from 'react';
import data from './services.json';
import Card from './Card';

const Jobs = () => {
  return (
    <div id="services" className="bg-white-600 py-20">
      <div className="flex justify-center mb-12">
        <div className="text-center mr-4">
          <section className="text-3xl font-bold text-white-200">
            <span className="text-black">Nuestros</span> 
            <strong className="text-pink-500"> Servicios</strong>
          </section>
        </div>
        <div className="border-b-2 border-gray-400 my-2 w-7/12" />
      </div>
      <div className="container mx-auto px-4 w-10/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.services.map((serv) => (
            <Card key={serv.id} services={serv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
