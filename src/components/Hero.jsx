import React from 'react';
import { Trees, MapPin, ShieldCheck, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 bg-white overflow-hidden text-left border-b border-slate-200">
      
      {/* Background subtle tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Trees className="w-4 h-4 text-emerald-600" />
              <span>Thiruvalla • K-RERA Registered Project</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15]">
              Orio Maple <br />
              <span className="text-[#1e3a8a]">Art of Peaceful Living</span>
            </h1>

            <p className="text-slate-600 text-base font-light leading-relaxed max-w-xl">
              11 exclusive luxury residences placed 250 meters off Kizhakkan Muthoor Junction, Thiruvalla. Fresh pollution-free air, serene greenery, and modern architectural elegance.
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase font-bold text-slate-400">Total Units</p>
                <p className="text-xl font-serif font-bold text-[#0b192c]">11 Units</p>
                <p className="text-[10px] text-emerald-600 font-medium">Completed</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase font-bold text-slate-400">Location</p>
                <p className="text-xl font-serif font-bold text-[#1e3a8a]">250m Off Jn</p>
                <p className="text-[10px] text-slate-500">Thiruvalla</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase font-bold text-slate-400">Environment</p>
                <p className="text-xl font-serif font-bold text-emerald-600">Zero Pollution</p>
                <p className="text-[10px] text-emerald-700 font-medium">Peaceful Air</p>
              </div>
            </div>

            {/* Integrated Card CTA */}
            <div className="p-4 rounded-2xl bg-[#0b192c] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-slate-800">
              <div className="space-y-0.5">
                <p className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Schedule Site Visit</p>
                <p className="text-sm font-semibold text-white">Experience Orio Maple in Thiruvalla</p>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

          </div>

          {/* Right Showcase Image Card using authentic image from orion_images */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2.5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/orion_images/maple1.png"
                  alt="Orio Maple Project Thiruvalla"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/85 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-slate-900 border border-slate-200 shadow-sm">
                  K-RERA/Prj/800/2022
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">By Orio Builders</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Orio Maple Luxury Project</h3>
                  <p className="text-xs text-slate-200 font-light">Kizhakkan Muthoor, Thiruvalla, Pathanamthitta</p>
                </div>
              </div>

              {/* RERA Approval Strip */}
              <div className="p-3 bg-slate-900 text-white rounded-xl mt-2 flex items-center justify-between text-xs">
                <span className="text-slate-300">Permit No: <strong>H11/Ba/83719/19 Dtd: 20/03/2022</strong></span>
                <span className="text-emerald-400 font-bold">Status: Completed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
