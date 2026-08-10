import React, { useState } from 'react';

export default function InquiryImageCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquire" className="py-24 bg-[#061a23] text-white text-center">
      <div className="max-w-xl mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-4 mb-10">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal leading-tight text-[#f3d37a]">
            Experience<br />
            Orio Florenza
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Step into a world where architectural vision meets uncompromising luxury. Register your interest for an exclusive preview.
          </p>
        </div>

        {/* Input Form */}
        {submitted ? (
          <div className="bg-[#0b2430] p-8 border border-[#d4af37]/30 text-center space-y-3">
            <h3 className="text-xl font-serif text-[#f3d37a]">Request Confirmed</h3>
            <p className="text-xs text-slate-300">Our executive concierge will contact you shortly to schedule your private tour.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <input
                type="text"
                required
                placeholder="FULL NAME"
                className="w-full bg-[#04121a] border border-slate-700/60 focus:border-[#d4af37] px-5 py-3.5 text-xs tracking-widest text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="EMAIL ADDRESS"
                className="w-full bg-[#04121a] border border-slate-700/60 focus:border-[#d4af37] px-5 py-3.5 text-xs tracking-widest text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                placeholder="PHONE NUMBER"
                className="w-full bg-[#04121a] border border-slate-700/60 focus:border-[#d4af37] px-5 py-3.5 text-xs tracking-widest text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#f3d37a] hover:bg-[#d4af37] text-[#061a23] text-xs uppercase tracking-[3px] font-extrabold py-4 shadow-xl transition-colors"
              >
                SCHEDULE A PRIVATE TOUR
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
