import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trees, CheckCircle2, DollarSign, Home, Compass, Eye, Shield, FileText, ArrowRight, Sun, Water, Leaf, Phone } from 'lucide-react';

const VILLA_LAYOUTS = [
  { id: '3bed', title: '3-Bed Garden Sanctuary Villa', size: '2,400 sq.ft', basePrice: 8500000, beds: 3, baths: 3.5, image: '/assets/orio_living.png', desc: 'Single-story courtyard villa surrounded by private tropical palms.' },
  { id: '4bed', title: '4-Bed Heritage Suite Villa', size: '3,200 sq.ft', basePrice: 11500000, beds: 4, baths: 4.5, image: '/assets/orio_hero.png', desc: 'Two-story luxury residence with private plunge pool and balcony terrace.' },
  { id: 'sky_villa', title: 'Grand Executive Sky Villa', size: '4,100 sq.ft', basePrice: 14500000, beds: 4, baths: 5, image: '/assets/orio_bedroom.png', desc: 'Premium corner plot with dual botanical garden and rooftop solar canopy.' }
];

const NATURE_FEATURES = [
  { id: 'pool', name: 'Private Hydro Courtyard Plunge Pool', price: 450000, icon: Water, desc: 'Heated plunge pool integrated into living room terrace.' },
  { id: 'solar', name: 'Rooftop Solar Glass & Energy Storage', price: 350000, icon: Sun, desc: '10kW solar system for zero grid electricity bills.' },
  { id: 'vertical_garden', name: 'Automatic Drip Vertical Garden Wall', price: 220000, icon: Leaf, desc: 'Lush indoor plant wall with automated drip irrigation.' },
  { id: 'ev_charger', name: 'Fast EV Charger & Dual Covered Carport', price: 180000, icon: Trees, desc: '22kW fast charger with teak wood gazebo carport.' }
];

const INTERIOR_THEMES = [
  { id: 'kerala_teak', name: 'Kerala Teak & Navy Luxe', accent: 'Natural Teak & Deep Navy Blue', image: '/assets/orio_living.png' },
  { id: 'nordic_white', name: 'Nordic White & Botanical Green', accent: 'Crisp White Walls & Leaf Green', image: '/assets/orio_bedroom.png' },
  { id: 'serene_stone', name: 'Serene Riverstone & Linen', accent: 'Honed Stone & Warm Off-White', image: '/assets/orio_garden.png' }
];

