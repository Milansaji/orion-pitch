import React from 'react';
import Header from './components/Header';
import HeroBaytley from './components/HeroBaytley';
import SanctuarySection from './components/SanctuarySection';
import VisualStoryGrid from './components/VisualStoryGrid';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import InquiryImageCard from './components/InquiryImageCard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#d4af37] selection:text-[#061a23]">
      <Header />
      <HeroBaytley />
      <SanctuarySection />
      <VisualStoryGrid />
      <AmenitiesShowcase />
      <InquiryImageCard />
      <Footer />
    </div>
  );
}
