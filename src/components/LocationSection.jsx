import React from 'react';
import { MapPin, Navigation, Building2, Train, Hospital, GraduationCap } from 'lucide-react';

const SPOTS = [
  { name: 'Kizhakkan Muthoor Junction', dist: '250 Meters', icon: MapPin },
  { name: 'Thiruvalla Railway Station', dist: '3.5 km', icon: Train },
  { name: 'Believers Church Medical College', dist: '4.0 km', icon: Hospital },
  { name: 'Pushpagiri Medical Centre', dist: '3.2 km', icon: Hospital },
  { name: 'Top Educational Institutions', dist: 'Within 3 km', icon: GraduationCap },
  { name: 'Cochin International Airport', dist: '95 km (2 hrs)', icon: Navigation }
];

export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-white relative text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Prime Location</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            Kizhakkan Muthoor, <span className="text-[#1e3a8a]">Thiruvalla</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Conveniently connected to major hubs while tucked in a peaceful pollution-free enclave.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPOTS.map((spot, idx) => {
            const Icon = spot.icon;
            return (
              <div key={idx} className="clean-white-card p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#1e3a8a] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">{spot.name}</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {spot.dist}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
