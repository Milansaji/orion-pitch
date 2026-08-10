import React, { useState } from 'react';
import { X } from 'lucide-react';

const ESTATE_COLLECTION = [
  { id: '01', title: 'Orio Florenza Enclave Poster', image: '/assets/orion_images/florenza2.jpg' },
  { id: '02', title: 'The Luxury Label Poster', image: '/assets/orion_images/florenza3.jpg' },
  { id: '03', title: '3, 4 & 5 BHK Villa Poster', image: '/assets/orion_images/florenza1.jpg' }
];

export default function VisualStoryGrid() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 space-y-2">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[3px] font-bold text-slate-400 block">
            DESIGN &amp; STYLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#061a23]">
            The Estate Collection
          </h2>
        </div>

        {/* Responsive Grid Layout: 1 col on mobile, 3 cols on desktop */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {ESTATE_COLLECTION.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item.image)}
              className="bg-white border border-slate-200 p-2 sm:p-2.5 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={() => setActiveLightbox(ESTATE_COLLECTION[0].image)}
            className="text-[11px] sm:text-xs uppercase tracking-[2px] font-bold text-slate-700 hover:text-[#061a23] border-b border-slate-300 hover:border-slate-900 pb-1 transition-all"
          >
            EXPLORE FULL GALLERY →
          </button>
        </div>

      </div>

      {/* FULL SCREEN LIGHTBOX */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden bg-black border border-slate-800 rounded-sm">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 bg-white/20 text-white p-2.5 rounded-full hover:bg-white/40 z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeLightbox}
              alt="Orio Florenza Lightbox"
              className="w-full h-full object-contain max-h-[85vh] mx-auto"
            />
          </div>
        </div>
      )}

    </section>
  );
}
