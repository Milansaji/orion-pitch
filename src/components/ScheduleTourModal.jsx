import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, Clock, User, Mail, Phone, Building, CheckCircle2, Sparkles } from 'lucide-react';

export default function ScheduleTourModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'In-Person VIP Tour',
    date: '2026-08-15',
    time: '11:00 AM',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel-gold rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 border border-[#d4af37]/40 relative text-left shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-black/40 rounded-full border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">VIP Appointment Concierge</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Book Private Pitch Presentation</h3>
              <p className="text-xs text-gray-300">Schedule a private site viewing or virtual developer pitch meeting with our senior executive team.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block text-gray-300 mb-1">Presentation Format</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                >
                  <option value="In-Person VIP Tour">In-Person Site Tour & Penthouse Showcase</option>
                  <option value="Virtual VR Pitch Meeting">Virtual 3D VR Pitch Meeting (Zoom / Teams)</option>
                  <option value="Developer Investment Syndicate Pitch">Developer Investment Syndicate Pitch (B2B)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                  >
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                    <option>06:00 PM (Sunset VIP)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr. / Ms. Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Business / Personal Email *</label>
                <input
                  type="email"
                  required
                  placeholder="investor@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:brightness-110 mt-2"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Confirm VIP Pitch Appointment</span>
              </button>

            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">VIP Appointment Confirmed</h3>
            <p className="text-xs text-gray-300 max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our Senior Luxury Director has reserved your presentation slot for <strong className="text-[#d4af37]">{formData.date} at {formData.time}</strong>.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl"
            >
              Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
