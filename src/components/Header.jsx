import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-8 bg-transparent">
      <div className="w-full px-5 sm:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Mobile Brand / Title */}
        <div className="lg:hidden">
          <a href="#hero" className="font-serif text-lg font-bold text-slate-800 tracking-wider">
            ORION
          </a>
        </div>

        {/* Far Left Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-10 text-[12.5px] uppercase tracking-[2.5px] font-bold text-slate-800">
          <a href="#hero" className="hover:text-[#c5a059] transition-colors">HOME</a>
          <a href="#about" className="hover:text-[#c5a059] transition-colors">ABOUT</a>
          <a href="#projects" className="hover:text-[#c5a059] transition-colors">PROJECTS</a>
          <a href="#amenities" className="hover:text-[#c5a059] transition-colors">AMENITIES</a>
          <a href="#contact" className="hover:text-[#c5a059] transition-colors">CONTACT</a>
        </nav>

        {/* Right Enquire Now Button - Desktop */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="text-[12px] uppercase tracking-[2px] font-bold text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-white px-7 py-2.5 rounded-full transition-all duration-300"
          >
            ENQUIRE NOW
          </a>
        </div>

        {/* Mobile Menu Button Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-900 p-2 rounded-lg bg-white/40 backdrop-blur-md border border-white/40 shadow-sm focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Glass Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-slate-950/98 border-b border-white/10 px-6 py-8 space-y-6 text-left backdrop-blur-2xl shadow-2xl z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-bold text-white hover:text-[#c5a059]">HOME</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-bold text-white hover:text-[#c5a059]">ABOUT</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-bold text-white hover:text-[#c5a059]">PROJECTS</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-bold text-white hover:text-[#c5a059]">AMENITIES</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[2.5px] font-bold text-white hover:text-[#c5a059]">CONTACT</a>
          </nav>

          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center text-xs uppercase tracking-[2px] font-bold text-[#c5a059] border border-[#c5a059] hover:bg-[#c5a059] hover:text-slate-950 w-full py-3 rounded-full transition-all"
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
