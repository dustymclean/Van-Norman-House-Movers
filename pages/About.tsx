
import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-blue/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop" 
          alt="Heavy duty steel beams and industrial equipment" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">Our Story</h1>
          <p className="text-brand-gold text-xl md:text-2xl font-black tracking-[0.2em] uppercase">Built on a Handshake since 2001</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
            <h2 className="font-heading text-4xl font-black text-brand-blue mb-10 uppercase border-b-8 border-brand-gold inline-block">Old-School Values</h2>
            
            <p className="mb-8 text-xl font-medium text-brand-blue">
              Founded by Chauncey Van Norman in 2001, Van Norman House Movers is built on the kind of values that are hard to find today: a handshake you can trust and work that speaks for itself.
            </p>

            <p className="mb-8">
              Based in Bogue Chitto, Mississippi, we've spent nearly a quarter of a century becoming the region's premier experts in structural relocation. We aren't just moving buildings; we are preserving homes and history. Whether it's a family home in Lincoln County or a commercial structure in Louisiana, we treat every project with the weight it deserves.
            </p>

            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
              <div className="bg-gray-50 p-8 border-l-8 border-brand-gold shadow-sm">
                <h3 className="font-heading text-2xl font-black text-brand-blue mb-4 uppercase">Locally Owned</h3>
                <p className="text-gray-600">Chauncey answers the phone himself. We are part of the Bogue Chitto and Brookhaven community, not a faceless national franchise.</p>
              </div>
              <div className="bg-gray-50 p-8 border-l-8 border-brand-gold shadow-sm">
                <h3 className="font-heading text-2xl font-black text-brand-blue mb-4 uppercase">Fully Compliant</h3>
                <p className="text-gray-600">With USDOT authority (#2062288) and full licensure in MS and LA, we handle all the red tape so you don't have to.</p>
              </div>
            </div>

            <p className="mb-8">
              We understand that moving a structure is a massive undertaking. It requires more than just big trucks; it requires patience, physics, and a deep respect for the property. Our team uses state-of-the-art hydraulic jacking systems to ensure your home stays perfectly level and secure during every inch of the journey.
            </p>

            <div className="bg-brand-blue text-white p-12 rounded-sm my-16 shadow-2xl">
              <h3 className="text-brand-gold font-heading text-3xl font-black mb-6 uppercase">A Note from Chauncey</h3>
              <p className="text-xl italic mb-8 leading-relaxed">
                "I started this business with one truck and a lot of determination. Today, we're proud to be the team people call when the job is too big for anyone else. If you want a quote from someone who knows the roads of Mississippi and Louisiana like the back of his hand, give me a call."
              </p>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="inline-block bg-brand-gold text-brand-blue px-8 py-4 font-black text-xl hover:bg-white transition uppercase">
                Call (601) 823-6091
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Detail */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-heading text-4xl font-black text-brand-blue mb-8 uppercase leading-tight">From the <span className="text-brand-gold">Delta</span> to the <span className="text-brand-gold">Gulf</span></h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are active across the entire Gulf South region. While we are rooted in Lincoln County, we regularly perform structural moves and house raising in Jackson, Baton Rouge, New Orleans, and every town in between.
            </p>
            <div className="flex flex-wrap gap-4">
              {COMPANY_INFO.serviceAreas.map((area, idx) => (
                <span key={idx} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-brand-blue font-bold text-sm shadow-sm">{area}</span>
              ))}
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1621905252507-b352220730d8?q=80&w=2070&auto=format&fit=crop" 
               alt="Construction crane and structural framing" 
               className="rounded-sm shadow-2xl border-4 border-white"
             />
             <div className="absolute -bottom-8 -left-8 bg-brand-gold text-brand-blue p-8 font-black text-2xl uppercase shadow-xl hidden md:block">
               Licensed in <br/> MS & LA
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
