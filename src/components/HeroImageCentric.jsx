import React from 'react';
import { Trees, MapPin, ShieldCheck, TrendingUp, DollarSign, ArrowRight, Download, Sparkles, Building, Award } from 'lucide-react';

export default function HeroImageCentric() {
  return (
    <section id="hero" className="relative pt-24 pb-16 bg-[#0b192c] text-white text-left overflow-hidden">
      
      {/* Ambient Luxury Lighting Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pre-Launch Investor Gold Badge */}
        <div className="max-w-4xl space-y-4 mb-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-pill-badge text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Pre-Launch Investor Tier • ₹85 Lakhs Starting Valuation</span>
          </div>

          {/* Luxury Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]">
            Orio Maple <br />
            <span className="gold-gradient-text font-serif">Luxury Real Estate Asset</span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            11 exclusive luxury nature villas tucked 250m off Kizhakkan Muthoor Junction, Thiruvalla. Engineered for high capital growth, strong rental yield, and pristine peaceful living.
          </p>
        </div>

        {/* FINANCIAL ROI & MONEY METRICS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="p-5 rounded-2xl gold-glass-card">
            <p className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">Starting Price</p>
            <p className="text-3xl font-serif font-bold text-white">₹85 Lakhs</p>
            <p className="text-xs text-emerald-400 font-semibold mt-1">Pre-Launch Valuation</p>
          </div>

          <div className="p-5 rounded-2xl gold-glass-card">
            <p className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">Capital Growth</p>
            <p className="text-3xl font-serif font-bold text-emerald-400">18.5%</p>
            <p className="text-xs text-slate-300 mt-1">3-Year Projected ROI</p>
          </div>

          <div className="p-5 rounded-2xl gold-glass-card">
            <p className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">Rental Yield</p>
            <p className="text-3xl font-serif font-bold text-white">6.8% p.a.</p>
            <p className="text-xs text-emerald-400 font-semibold mt-1">NRI Leaseback Option</p>
          </div>

          <div className="p-5 rounded-2xl gold-glass-card">
            <p className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">Compliance</p>
            <p className="text-xl font-serif font-bold text-white">K-RERA Registered</p>
            <p className="text-xs text-slate-300 mt-1">Permit: H11/Ba/83719/19</p>
          </div>

        </div>

        {/* HERO IMAGE CENTRIC SHOWCASE WITH GOLD GLASS OVERLAYS */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Photo Card */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden gold-glass-card group aspect-[16/10] lg:aspect-auto min-h-[440px]">
            <img
              src="/assets/orion_images/maple1.png"
              alt="Orio Maple Primary Facade"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/95 via-[#0b192c]/40 to-transparent" />
            
            {/* Top Floating Specular Price Tag */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 border border-amber-300 shadow-xl flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>Phase 1 Wholesale Pricing • 11 Villa Sanctuary</span>
            </div>

            {/* Bottom Translucent Gold Glass Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl gold-glass-card text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold text-[#d4af37] tracking-wider">Developer Flagship Investment</span>
                <h3 className="text-2xl font-serif font-bold text-white">Orio Maple Thiruvalla</h3>
                <p className="text-xs text-slate-300">Kizhakkan Muthoor Jn • Ready to Move Trophy Asset</p>
              </div>
              
              <a
                href="#contact"
                className="apple-button-press gold-gradient-bg text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-xl hover:brightness-110 flex-shrink-0"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Book VIP Site Visit</span>
              </a>
            </div>
          </div>

          {/* Right Column Stacked Photo Cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            <div className="relative rounded-3xl overflow-hidden gold-glass-card group aspect-[4/3] min-h-[210px]">
              <img
                src="/assets/orion_images/maple2.png"
                alt="Nature Courtyard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Zero Pollution Air</span>
                <p className="text-base font-serif font-bold text-white">Private Courtyard Sanctuary</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden gold-glass-card group aspect-[4/3] min-h-[210px]">
              <img
                src="/assets/orion_images/maple3.png"
                alt="Architectural Details"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">High Appreciation Asset</span>
                <p className="text-base font-serif font-bold text-white">11 Luxury Gated Units</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