export default function FlatConfigurator({ onGenerateProposal, onScheduleTour }) {
  const [selectedLayout, setSelectedLayout] = useState(VILLA_LAYOUTS[0]);
  const [selectedTheme, setSelectedTheme] = useState(INTERIOR_THEMES[0]);
  const [selectedUpgrades, setSelectedUpgrades] = useState(['pool', 'solar']);
  const [activeTab, setActiveTab] = useState('living');

  const toggleUpgrade = (id) => {
    if (selectedUpgrades.includes(id)) {
      setSelectedUpgrades(selectedUpgrades.filter(u => u !== id));
    } else {
      setSelectedUpgrades([...selectedUpgrades, id]);
    }
  };

  const upgradeCost = selectedUpgrades.reduce((sum, id) => {
    const item = NATURE_FEATURES.find(u => u.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = selectedLayout.basePrice + upgradeCost;
  const downPayment = totalPrice * 0.20;
  const estRent = Math.round(totalPrice * 0.065);

  const handleProposalClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1e3a8a', '#10b981', '#ffffff']
    });
    onGenerateProposal({
      floor: { name: 'Gated Villa Plot', range: 'Kizhakkan Muthoor', view: 'Tropical Garden' },
      layout: selectedLayout,
      theme: selectedTheme,
      upgrades: selectedUpgrades.map(id => NATURE_FEATURES.find(u => u.id === id)),
      financials: {
        totalPrice,
        downPayment,
        estimatedMortgage: Math.round(totalPrice * 0.007),
        projectedAnnualRent: estRent,
        netRentalYield: '6.5'
      }
    });
  };

  return (
    <section id="configurator" className="py-20 bg-slate-50 relative overflow-hidden text-left border-t border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-sm">
            <Trees className="w-4 h-4 text-emerald-600" />
            <span>Interactive Villa Customizer Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Create Your <span className="text-[#1e3a8a]">Custom Orio Maple Villa</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Tailor villa layout, nature enhancements, and interior finish. Instantly estimate total cost and pitch quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Choices */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Layout Cards */}
            <div className="clean-white-card p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">Step 1: Choose Villa Layout</span>
              <div className="space-y-3">
                {VILLA_LAYOUTS.map(layout => (
                  <div
                    key={layout.id}
                    onClick={() => setSelectedLayout(layout)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedLayout.id === layout.id
                        ? 'bg-[#1e3a8a]/5 border-[#1e3a8a] shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-serif font-bold text-slate-900">{layout.title}</p>
                      <p className="text-xs text-slate-500">{layout.size} • {layout.beds} Beds • {layout.baths} Baths</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-bold text-[#1e3a8a] font-display">₹{(layout.basePrice / 100000).toFixed(0)} Lakhs</p>
                      {selectedLayout.id === layout.id && (
                        <span className="text-[10px] font-bold text-emerald-600 flex items-center justify-end gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Selected
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nature Features */}
            <div className="clean-white-card p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">Step 2: Nature & Solar Upgrades</span>
              <div className="space-y-2.5">
                {NATURE_FEATURES.map(item => {
                  const isSelected = selectedUpgrades.includes(item.id);
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleUpgrade(item.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected ? 'bg-emerald-50 border-emerald-400' : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{item.name}</p>
                          <p className="text-[11px] text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#1e3a8a]">+₹{(item.price / 100000).toFixed(1)}L</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interior Themes */}
            <div className="clean-white-card p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">Step 3: Interior Palette</span>
              <div className="grid grid-cols-3 gap-3">
                {INTERIOR_THEMES.map(theme => (
                  <div
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                      selectedTheme.id === theme.id ? 'bg-[#1e3a8a]/5 border-[#1e3a8a] shadow-sm' : 'bg-white border-slate-200'
                    }`}
                  >
                    <p className="text-xs font-bold text-slate-900 leading-tight">{theme.name}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{theme.accent}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Visual Canvas & Proposal Summary */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-24">
            
            <div className="clean-white-card rounded-3xl p-6 space-y-6 shadow-xl border border-slate-200">
              
              {/* Tab Selector */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Live Visual Canvas</p>
                  <h3 className="text-lg font-serif font-bold text-slate-900">{selectedLayout.title}</h3>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-xl text-xs">
                  <button
                    onClick={() => setActiveTab('living')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'living' ? 'bg-[#0b192c] text-white font-bold' : 'text-slate-600'}`}
                  >
                    Living Room
                  </button>
                  <button
                    onClick={() => setActiveTab('garden')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'garden' ? 'bg-[#0b192c] text-white font-bold' : 'text-slate-600'}`}
                  >
                    Courtyard Garden
                  </button>
                </div>
              </div>

              {/* Staging Canvas Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200">
                <img
                  src={activeTab === 'living' ? selectedTheme.image : '/assets/orio_garden.png'}
                  alt="Villa Visual Staging"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-slate-900">
                  <span>Theme: <strong>{selectedTheme.name}</strong></span>
                  <span className="text-emerald-700 font-bold">250m Off Kizhakkan Muthoor Jn</span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3">
                <div className="flex justify-between items-baseline border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-400 uppercase font-medium">Estimated Villa Price</span>
                  <span className="text-3xl font-bold font-display text-emerald-400">₹{(totalPrice / 100000).toFixed(2)} Lakhs</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400">Est. 20% Down Payment:</span>
                    <p className="font-bold text-white mt-0.5">₹{(downPayment / 100000).toFixed(2)} Lakhs</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Est. Annual Rental Yield:</span>
                    <p className="font-bold text-emerald-400 mt-0.5">₹{(estRent / 100000).toFixed(2)}L / year</p>
                  </div>
                </div>
              </div>

              {/* Interactive Action Triggers (No generic buttons, sleek integrated cards) */}
              <div className="space-y-3">
                <div
                  onClick={handleProposalClick}
                  className="cursor-pointer bg-[#0b192c] hover:bg-[#1e3a8a] text-white p-4 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Generate Pitch Proposal Quote (PDF)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                <div
                  onClick={onScheduleTour}
                  className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-900 p-3.5 rounded-xl text-center border border-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold">Book Site Tour in Kizhakkan Muthoor</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
