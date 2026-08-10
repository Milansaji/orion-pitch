import React, { useState } from 'react';
import { Eye, Sparkles, X, Maximize2 } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 1, category: 'Exterior', title: 'Aura Vertex Skyscraper Facade', image: '/assets/exterior.png', caption: 'Dramatic sunset reflections over the 36-story glass tower.' },
  { id: 2, category: 'Living', title: 'Grand Penthouse Living Salon', image: '/assets/living.png', caption: 'Double-height ceiling with floor-to-ceiling glass and fireplace.' },
  { id: 3, category: 'Bedrooms', title: 'Executive Master Suite', image: '/assets/bedroom.png', caption: 'Panoramic city view master suite with velvet velvet headboard and mood lighting.' },
  { id: 4, category: 'Amenities', title: 'Cantilever Rooftop Infinity Pool', image: '/assets/pool.png', caption: 'Twilight horizon view infinity pool overlooking downtown.' },
  { id: 5, category: 'Interior', title: 'Italian Designer Chef Kitchen', image: '/assets/kitchen.png', caption: 'Waterfall Calacatta marble island with integrated brass fixtures.' }
];

export default function GallerySection() {
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#080b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161d2a] border border-[#d4af37]/30">
            <Eye className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Architectural <span className="gold-gradient-text">Gallery & Staging</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            High-definition render collection showcasing interior finishes, sky deck views, and building facade.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'Exterior', 'Living', 'Bedrooms', 'Amenities', 'Interior'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                filter === cat
                  ? 'bg-[#d4af37] text-black font-bold shadow-md shadow-[#d4af37]/20'
                  : 'glass-panel text-gray-400 hover:text-white border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid View */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#d4af37]/40 transition-all duration-300 relative"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-[#d4af37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">{item.category}</span>
                  <p className="text-lg font-serif font-bold text-white leading-tight">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 text-gray-400 hover:text-white bg-white/10 rounded-full border border-white/20 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full space-y-4 text-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto mx-auto rounded-2xl border border-[#d4af37]/30 shadow-2xl"
              />
              <div className="space-y-1">
                <p className="text-xs uppercase text-[#d4af37] font-semibold">{activeImage.category}</p>
                <h3 className="text-2xl font-serif font-bold text-white">{activeImage.title}</h3>
                <p className="text-sm text-gray-300 font-light">{activeImage.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
