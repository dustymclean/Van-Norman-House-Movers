
import React, { useEffect, useState } from 'react';
import { StorageService } from '../services/storage';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await StorageService.getGallery();
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(i => i.category === filter);

  return (
    <article className="bg-white min-h-screen">
      <header className="bg-brand-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight">Project Portfolio</h1>
          <p className="text-brand-gold text-xl font-bold tracking-widest uppercase">Certified Structural Success</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <nav className="flex flex-wrap justify-center gap-4 mb-16" aria-label="Project Filters">
          {['all', 'moving', 'raising', 'leveling'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 font-bold uppercase tracking-widest text-sm border-2 transition ${
                filter === cat 
                ? 'bg-brand-gold border-brand-gold text-brand-blue' 
                : 'border-gray-200 text-gray-400 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="animate-pulse bg-gray-100 aspect-[4/3] rounded-sm"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <section key={item.id} className="group relative overflow-hidden bg-gray-50 border border-gray-100 rounded-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={`${item.title} in ${item.location} - Structural House Moving`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
                      {item.location}
                    </span>
                    <span className="bg-brand-blue text-white text-[10px] px-2 py-1 font-bold uppercase tracking-tighter">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase mb-3 text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-24 border-4 border-dashed border-gray-100">
            <p className="text-gray-400 font-bold uppercase tracking-widest">No results in this category.</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Gallery;
