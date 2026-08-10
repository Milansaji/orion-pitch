import React from 'react';
import { Waves, Sparkles, Trees } from 'lucide-react';

const AMENITIES = [
  {
    icon: Waves,
    title: 'Infinity Pool',
    desc: 'A breathtaking expanse of water seamlessly merging with the horizon.'
  },
  {
    icon: Sparkles,
    title: 'Private Terrace',
    desc: 'Exclusive elevated spaces designed for intimate gatherings.'
  },
  {
    icon: Trees,
    title: 'Landscaped Gardens',
    desc: 'Meticulously curated green spaces bringing nature to your doorstep.'
  }
];

export default function AmenitiesShowcase() {
  return (
    <section id="amenities" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Section Header */}
        <div className="mb-16 space-y-2">
          <span className="text-[11px] uppercase tracking-[3px] font-bold text-slate-400 block">
            UNCOMPROMISING LIFESTYLE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#061a23]">
            Premium Amenities
          </h2>
        </div>

        {/* 3 Amenities Columns */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {AMENITIES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="space-y-4 max-w-sm mx-auto">
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-slate-800">
                  <IconComponent className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h3 className="text-xl font-serif font-normal text-[#061a23]">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
