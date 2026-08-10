import React from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Download, Printer, Sparkles, Building2, ShieldCheck, Phone, FileText } from 'lucide-react';

export default function PitchProposalModal({ proposalData, onClose, onBookTour }) {
  if (!proposalData) return null;

  const { floor, layout, theme, upgrades, financials } = proposalData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    alert(`Pitch Proposal Quote #${Math.floor(100000 + Math.random() * 900000)} generated successfully! (PDF Download Triggered)`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel-gold rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 border border-[#d4af37]/40 relative my-8 text-left shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-black/40 rounded-full border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Branding */}
        <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37] text-black font-bold flex items-center justify-center font-serif text-xl">
            AV
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Official Sales Pitch Proposal</span>
            <h3 className="text-xl font-serif font-bold text-white">Aura Vertex Executive Quote</h3>
            <p className="text-[11px] text-gray-400">Quote Reference: #AV-PITCH-2026-982 • Valid for 14 Days</p>
          </div>
        </div>

        {/* Customized Unit Overview */}
        <div className="bg-black/50 p-5 rounded-2xl border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-3 gap-2">
            <div>
              <p className="text-xs text-[#d4af37] uppercase font-semibold">{floor.name} • {floor.range}</p>
              <h4 className="text-2xl font-bold font-serif text-white">{layout.title}</h4>
              <p className="text-xs text-gray-300">{layout.beds} Beds • {layout.baths} Baths • {layout.size}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 uppercase">Total Customized Price</span>
              <p className="text-2xl font-bold font-display text-[#d4af37]">${financials.totalPrice.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/5 p-3 rounded-xl">
              <span className="text-gray-400">Interior Theme</span>
              <p className="font-bold text-white mt-0.5">{theme.name}</p>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <span className="text-gray-400">Horizon View</span>
              <p className="font-bold text-[#d4af37] mt-0.5">{floor.view}</p>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <span className="text-gray-400">Projected Rental Yield</span>
              <p className="font-bold text-emerald-400 mt-0.5">{financials.netRentalYield}% Gross p.a.</p>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-[#d4af37] uppercase tracking-wider">Pricing Breakdown:</p>
          <div className="space-y-1.5 bg-black/40 p-4 rounded-xl border border-white/5 divide-y divide-white/5">
            <div className="flex justify-between py-1">
              <span className="text-gray-300">Base Unit Price ({layout.title}):</span>
              <span className="font-semibold text-white">${layout.basePrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-300">Elevation Level Premium ({floor.name}):</span>
              <span className="font-semibold text-white">${floor.premium.toLocaleString()}</span>
            </div>
            {upgrades.length > 0 && (
              <div className="py-1">
                <span className="text-gray-300 block mb-1">Selected Luxury Upgrades ({upgrades.length}):</span>
                {upgrades.map((u, i) => (
                  <div key={i} className="flex justify-between text-gray-400 pl-2 py-0.5">
                    <span>• {u.name}</span>
                    <span className="text-white">+${u.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between py-2 text-sm font-bold border-t border-[#d4af37]/30">
              <span className="text-[#d4af37]">Final Total Investment:</span>
              <span className="text-[#d4af37] font-display">${financials.totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Investment & Escrow Guarantee */}
        <div className="flex items-center space-x-3 bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/30 text-xs">
          <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <p className="text-emerald-300">
            Includes 5-Year Developer Rental Guarantee Option & Pre-launch Phase 1 Price Lock.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleDownload}
            className="flex-1 gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
          >
            <Download className="w-4 h-4 fill-black" />
            <span>Download PDF Proposal</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-3.5 glass-panel text-white font-semibold text-xs rounded-xl hover:bg-white/10 flex items-center justify-center gap-2 border border-white/15"
          >
            <Printer className="w-4 h-4 text-gray-300" />
            <span>Print Pitch</span>
          </button>
          <button
            onClick={() => { onClose(); onBookTour(); }}
            className="px-5 py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 border border-emerald-500/40"
          >
            <Phone className="w-4 h-4" />
            <span>Schedule Site Visit</span>
          </button>
        </div>

      </div>
    </div>
  );
}
