import React from 'react';
import { Trees, ShieldCheck, MapPin, CheckCircle2, Phone } from 'lucide-react';

export default function FullBleedBanner() {
  return (
    <section className="py-16 bg-white text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/8] min-h-[360px]">
          <img
            src="/assets/orion_images/maple2.png"
            alt="Orio Maple Nature Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/90 via-[#0b192c]/60 to-transparent" />
          
          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center max-w-xl text-white space-y-4">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">The Art of Peaceful Living</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
              Leaving Behind Roadside Noise & Horns
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              Orio Maple is strategically placed 250 meters off Kizhakkan Muthoor Junction to provide fresh, pollution-free air and pristine quiet.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                <Trees className="w-4 h-4 text-emerald-400" />
                <span>Zero Air Pollution</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>250m Off Main Jn</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
