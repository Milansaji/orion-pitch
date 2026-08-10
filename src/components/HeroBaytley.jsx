import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBaytley() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[650px] sm:min-h-[750px] flex items-center justify-start text-left overflow-hidden bg-slate-900 select-none">
      
      {/* DYNAMIC RESPONSIVE HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          {/* Mobile View Portrait Image (screen width <= 640px) */}
          <source
            media="(max-width: 640px)"
            srcSet="/assets/orion_images/WhatsApp Image 2026-08-10 at 1.18.10 PM.jpeg"
          />
          {/* Desktop View Landscape Image (screen width > 640px) */}
          <img
            src="/assets/orion_images/WhatsApp Image 2026-08-10 at 1.12.49 PM.jpeg"
            alt="Architecture Beyond Imagination Background"
            className="w-full h-full object-cover object-[80%_center]"
          />
        </picture>
      </div>

      {/* RESPONSIVE HERO CONTENT CONTAINER */}
      <div className="relative z-10 w-full px-5 sm:pl-12 lg:pl-16 pr-5 sm:pr-6 pt-16 sm:pt-12">
        <div className="max-w-xl space-y-4 sm:space-y-6">
          
          {/* Eyebrow */}
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[3.5px] font-bold text-slate-700">
            WHERE VISION MEETS FUTURE
          </div>

          {/* Fluid Responsive Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[88px] font-sans text-slate-800 leading-[1.08] sm:leading-[1.05] tracking-[-1px] font-normal">
            Architecture<br />
            Beyond<br />
            <span className="font-serif italic text-[#c5a059] font-normal">Imagination.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-700 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-xs sm:max-w-md">
            Redefining tomorrow with iconic design, sustainable living, and spaces that inspire generations.
          </p>

          {/* Pill Outline CTA Button */}
          <div className="pt-2">
            <a
              href="#projects"
              className="inline-flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[2px] font-semibold text-[#b08a4e] border border-[#c5a059] hover:bg-[#c5a059] hover:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-sm"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b08a4e] group-hover:text-white" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
