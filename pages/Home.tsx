
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent z-10"></div>
        {/* Using a structural house move image */}
        <img 
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" 
          alt="Large structural house being lifted by hydraulic equipment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-1 w-12 bg-brand-gold"></span>
              <span className="font-bold text-brand-gold uppercase tracking-[0.3em] text-sm">Official Website</span>
            </div>
            <h1 className="font-heading text-5xl md:text-8xl font-black mb-6 leading-tight uppercase tracking-tight">
              Moving <span className="text-brand-gold">Mississippi & Louisiana</span> Since 2001
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium">
              Family-Owned. Fully Licensed. Structural Experts. Based in Bogue Chitto, we handle the heavy lifting with old-school integrity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="bg-brand-gold text-brand-blue px-10 py-5 rounded-sm font-black text-xl hover:bg-white transition text-center shadow-2xl flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                CALL {COMPANY_INFO.phone}
              </a>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-10 py-5 rounded-sm font-bold text-xl hover:bg-white/20 transition text-center uppercase tracking-widest">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Credentials Banner */}
      <section className="bg-brand-blue py-12 border-b-8 border-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white items-center">
            <div className="text-center md:text-left">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">BBB Accredited</p>
              <p className="text-2xl font-black">A+ RATING</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">USDOT Authorized</p>
              <p className="text-2xl font-black">#2062288</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">LA Contractor</p>
              <p className="text-2xl font-black">#73957</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">Est. Bogue Chitto</p>
              <p className="text-2xl font-black">SINCE 2001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-6xl font-black text-brand-blue mb-6 uppercase leading-none">
                Structural <span className="text-brand-gold">Precision</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Moving a structure is more than just transportation; it's about preserving a family's history or a business's foundation. Chauncey and the team use decades of experience to ensure every move is perfect.
              </p>
            </div>
            <Link to="/contact" className="text-brand-blue font-black uppercase tracking-widest flex items-center border-b-4 border-brand-gold pb-2 hover:text-brand-gold transition text-lg">
              Get an Estimate <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7M3 12h18" strokeWidth="3"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 border-4 border-gray-50 bg-gray-50 hover:bg-white hover:border-brand-gold transition-all duration-300">
                <h3 className="font-heading text-2xl font-black mb-4 text-brand-blue uppercase">{service.title}</h3>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((d, i) => (
                    <li key={i} className="text-sm font-bold text-brand-blue flex items-center">
                      <span className="w-2 h-2 bg-brand-gold mr-2"></span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Old School Values" CTA */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-brand-blue p-10 md:p-16 rounded-sm text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 p-8">
                <svg className="w-16 h-16 text-brand-gold opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V12H12.017V9H14.017V12H17.017V14H14.017V16H15.017C16.1216 16 17.017 16.8954 17.017 18V21H14.017ZM10.017 21H7.01703V18C7.01703 16.8954 7.91246 16 9.01703 16H10.017V21ZM21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"/></svg>
              </div>
              <h2 className="font-heading text-4xl font-black mb-8 uppercase leading-tight">
                Built on <span className="text-brand-gold">Integrity</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                "We aren't just moving buildings; we are preserving homes and history. With nearly 25 years in Bogue Chitto and beyond, we handle the heavy lifting so you don't have to."
              </p>
              <div className="border-t border-white/20 pt-8">
                <p className="font-bold text-white text-xl">Chauncey Van Norman</p>
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">Owner & Operator</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-heading text-3xl md:text-5xl font-black text-brand-blue mb-8 uppercase leading-tight">
              The Official Home of <br/><span className="text-brand-gold">Van Norman House Movers</span>
            </h3>
            <p className="text-brand-blue font-black text-xl mb-10 leading-relaxed">
              Serving Brookhaven, Bogue Chitto, and Lincoln County with structural moving and elevation excellence.
            </p>
            <div className="space-y-6">
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Primary Contact Line</p>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="block text-4xl md:text-6xl font-black text-brand-blue hover:text-brand-gold transition">
                {COMPANY_INFO.phone}
              </a>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">MS & LA Licensed | BBB A+ Accredited</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
