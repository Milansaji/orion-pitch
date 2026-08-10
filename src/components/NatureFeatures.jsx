import React, { useState } from 'react';
import { Trees, Droplets, ShieldCheck, Sun, CheckCircle } from 'lucide-react';

const NATURE_ITEMS = [
  {
    title: 'Pollution-Free Air & Serenity',
    category: 'Environment',
    image: '/assets/orion_images/maple2.png',
    desc: 'Placed 250m off Kizhakkan Muthoor Jn, enjoying fresh unpolluted air away from traffic noise.',
    highlights: ['Zero Highway Noise', 'Fresh Oxygen Ecosystem', 'Tropical Shade Canopy', 'Walking Pathways']
  },
  {
    title: 'Modern Architecture & Terraces',
    category: 'Architecture',
    image: '/assets/orion_images/maple3.png',
    desc: 'Thoughtful layouts engineered by Orio Builders to maximize natural cross-ventilation and sunlight.',
    highlights: ['Natural Cross-Ventilation', 'Spacious Terraces', 'Quality Finish', 'Private Courtyards']
  },
  {
    title: 'Peaceful Gated Living',
    category: 'Community',
    image: '/assets/orion_images/maple4.png',
    desc: '24/7 manned security, private access road, and complete peace of mind in Thiruvalla.',
    highlights: ['Gated Sanctuary', '11 Exclusive Units', 'CCTV Perimeter', 'Dedicated Maintenance']
  }
];

export default function NatureFeatures() {
  const [activeItem, setActiveItem] = useState(NATURE_ITEMS[0]);

  return (
    <section id="nature" className="py-16 bg-white relative text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Nature & Sanctuary</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            The Art of <span className="text-[#1e3a8a]">Peaceful Living</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Aside from modern amenities, Orio Maple epitomizes quiet serenity and natural living.
          </p>
        </div>

        {/* Tab Cards */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {NATURE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveItem(item)}
              className={`cursor-pointer px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeItem.title === item.title
                  ? 'bg-[#0b192c] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {item.category}
            </div>
          ))}
        </div>

        {/* Feature Display Card */}
        <div className="clean-white-card p-6 sm:p-8 rounded-3xl border border-slate-200 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{activeItem.category}</span>
              <h3 className="text-2xl font-serif font-bold">{activeItem.title}</h3>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#1e3a8a]">{activeItem.category}</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">{activeItem.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{activeItem.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
              <p className="font-bold text-slate-800 uppercase tracking-wider">Features:</p>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                {activeItem.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
