
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold mb-4 uppercase">Expert Structural Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for moving, raising, and supporting buildings of all sizes across MS & LA.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="border border-gray-100 p-10 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-heading text-2xl font-bold mb-4 text-brand-blue">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <h4 className="font-bold text-sm uppercase tracking-widest text-brand-gold mb-4">What we handle:</h4>
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-brand-gold mr-3">▶</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
             <h2 className="font-heading text-3xl font-bold mb-4">Precision Equipment, Proven Methods</h2>
             <p className="text-gray-600 text-lg">
               We utilize synchronized hydraulic jacking systems and heavy-duty steel beam dollies to ensure structural integrity remains perfectly preserved during every inch of travel.
             </p>
           </div>
           <div className="shrink-0">
             <img src="https://picsum.photos/seed/trucks/400/300" alt="Moving Equipment" className="rounded-xl shadow-lg w-full max-w-xs" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
