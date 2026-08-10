import React from 'react';
import confetti from 'canvas-confetti';
import { X, Download, FileText, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function PitchDeckDownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert("Aura_Vertex_Master_Investment_Pitch_Deck_2026.pdf downloaded! (36 Pages)");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel-gold rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 border border-[#d4af37]/40 relative text-left shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-black/40 rounded-full border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Institutional Brochure & Pitch Deck</span>
          <h3 className="text-2xl font-serif font-bold text-white">Download Investor Pitch Package</h3>
          <p className="text-xs text-gray-300">Complete 36-page prospectus containing floorplans, engineering specs, market analysis, and developer pricing schedule.</p>
        </div>

        <div className="bg-black/50 p-4 rounded-2xl border border-white/10 space-y-2 text-xs">
          <p className="font-semibold text-white">Package Contents (36 Pages PDF):</p>
          <ul className="space-y-1.5 text-gray-300">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#d4af37]" /> Architectural Blueprints & Ceiling Heights
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#d4af37]" /> 5-Year Capital Appreciation & Cap Rate Matrix
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#d4af37]" /> Material Swatches & Smart Automation Specs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#d4af37]" /> Developer Escrow & Legal Contract Terms
            </li>
          </ul>
        </div>

        <button
          onClick={handleDownload}
          className="w-full gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:brightness-110"
        >
          <Download className="w-4 h-4 fill-black" />
          <span>Download 36-Page Pitch Deck (PDF 24.8MB)</span>
        </button>

      </div>
    </div>
  );
}
