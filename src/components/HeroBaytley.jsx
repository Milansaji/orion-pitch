import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBaytley() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[650px] sm:min-h-[750px] flex items-center justify-start text-left overflow-hidden bg-[#e8e4dc] select-none font-poppins">
      
      {/* Full-bleed hero image — no dark overlays */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 640px)"
            srcSet="/assets/orion_images/WhatsApp Image 2026-08-10 at 1.18.10 PM.jpeg"
          />
          <img
            src="/assets/orion_images/WhatsApp Image 2026-08-10 at 1.12.49 PM.jpeg"
            alt="Architecture Beyond Imagination Background"
            className="w-full h-full object-cover object-[80%_center]"
          />
        </picture>
      </div>

      {/* Left-aligned content on bright sky area */}
      <div className="relative z-10 w-full px-5 sm:pl-12 lg:pl-16 pr-5 sm:pr-6 pt-16 sm:pt-12">
        <div className="max-w-xl space-y-4 sm:space-y-6">
          
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[3.5px] font-extrabold text-slate-700">
            WHERE VISION MEETS FUTURE
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[88px] text-[#0b192c] leading-[1.08] sm:leading-[1.05] tracking-[-1px] font-semibold">
            Architecture<br />
            Beyond<br />
            <span className="italic text-[#c5a059] font-medium">Imagination.</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-xs sm:max-w-md">
            Redefining tomorrow with iconic design, sustainable living, and spaces that inspire generations.
          </p>

          <div className="pt-2">
            <a
              href="#projects"
              className="inline-flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[2px] font-semibold text-[#0b192c] border border-[#c5a059]/60 bg-[#e8dcc8]/90 hover:bg-[#d4af37] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 group"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0b192c]" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
