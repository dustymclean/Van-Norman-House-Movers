
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-brand-gold shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="font-heading text-2xl md:text-3xl font-bold text-brand-blue leading-none">VAN NORMAN</span>
              <span className="font-heading text-sm font-semibold text-brand-gold tracking-widest">HOUSE MOVERS LLC</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-brand-blue font-bold uppercase tracking-wider hover:text-brand-gold transition">Home</Link>
            <Link to="/services" className="text-brand-blue font-bold uppercase tracking-wider hover:text-brand-gold transition">Services</Link>
            <Link to="/about" className="text-brand-blue font-bold uppercase tracking-wider hover:text-brand-gold transition">About Us</Link>
            <Link to="/faq" className="text-brand-blue font-bold uppercase tracking-wider hover:text-brand-gold transition">FAQ</Link>
            
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="flex flex-col items-end group">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Call Chauncey Directly</span>
              <span className="text-xl font-black text-brand-blue group-hover:text-brand-gold transition">{COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="mr-4 bg-brand-gold text-brand-blue p-2 rounded-full shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue p-2">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-blue text-white border-t border-brand-gold">
          <div className="px-4 pt-2 pb-6 space-y-1 text-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-xl font-bold uppercase">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-xl font-bold uppercase">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-xl font-bold uppercase">About Us</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-xl font-bold uppercase">FAQ</Link>
            <div className="pt-4 border-t border-white/10 mt-4">
              <p className="text-brand-gold text-sm font-bold mb-2">CALL FOR A QUOTE</p>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="block text-2xl font-black">{COMPANY_INFO.phone}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
