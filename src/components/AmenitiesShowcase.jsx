import React from 'react';

const AMENITIES = [
  {
    title: 'Infinity Pool',
    desc: 'A breathtaking expanse of water seamlessly merging with the horizon.',
    image: '/assets/interior/WhatsApp Image 2026-08-10 at 2.44.34 PM.jpeg',
  },
  {
    title: 'Private Terrace',
    desc: 'Exclusive elevated spaces designed for intimate gatherings.',
    image: '/assets/interior/WhatsApp Image 2026-08-10 at 2.44.34 PM(1).jpeg',
  },
  {
    title: 'Living Galleries',
    desc: 'Sunlit interiors with marble, timber, and curated quiet luxury.',
    image: '/assets/interior/WhatsApp Image 2026-08-10 at 2.44.34 PM(2).jpeg',
  },
];

export default function AmenitiesShowcase() {
  return (
    <section id="amenities" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        <div className="mb-16 space-y-2">
          <span className="text-[11px] uppercase tracking-[3px] font-bold text-slate-400 block">
            UNCOMPROMISING LIFESTYLE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#061a23]">
            Premium Amenities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {AMENITIES.map((item) => (
            <div key={item.title} className="space-y-4 text-left max-w-sm mx-auto w-full">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-serif font-normal text-[#061a23]">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
