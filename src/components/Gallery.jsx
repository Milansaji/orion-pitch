import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

const IMAGES = [
  { title: 'Orio Maple Primary Elevation', category: 'Project Overview', src: '/assets/orion_images/maple1.png' },
  { title: 'Nature Courtyard & Surroundings', category: 'Greenery', src: '/assets/orion_images/maple2.png' },
  { title: 'Architectural Details & Facade', category: 'Design', src: '/assets/orion_images/maple3.png' },
  { title: 'Living Space & Interiors', category: 'Interiors', src: '/assets/orion_images/maple4.png' },
  { title: 'Terrace & Balcony Views', category: 'Views', src: '/assets/orion_images/maple5.png' },
  { title: 'Gated Entrance & Access Road', category: 'Site Access', src: '/assets/orion_images/maple6.png' }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-16 bg-slate-50 relative text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Photo Showcase</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            Official Project <span className="text-[#1e3a8a]">Gallery</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Authentic photo showcase of Orio Maple luxury project in Thiruvalla.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="clean-white-card rounded-2xl overflow-hidden cursor-pointer group hover:border-[#1e3a8a] transition-all relative border border-slate-200 shadow-sm"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold text-emerald-400">{img.category}</span>
                  <p className="text-sm font-bold leading-tight font-serif">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-3 text-white bg-white/10 rounded-full border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full text-center space-y-3">
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="max-h-[80vh] mx-auto rounded-2xl border border-slate-700 shadow-2xl"
              />
              <div>
                <span className="text-xs uppercase text-emerald-400 font-bold">{selectedImg.category}</span>
                <h3 className="text-xl font-serif font-bold text-white">{selectedImg.title}</h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
