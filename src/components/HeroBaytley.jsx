import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBaytley() {
  return (
    <section
      id="hero"
      className="relative w-full h-[88svh] min-h-[520px] max-h-[760px] sm:h-screen sm:min-h-[750px] sm:max-h-none flex items-end sm:items-center justify-start text-left overflow-hidden bg-[#e8e4dc] select-none font-poppins"
    >
      
      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 640px)"
            srcSet="/assets/orion_images/WhatsApp Image 2026-08-10 at 1.18.10 PM.jpeg"
          />
          <img
            src="/assets/orion_images/WhatsApp Image 2026-08-10 at 1.12.49 PM.jpeg"
            alt="Architecture Beyond Imagination Background"
            className="w-full h-full object-cover object-[80%_center] sm:object-[80%_center]"
          />
        </picture>

        {/* Mobile-only bottom scrim for text legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-[48%] sm:hidden pointer-events-none bg-gradient-to-t from-black/80 via-black/45 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-16 lg:px-24 xl:px-28 pt-24 pb-8 sm:pt-20 sm:pb-10">
        <div className="max-w-xl space-y-4 sm:space-y-7 text-left">
          
          <div className="text-[12px] sm:text-[14px] uppercase tracking-[3px] sm:tracking-[3.5px] font-normal text-white/90 sm:text-slate-700">
            WHERE VISION MEETS FUTURE
          </div>

          {/* Mobile: 2 lines; Desktop: 3 lines */}
          <h1 className="text-[1.85rem] leading-[1.12] sm:text-6xl lg:text-[86px] sm:leading-[1.05] tracking-[-0.5px] sm:tracking-[-1px] font-normal text-left text-white sm:text-[#0b192c]">
            Architecture{' '}
            <br className="hidden sm:block" />
            Beyond
            <br />
            <span className="text-[#f3d37a] sm:text-[#c5a059] font-normal">Imagination.</span>
          </h1>

          <p className="text-white/85 sm:text-slate-600 text-sm sm:text-sm lg:text-base leading-relaxed font-normal max-w-md text-left">
            Redefining tomorrow with iconic design, sustainable living, and spaces that inspire generations.
          </p>

          <div className="pt-1 sm:pt-2">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto justify-center items-center space-x-3 text-[12px] sm:text-xs uppercase tracking-[2px] font-normal text-[#0b192c] border border-[#c5a059]/60 bg-[#e8dcc8] sm:bg-[#e8dcc8]/90 hover:bg-[#d4af37] px-6 sm:px-8 py-3.5 sm:py-3.5 rounded-full transition-all duration-300 group"
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
