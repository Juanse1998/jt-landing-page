import React from 'react';
import data from './services.json';
import Card from './Card';

const Jobs = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Nuestros Servicios</h1>
      </div>
      <div className="container mx-auto px-4">
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
