import React from 'react';
import { ShieldCheck, Trees, MapPin, Building2, CheckCircle2, Download, Phone, Sparkles, Award } from 'lucide-react';

const HIGHLIGHTS = [
  { title: 'K-RERA Approved', desc: 'K-Rera/Prj/800/2022', icon: ShieldCheck },
  { title: 'Prime Location', desc: '250m off Kizhakkan Muthoor Jn, Thiruvalla', icon: MapPin },
  { title: 'Exclusive Gated Sanctuary', desc: '11 Luxury Nature Villas', icon: Building2 },
  { title: 'Pollution-Free Air', desc: 'Serene Nature Ecosystem', icon: Trees }
];

export default function PitchDeckSection({ onOpenPitchDeckModal, onScheduleTour }) {
  return (
    <section id="pitch-metrics" className="py-20 bg-white relative overflow-hidden text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Orio Builders Completed Flagship Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Marketing Pitch: <span className="text-[#1e3a8a]">Orio Maple Project</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Designed specifically to pitch Orio Builders on digital buyer presentation, floorplan customizer, and client lead acquisition.
            </p>
          </div>

          <div
            onClick={onOpenPitchDeckModal}
            className="cursor-pointer bg-[#0b192c] hover:bg-[#1e3a8a] text-white px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Orio Pitch Deck (PDF)</span>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="clean-white-card p-5 rounded-2xl border border-slate-200 hover:border-[#1e3a8a] transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#1e3a8a] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Pitch Presentation Box */}
        <div className="clean-navy-card rounded-3xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700 pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Orio Builders Official Permit & Credentials</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Peaceful Living in Pathanamthitta District</h3>
            </div>
            <div className="text-right text-xs text-slate-300">
              <p>Permit No: <strong className="text-white">H11/Ba/83719/19 Dtd: 20/03/2022</strong></p>
              <p>RERA: <strong className="text-emerald-400">K-Rera/Prj/800/2022</strong></p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-200">
            <div className="bg-white/10 p-4 rounded-xl">
              <span className="text-emerald-300 uppercase font-semibold block mb-1">01. Zero Pollution Zone</span>
              <p className="text-slate-300">Fresh clean air away from vehicle horns and roadside noise.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <span className="text-emerald-300 uppercase font-semibold block mb-1">02. 250 Meters Off Junction</span>
              <p className="text-slate-300">Instant access to Kizhakkan Muthoor Jn while maintaining quiet serenity.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <span className="text-emerald-300 uppercase font-semibold block mb-1">03. Completed Trophy Asset</span>
              <p className="text-slate-300">Ready-to-move luxury nature villas engineered by Orio Builders.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-300">Orio Builders Head Office: College Rd, Jn, Kizhakken Muthoor, Thiruvalla</span>
            <div
              onClick={onScheduleTour}
              className="cursor-pointer text-emerald-400 hover:text-white font-bold underline flex items-center gap-1"
            >
              <span>Schedule One-on-One Client Pitch Presentation</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
