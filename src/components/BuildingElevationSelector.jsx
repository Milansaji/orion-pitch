import React, { useState } from 'react';
import { Building, Sparkles, Check, Lock, ChevronRight, Eye, Layers } from 'lucide-react';

const TOWER_LEVELS = [
  { level: 'Floors 34-36', category: 'Crown Penthouse Collection', units: 3, available: 1, price: '$4.45M+', status: 'Available', color: 'border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]' },
  { level: 'Floors 28-33', category: 'Sky Sky-Duplex Suites', units: 12, available: 3, price: '$2.95M+', status: 'High Demand', color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' },
  { level: 'Floors 18-27', category: 'Executive Horizon Residences', units: 24, available: 5, price: '$1.85M+', status: 'Available', color: 'border-sky-500/50 bg-sky-500/10 text-sky-400' },
  { level: 'Floors 6-17', category: 'Urban Park & Bay Suites', units: 36, available: 8, price: '$1.25M+', status: 'Available', color: 'border-purple-500/50 bg-purple-500/10 text-purple-400' },
  { level: 'Floors 1-5', category: 'Podium Amenities & Private Club', units: 0, available: 0, price: 'Private Access', status: 'Residents Only', color: 'border-gray-700 bg-gray-900 text-gray-400' }
];

export default function BuildingElevationSelector({ onOpenConfigurator }) {
  const [selectedZone, setSelectedZone] = useState(TOWER_LEVELS[0]);

  return (
    <section id="elevation" className="py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161d2a] border border-[#d4af37]/30">
            <Building className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Interactive Tower Elevation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Explore <span className="gold-gradient-text">Floor Plan Availability</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            Select a tower elevation tier to inspect room availability, elevation height, and panoramic view specs.
          </p>
        </div>

        {/* Interactive Elevation Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Tower Blueprint Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-sm glass-panel p-6 rounded-3xl border border-[#d4af37]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-xs">
                <span className="font-bold text-[#d4af37] uppercase tracking-wider">Aura Vertex Tower (36 Floors)</span>
                <span className="text-gray-400">Live Status Feed</span>
              </div>

              {/* Tower Graphic Levels */}
              <div className="space-y-2">
                {TOWER_LEVELS.map((zone, idx) => {
                  const isSelected = selectedZone.level === zone.level;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedZone(zone)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group ${
                        isSelected
                          ? `${zone.color} shadow-lg scale-[1.02]`
                          : 'border-gray-800 bg-black/40 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-mono tracking-widest uppercase block">{zone.level}</span>
                        <span className="text-sm font-bold font-serif block text-white group-hover:text-[#d4af37]">
                          {zone.category}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold font-display block">{zone.price}</span>
                        <span className="text-[10px] text-gray-400">{zone.available} Units Left</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Detail Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel-gold p-8 rounded-3xl space-y-6 border border-[#d4af37]/30 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">{selectedZone.level}</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {selectedZone.category}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40">
                  {selectedZone.status}
                </span>
              </div>

              {/* Specs Breakdown */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400">Ceiling Height</p>
                  <p className="text-lg font-bold text-white font-display mt-0.5">13.5 Ft Clear</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400">Glazing Glass</p>
                  <p className="text-lg font-bold text-[#d4af37] font-display mt-0.5">Low-E Acoustic</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400">Terrace Balcony</p>
                  <p className="text-lg font-bold text-emerald-400 font-display mt-0.5">Private Sky Deck</p>
                </div>
              </div>

              {/* Architectural Image Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10">
                <img
                  src="/assets/living.png"
                  alt="Zone Interior Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs text-gray-300 font-light">Panoramic View Horizon from Level 34</p>
                  <p className="text-sm font-bold text-white">Full Floor-to-Ceiling Unobstructed Light</p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onOpenConfigurator}
                  className="gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Configure Flat in This Elevation Tier</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
