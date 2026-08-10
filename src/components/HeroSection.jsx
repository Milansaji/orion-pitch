import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Trees, Building, CheckCircle2, Phone, Download } from 'lucide-react';

export default function HeroSection({ onOpenConfigurator, onOpenScheduleModal, onOpenPitchDeck, pitchMode }) {
  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-white overflow-hidden text-left">
      
      {/* Background Subtle Gradient & Light Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Clean, Concise Text */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* RERA & Location Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Trees className="w-4 h-4 text-emerald-600" />
              <span>Kizhakkan Muthoor, Thiruvalla • K-RERA Registered</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15]">
              Orio Maple <br />
              <span className="text-[#1e3a8a]">Art of Peaceful Living</span>
            </h1>

            {/* Concise Description */}
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              11 exclusive luxury nature villas tucked 250 meters off Kizhakkan Muthoor Junction. Escape city noise with serene pollution-free air, private courtyards, and lush tropical greenery.
            </p>

            {/* Concise Stat Badges Card */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase font-bold text-slate-400">Total Units</p>
                <p className="text-xl font-serif font-bold text-[#0b192c]">11 Villas</p>
                <p className="text-[10px] text-emerald-600 font-medium">Gated Sanctuary</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase font-bold text-slate-400">Location</p>
                <p className="text-xl font-serif font-bold text-[#1e3a8a]">250m Off Jn</p>
                <p className="text-[10px] text-slate-500">Thiruvalla</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase font-bold text-slate-400">Air Index</p>
                <p className="text-xl font-serif font-bold text-emerald-600">Zero Pollution</p>
                <p className="text-[10px] text-emerald-700 font-medium">Serene Green</p>
              </div>
            </div>

            {/* Action Cards (No generic buttons, sleek integrated interactive triggers) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div
                onClick={onOpenConfigurator}
                className="cursor-pointer bg-[#0b192c] hover:bg-[#1e3a8a] text-white p-4 rounded-2xl shadow-lg transition-all flex items-center space-x-4 group border border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-emerald-400">Create & Customize</p>
                  <p className="text-sm font-semibold text-white">Interactive Villa Studio</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform ml-2" />
              </div>

              <div
                onClick={onOpenScheduleModal}
                className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-900 p-4 rounded-2xl border border-slate-300 transition-all flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">Book Viewing</p>
                  <p className="text-sm font-semibold text-slate-900">Schedule Site Visit</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-white p-2">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/orio_hero.png"
                  alt="Orio Maple Thiruvalla Villa Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/90 via-transparent to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 border border-slate-200 shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>K-RERA/Prj/800/2022</span>
                </div>

                {/* Bottom Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Orio Builders Completed Flagship</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Maple Luxury Nature Villas</h3>
                  <p className="text-xs text-slate-200 font-light">Kizhakkan Muthoor Jn, Thiruvalla • 11 Exclusive Units</p>
                </div>
              </div>

              {/* Developer Client Pitch Highlight Strip */}
              <div className="p-4 bg-slate-900 text-white rounded-xl mt-2 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Permit No: H11/Ba/83719/19 Dtd: 20/03/2022</span>
                </div>
                <button
                  onClick={onOpenPitchDeck}
                  className="text-emerald-400 hover:text-white font-bold underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> Pitch Brochure
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
