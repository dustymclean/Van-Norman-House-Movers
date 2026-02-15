
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, COMPANY_INFO, PROJECTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" 
          alt="Large structural house being lifted by hydraulic equipment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-24 md:pt-32">
          <div className="max-w-3xl">
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

      {/* Stats/Trust Bar */}
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

      {/* Services Section */}
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

      {/* Featured Projects - Visual Authority */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-12 uppercase">Recent <span className="text-brand-gold">Project</span> Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-sm">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2 block">{project.location}</span>
                  <h3 className="font-heading text-2xl font-bold uppercase mb-4">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-brand-blue mb-6 uppercase">Built on <span className="text-brand-gold">Trust</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We aren't just moving buildings; we are preserving homes and history. Here is what our clients have to say.
              </p>
              <div className="flex space-x-2">
                {[1,2,3,4,5].map(s => <span key={s} className="text-brand-gold text-2xl">★</span>)}
              </div>
              <p className="text-sm font-bold text-brand-blue uppercase tracking-widest mt-2">Verified 5-Star Service</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-gray-50 p-10 border-l-8 border-brand-gold">
                  <p className="text-gray-700 italic text-lg mb-6">"{t.content}"</p>
                  <div>
                    <p className="font-bold text-brand-blue uppercase">{t.author}</p>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Town Section - Organic Ranking */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-brand-blue mb-8 uppercase leading-tight">
                Your Trusted Partners: <br/><span className="text-brand-gold">Van Norman House Movers</span>
              </h2>
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
            <div className="bg-brand-blue p-8 text-white rounded-sm">
              <h3 className="font-heading text-xl font-bold uppercase mb-6 text-brand-gold tracking-widest">Active Service Areas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center text-sm font-bold opacity-80">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-xs text-gray-400 italic">
                Don't see your town? We move houses across the entire Mississippi and Louisiana state regions. Call for a custom route evaluation.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="flex items-center justify-center bg-brand-gold text-brand-blue py-4 px-6 rounded-full font-black text-lg shadow-2xl active:scale-95 transition-transform border-4 border-white">
           <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
           CALL NOW: {COMPANY_INFO.phone}
        </a>
      </div>
    </div>
  );
};

export default Home;
