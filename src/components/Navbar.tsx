import React, { useState } from 'react';
import { Menu, X, Heart, Phone, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: (kittenName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', target: 'about' },
    { label: 'Our Kittens', target: 'kittens' },
    { label: 'Care Guide', target: 'care-guide' },
    { label: 'Health & Ethics', target: 'health-ethics' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD8]">
      {/* Subtle Adelaide announcement bar */}
      <div className="bg-[#5A4232] text-[#F5EFEB] py-1.5 px-4 text-xs font-medium text-center tracking-wide">
        <span className="hidden sm:inline">Adelaide, South Australia</span>
        <span className="hidden sm:inline mx-2 text-[#C8B8A6]">·</span>
        <span>Ethical Registered Cat Breeders</span>
        <span className="mx-2 text-[#C8B8A6]">·</span>
        <span>DACO Compliant & DNA Screened Bloodlines</span>
      </div>

      {/* Main Top Bar strictly obeying the 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single clean text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#EADDCF] flex items-center justify-center text-[#5A4232] group-hover:bg-[#DFCFBE] transition-colors shrink-0">
              <Heart className="w-5 h-5 fill-[#8C6D58] text-[#8C6D58]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#382A22] font-display whitespace-nowrap shrink-0 block leading-tight">
                Adelaide Premium Cattery
              </span>
              <span className="text-xs text-[#7A6455] hidden sm:block tracking-wide">
                Boutique Pedigree Kittens · South Australia
              </span>
            </div>
          </button>

          {/* Zone 2: 4-6 concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5A4B41]">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-[#8C6D58] transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8C6D58] hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#5A4232] hover:bg-[#433124] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            >
              Enquire for Kittens
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#5A4232] rounded-md"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5A4B41] hover:text-[#382A22] rounded-lg hover:bg-[#F2EAE2] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD8] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#48392F] hover:bg-[#F0E6DC] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8DFD8] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#5A4232] rounded-lg shadow-sm active:scale-95 transition-transform"
            >
              Submit Kitten Adoption Enquiry
            </button>
            <div className="text-xs text-[#7A6455] text-center space-y-1 pt-1">
              <p className="flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Adelaide Foothills & Metro, South Australia
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> hello@adelaidepremiumcattery.com.au
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
