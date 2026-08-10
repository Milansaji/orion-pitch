import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Phone, Mail, User, CheckCircle2, Trees, ShieldCheck, MapPin } from 'lucide-react';

export default function InquiryCard() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '2026-08-15',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1e3a8a', '#10b981', '#ffffff']
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative text-left border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="clean-navy-card rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2 border-b border-slate-700 pb-6">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Orio Builders Sales Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Inquire & Book Site Visit</h2>
            <p className="text-xs text-slate-300">Experience Orio Maple 250m off Kizhakkan Muthoor Jn, Thiruvalla.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94464 00469"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Preferred Visit Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-400 outline-none"
                  />
                </div>
              </div>

              {/* Integrated Card Submission (no clunky generic buttons) */}
              <div
                onClick={handleSubmit}
                className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-xl text-center shadow-lg transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Submit Site Visit Request</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Inquiry Received</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Orio Builders sales team will contact you at <strong className="text-emerald-400">{formData.phone}</strong> regarding your site visit on {formData.date}.
              </p>
            </div>
          )}

          {/* Contact Details Card */}
          <div className="pt-4 border-t border-slate-700 grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 944 640 0469 / +91 9400 301 999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>info@oriobuilders.com</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
