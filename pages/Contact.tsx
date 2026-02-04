
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-8xl font-black text-brand-blue mb-6 uppercase tracking-tight">Contact Us</h1>
          <div className="w-24 h-2 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Chauncey prefers to talk details over the phone. For the fastest estimate, please call the main office directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Direct Phone Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-blue text-white p-10 rounded-sm shadow-2xl border-b-8 border-brand-gold">
              <h2 className="font-heading text-3xl font-black mb-8 uppercase text-brand-gold">Call Now</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Primary Line</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="text-3xl md:text-4xl font-black hover:text-brand-gold transition block mb-1">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-sm font-bold text-brand-gold italic">Ask for Chauncey</p>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Secondary / Cell</p>
                  <a href={`tel:${COMPANY_INFO.altPhone.replace(/\D/g,'')}`} className="text-xl font-bold hover:text-brand-gold transition block">
                    {COMPANY_INFO.altPhone}
                  </a>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Office Email</p>
                  <p className="text-lg font-bold truncate">{COMPANY_INFO.email}</p>
                  <p className="text-xs text-gray-400 mt-1 italic">(Managed by staff during business hours)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 border border-gray-100 rounded-sm">
              <h3 className="font-heading text-2xl font-black text-brand-blue mb-6 uppercase">Our Office</h3>
              <p className="text-gray-600 font-bold mb-4">{COMPANY_INFO.address}</p>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Located right off Highway 51 in Bogue Chitto. We've been at this same location for over two decades.
              </p>
              <div className="h-48 bg-gray-200 rounded-sm flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Map View Placeholder</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-16 border-4 border-gray-50 shadow-sm rounded-sm">
              {submitted ? (
                <div className="text-center py-24">
                  <div className="w-24 h-24 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 text-5xl font-black">✓</div>
                  <h2 className="text-4xl font-heading font-black text-brand-blue mb-4 uppercase">Message Sent</h2>
                  <p className="text-gray-600 text-lg mb-10">We have received your details. Our office manager will review the request and Chauncey will be in touch.</p>
                  <button onClick={() => setSubmitted(false)} className="text-brand-blue font-black uppercase tracking-widest border-b-4 border-brand-gold pb-1 hover:text-brand-gold transition">Send Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b-4 border-brand-gold pb-4 mb-8">
                    <h2 className="font-heading text-3xl font-black text-brand-blue uppercase">Request a Detailed Quote</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">All information is kept confidential</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-black text-brand-blue uppercase mb-3">Your Full Name</label>
                      <input required type="text" className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-brand-gold outline-none transition font-bold" />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-brand-blue uppercase mb-3">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-brand-gold outline-none transition font-bold" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-black text-brand-blue uppercase mb-3">Property Address (Current)</label>
                      <input required type="text" className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-brand-gold outline-none transition font-bold" />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-brand-blue uppercase mb-3">Type of Service</label>
                      <select className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-brand-gold outline-none transition font-bold">
                        <option>Structural House Moving</option>
                        <option>House Raising / Elevation</option>
                        <option>Foundation Leveling</option>
                        <option>Commercial Move</option>
                        <option>Other / Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-brand-blue uppercase mb-3">Project Details</label>
                    <textarea required rows={6} className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-brand-gold outline-none transition font-bold" placeholder="Please describe the size of the house, approximate move distance, and any special concerns..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-blue text-white py-6 font-black text-2xl uppercase tracking-widest hover:bg-brand-slate transition shadow-xl">
                    Submit Project Details
                  </button>
                  
                  <div className="text-center bg-brand-gold/10 p-4 rounded-sm">
                    <p className="text-brand-blue font-bold text-sm">
                      <span className="text-brand-gold mr-2">⚠️</span>
                      FOR IMMEDIATE HELP: Call Chauncey at {COMPANY_INFO.phone}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
