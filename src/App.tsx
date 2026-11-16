import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { KittenCatalog } from './components/KittenCatalog.tsx';
import { CareGuide } from './components/CareGuide.tsx';
import { HealthEthics } from './components/HealthEthics.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedKittenForEnquiry, setSelectedKittenForEnquiry] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (kittenName?: string) => {
    if (kittenName) {
      setSelectedKittenForEnquiry(kittenName);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#3D322A]">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero
          onExploreKittens={() => scrollToSection('kittens')}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 2. About Us */}
        <AboutUs
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 3. Our Kittens (Example Profiles) */}
        <KittenCatalog
          onOpenEnquiry={(kittenName) => handleOpenEnquiry(kittenName)}
        />

        {/* 4. Cat Care Guide */}
        <CareGuide
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 5. Health and Responsible Breeding */}
        <HealthEthics
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 6. FAQ */}
        <FAQSection
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 7. Contact Us */}
        <ContactSection
          initialKittenName={selectedKittenForEnquiry}
          onClearInitialKitten={() => setSelectedKittenForEnquiry(undefined)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />
    </div>
  );
}
