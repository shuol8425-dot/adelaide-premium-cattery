import React from 'react';
import { Heart, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#382A22] text-[#F5EFEB] border-t border-[#4E3B30] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#5A4232] flex items-center justify-center text-[#EADDCF]">
                <Heart className="w-5 h-5 fill-[#C2A38E] text-[#C2A38E]" />
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-white">
                Adelaide Premium Cattery
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#C8B8A6] leading-relaxed max-w-sm">
              South Australia’s premier boutique cattery dedicated to ethical, cage-free breeding of healthy, DNA-screened pedigree Ragdoll and British Shorthair kittens.
            </p>

            <div className="pt-2 text-xs text-[#A89886] space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C2A38E] shrink-0" />
                <span>DACO Registered Breeder: #DACO198422</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C2A38E] shrink-0" />
                <span>Adelaide Foothills & Metropolitan Region, SA</span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C2A38E]">
              Explore Sections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C8B8A6]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Adelaide Cattery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kittens')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Kittens (Example Profiles)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('care-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  First-Time Cat Care Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('health-ethics')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Health & Responsible Breeding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kitten Care & Breed Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Adoption Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Waitlist Action */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C2A38E]">
              Adoption & Inquiries
            </h4>
            <p className="text-xs text-[#C8B8A6] leading-relaxed">
              We welcome enquiries from prospective parents across Adelaide, South Australia, and interstate. Visits are hosted strictly by appointment.
            </p>

            <div className="space-y-2 text-xs text-[#EADDCF]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C2A38E]" /> (08) 8200 4890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2A38E]" /> hello@adelaidepremiumcattery.com.au
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2.5 px-4 bg-[#5A4232] hover:bg-[#6D513E] text-white text-xs font-semibold rounded-lg transition-colors border border-[#6D513E] cursor-pointer"
              >
                Join Upcoming Litter Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* SEO Context & Legal Copyright */}
        <div className="pt-8 border-t border-[#4E3B30] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A89886]">
          <p>
            © {new Date().getFullYear()} Adelaide Premium Cattery. All rights reserved. Registered Cat Breeders Adelaide, South Australia.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-[#8A7A6B]">
            <span>Cat Breeders Adelaide</span>
            <span>·</span>
            <span>Kittens Adelaide</span>
            <span>·</span>
            <span>Cattery Adelaide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
