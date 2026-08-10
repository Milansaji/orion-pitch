import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-8 bg-transparent">
      <div className="w-full px-5 sm:px-12 lg:px-16 flex items-center justify-between gap-6">
        
        {/* Logo at original left edge; nav kept slightly further in */}
        <div className="flex items-center gap-10 xl:gap-14 min-w-0 max-w-[58%] lg:max-w-[55%]">
          <a href="#hero" className="flex-shrink-0 inline-flex items-center">
            <img
              src="/assets/inner-logo.png"
              alt="crio"
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 ml-24 xl:ml-32 pl-8 xl:pl-12 text-[12.5px] uppercase tracking-[2.5px] font-normal text-black whitespace-nowrap">
            <a href="#hero" className="hover:text-[#c5a059] transition-colors">HOME</a>
            <a href="#about" className="hover:text-[#c5a059] transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-[#c5a059] transition-colors">PROJECTS</a>
            <a href="#amenities" className="hover:text-[#c5a059] transition-colors">AMENITIES</a>
            <a href="#contact" className="hover:text-[#c5a059] transition-colors">CONTACT</a>
          </nav>
        </div>

        {/* Enquire stays clear of building on larger screens */}
        <div className="hidden lg:flex items-center flex-shrink-0 mr-[min(8vw,120px)]">
          <a
            href="#contact"
            className="text-[12px] uppercase tracking-[2px] font-normal text-black border border-black/50 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-slate-950 px-7 py-2.5 rounded-full transition-all duration-300 bg-transparent"
          >
            ENQUIRE NOW
          </a>
        </div>

        {/* Mobile Menu Button — 44px+ tap target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative text-black min-w-11 min-h-11 w-11 h-11 inline-flex items-center justify-center rounded-lg border border-black/25 bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Glass Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-slate-950/98 border-b border-white/10 px-6 py-8 space-y-6 text-left backdrop-blur-2xl shadow-2xl z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-normal text-white hover:text-[#c5a059]">HOME</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-normal text-white hover:text-[#c5a059]">ABOUT</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-normal text-white hover:text-[#c5a059]">PROJECTS</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-normal text-white hover:text-[#c5a059]">AMENITIES</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-normal text-white hover:text-[#c5a059]">CONTACT</a>
          </nav>

          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center text-xs uppercase tracking-[2px] font-normal text-[#c5a059] border border-[#c5a059] hover:bg-[#c5a059] hover:text-slate-950 w-full py-3 rounded-full transition-all"
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
