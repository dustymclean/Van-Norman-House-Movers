
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Everything you need to know about structural moving and our process.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-24">
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-lg bg-gray-50 hover:bg-white transition"
              >
                <span className="pr-4">{faq.question}</span>
                <span className="text-brand-gold text-2xl">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="p-6 bg-white border-t border-gray-100 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-brand-gold/10 rounded-2xl border border-brand-gold/30 text-center">
          <h3 className="font-heading text-2xl font-bold text-brand-blue mb-4">Have a specific question?</h3>
          <p className="text-gray-700 mb-6">Every structure is unique. We provide custom evaluations for all projects.</p>
          <a href="tel:6018236091" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-slate transition inline-block">
            Call (601) 823-6091
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
