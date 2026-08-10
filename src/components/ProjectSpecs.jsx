import React from 'react';
import { Home, ShieldCheck, MapPin, Maximize2, Sparkles, CheckCircle2, Download, PhoneCall, Calendar, Layers, Trees } from 'lucide-react';

export default function ProjectSpecs() {
  return (
    <section id="specs" className="py-20 bg-slate-900 text-white border-b border-slate-800 text-left relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Single-Product Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-pill-badge text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Single Product Offer • 11 Villa Gated Sanctuary</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Orio Maple Villa Specifications
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light mt-3">
            An exclusive enclave of 11 luxury independent nature villas tucked 250m off Kizhakkan Muthoor Junction, Thiruvalla. Engineered for high capital growth and serene family living.
          </p>
        </div>

        {/* SINGLE PRODUCT HIGHLIGHT CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
            <Home className="w-8 h-8 text-[#d4af37] mb-3" />
            <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Total Enclave</p>
            <p className="text-2xl font-serif font-bold text-white mt-1">11 Luxury Villas</p>
            <p className="text-xs text-slate-300 mt-1">Gated 3 & 4 BHK Residences</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
            <Layers className="w-8 h-8 text-emerald-400 mb-3" />
            <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Built-Up Area</p>
            <p className="text-2xl font-serif font-bold text-white mt-1">2,100 – 2,600 Sq.Ft</p>
            <p className="text-xs text-slate-300 mt-1">4.5 to 6.0 Cent Plots</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
            <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-3" />
            <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Government Permit</p>
            <p className="text-2xl font-serif font-bold text-white mt-1">K-RERA Approved</p>
            <p className="text-xs text-slate-300 mt-1">H11/Ba/83719/19 Dtd: 20/03/2022</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
            <MapPin className="w-8 h-8 text-emerald-400 mb-3" />
            <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Prime Location</p>
            <p className="text-2xl font-serif font-bold text-white mt-1">Kizhakkan Muthoor</p>
            <p className="text-xs text-slate-300 mt-1">250m off MC Road Junction</p>
          </div>

        </div>

        {/* SINGLE PRODUCT BUYING CALL-TO-ACTION CARD */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b192c] via-[#1e3a8a] to-[#0b192c] border border-amber-500/40 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#d4af37]">
              Developer Direct Wholesale Rate
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Own an Orio Maple Villa Starting at ₹85 Lakhs
            </h3>
            <p className="text-slate-200 text-sm sm:text-base font-light">
              Limited 11-villa inventory available. Lock in phase 1 investor pricing with flexible payment schedules and immediate registry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <a
              href="#contact"
              className="apple-button-press gold-gradient-bg text-slate-950 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4.5 rounded-full shadow-xl flex items-center justify-center gap-2 hover:brightness-110"
            >
              <Calendar className="w-4 h-4 fill-slate-950" />
              <span>Book Private Villa Tour</span>
            </a>

            <a
              href="tel:+919847000000"
              className="apple-button-press bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4.5 rounded-full shadow-md flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Sales Desk</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
