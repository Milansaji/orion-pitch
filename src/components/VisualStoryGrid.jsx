import React, { useState } from 'react';
import { X } from 'lucide-react';

const INTERIOR_BASE = '/assets/interior';

const ESTATE_COLLECTION = [
  {
    id: '01',
    title: 'Sunlit Living Salon',
    image: `${INTERIOR_BASE}/WhatsApp Image 2026-08-10 at 2.44.33 PM(1).jpeg`,
  },
  {
    id: '02',
    title: 'Master Bedroom Suite',
    image: `${INTERIOR_BASE}/WhatsApp Image 2026-08-10 at 2.44.33 PM.jpeg`,
  },
  {
    id: '03',
    title: 'Poolside Lounge Terrace',
    image: `${INTERIOR_BASE}/WhatsApp Image 2026-08-10 at 2.44.34 PM.jpeg`,
  },
  {
    id: '04',
    title: 'Palm Courtyard Retreat',
    image: `${INTERIOR_BASE}/WhatsApp Image 2026-08-10 at 2.44.34 PM(1).jpeg`,
  },
  {
    id: '05',
    title: 'Contemporary Living Gallery',
    image: `${INTERIOR_BASE}/WhatsApp Image 2026-08-10 at 2.44.34 PM(2).jpeg`,
  },
  {
    id: '06',
    title: 'Reading Nook & Lounge Chair',
    image: `${INTERIOR_BASE}/WhatsApp Image 2026-08-10 at 2.44.34 PM(3).jpeg`,
  },
];

export default function VisualStoryGrid() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        
        <div className="mb-10 sm:mb-14 space-y-2">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[3px] font-bold text-slate-400 block">
            DESIGN &amp; STYLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#061a23]">
            The Estate Collection
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {ESTATE_COLLECTION.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="bg-white border border-slate-200 p-2 sm:p-2.5 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="mt-3 px-1 text-[11px] sm:text-xs uppercase tracking-[1.5px] font-semibold text-slate-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <button
            onClick={() => setActiveLightbox(ESTATE_COLLECTION[0])}
            className="text-[11px] sm:text-xs uppercase tracking-[2px] font-bold text-slate-700 hover:text-[#061a23] border-b border-slate-300 hover:border-slate-900 pb-1 transition-all"
          >
            EXPLORE FULL GALLERY →
          </button>
        </div>

      </div>

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
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="w-full h-full object-contain max-h-[85vh] mx-auto"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-xs uppercase tracking-[2px]">
              {activeLightbox.title}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
