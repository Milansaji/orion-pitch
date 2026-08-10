import React, { useState } from 'react';

export default function SanctuarySection() {
  const [activeBhk, setActiveBhk] = useState('4 BHK');

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[3px] font-bold text-slate-400 block">
              ULTRA LUXURY
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#061a23] leading-[1.15]">
              A Sanctuary of Architectural Brilliance
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-light max-w-lg">
              Discover unparalleled elegance with our exclusive collection of 3, 4 &amp; 5 BHK luxury residences. Designed for the discerning few, Orio Florenza seamlessly blends modern aesthetics with functional superiority.
            </p>

            {/* BHK Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
              {['3 BHK', '4 BHK', '5 BHK'].map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => setActiveBhk(bhk)}
                  className={`text-[11px] sm:text-xs uppercase tracking-wider font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-all border ${
                    activeBhk === bhk
                      ? 'bg-[#061a23] text-white border-[#061a23]'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SHOWCASE IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-xl group aspect-square bg-slate-100">
              <img
                src="/assets/orion_images/florenza1.jpg"
                alt="Orio Florenza Luxury Villa Poster"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
