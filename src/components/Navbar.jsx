import React, { useState, useEffect } from 'react';
import { Home, Trees, Phone, Download, Sparkles, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ pitchMode, setPitchMode, onOpenConfigurator, onOpenScheduleModal, onOpenPitchDeck }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' 
        : 'bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-transparent py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Orio Builders Maple Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0b192c] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#1e3a8a] transition-colors">
              <Trees className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  ORIO MAPLE
                </span>
                <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300">
                  Peaceful Living
                </span>
              </div>
              <p className={`text-[10px] tracking-wider uppercase font-medium ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Thiruvalla • By Orio Builders
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center space-x-8 text-sm font-medium ${scrolled ? 'text-slate-700' : 'text-slate-200'}`}>
            <a href="#overview" className="hover:text-[#1e3a8a] transition-colors">Overview</a>
            <a href="#configurator" className="text-[#1e3a8a] font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              Villa Configurator
            </a>
            <a href="#nature" className="hover:text-[#1e3a8a] transition-colors">Nature Living</a>
            <a href="#pitch-metrics" className="hover:text-[#1e3a8a] transition-colors">Client Pitch</a>
            <a href="#gallery" className="hover:text-[#1e3a8a] transition-colors">Gallery</a>
            <a href="#location" className="hover:text-[#1e3a8a] transition-colors">Location</a>
          </nav>

          {/* Actions & Pitch Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setPitchMode(!pitchMode)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                pitchMode 
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm' 
                  : scrolled 
                    ? 'bg-slate-100 text-slate-700 border-slate-300 hover:border-[#1e3a8a]' 
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              <span>{pitchMode ? 'Developer Pitch: ACTIVE' : 'Pitch Mode'}</span>
            </button>

            <button
              onClick={onOpenConfigurator}
              className="bg-[#0b192c] hover:bg-[#1e3a8a] text-white text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Customize Villa
            </button>

            <button
              onClick={onOpenScheduleModal}
              className={`border text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 ${
                scrolled ? 'border-slate-300 text-slate-700 hover:bg-slate-50' : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              Book Site Visit
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${scrolled ? 'text-slate-800 border-slate-300' : 'text-white border-white/20'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base text-slate-800">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Overview</a>
            <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="text-[#1e3a8a] font-bold">
              Interactive Villa Studio
            </a>
            <a href="#nature" onClick={() => setMobileMenuOpen(false)}>Nature Features</a>
            <a href="#pitch-metrics" onClick={() => setMobileMenuOpen(false)}>Client Pitch Deck</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConfigurator(); }}
              className="w-full bg-[#0b192c] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Create & Customize Villa
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
