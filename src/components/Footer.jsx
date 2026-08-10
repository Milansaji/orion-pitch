import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#04121a] text-slate-400 py-12 px-6 lg:px-12 border-t border-slate-800/80 text-left text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Left Brand */}
        <div className="space-y-2 max-w-sm">
          <span className="font-serif text-xl font-normal text-white block">
            Orio Florenza
          </span>
          <p className="text-[11px] text-slate-500 font-light leading-relaxed">
            Thiruvalla's premier luxury residences. All architectural renderings are artist conceptualizations.
          </p>
        </div>

        {/* Right Links matching mock-up */}
        <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-white transition-colors">Brochure Download</a>
          <a href="#" className="hover:text-white transition-colors">Investor Relations</a>
        </div>

      </div>
    </footer>
  );
}
