
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-8 border-t-8 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading text-2xl font-bold mb-6 tracking-wider">VAN NORMAN <span className="text-brand-gold">HOUSE MOVERS</span></h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Family-owned and locally trusted in Bogue Chitto, MS since 2001. We provide structural expertise with old-school values.
            </p>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-brand-gold font-bold text-sm uppercase mb-2">VERIFIED WEB PRESENCE</p>
              <p className="text-xs text-gray-400 italic">This is the primary web portal for Van Norman House Movers LLC and our verified BBB profile. Please verify all information directly via our contact lines.</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-8 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><Link to="/services" className="hover:text-brand-gold transition">Structural Moving</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">House Raising</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">Foundation Leveling</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">Route Permitting</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-8 uppercase tracking-widest text-sm">Contact Chauncey</h4>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold">📍</span>
                <div>
                  <p className="font-bold text-white">Physical Address</p>
                  <p className="text-sm">{COMPANY_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold">📞</span>
                <div>
                  <p className="font-bold text-white">Main Line (Call First)</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="text-lg font-black text-brand-gold">{COMPANY_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold">📱</span>
                <div>
                  <p className="font-bold text-white">Secondary/Cell</p>
                  <a href={`tel:${COMPANY_INFO.altPhone.replace(/\D/g,'')}`} className="text-sm">{COMPANY_INFO.altPhone}</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-8 uppercase tracking-widest text-sm">Credentials</h4>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg flex justify-between items-center border border-white/10">
                <span className="text-xs font-bold uppercase text-gray-400">USDOT #</span>
                <span className="font-bold text-white">{COMPANY_INFO.usdot}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex justify-between items-center border border-white/10">
                <span className="text-xs font-bold uppercase text-gray-400">LA License #</span>
                <span className="font-bold text-white">{COMPANY_INFO.laLicense}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex justify-between items-center border border-white/10">
                <span className="text-xs font-bold uppercase text-gray-400">BBB Rating</span>
                <span className="font-bold text-brand-gold">{COMPANY_INFO.bbbRating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-xs tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Licensed, Bonded, and Insured.</p>
          <p className="mt-2 text-gray-600">Based in Bogue Chitto, Serving Lincoln County, MS & All of Louisiana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
