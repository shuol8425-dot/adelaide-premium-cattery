import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { heroKittenImg } from '../data/catteryData.ts';

interface HeroProps {
  onExploreKittens: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreKittens, onOpenEnquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F5EFEB] to-[#FAF7F2] pt-8 pb-16 lg:py-20 border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed editorial kicker with clean typographic separator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
              <span>Cat Breeders Adelaide</span>
              <span aria-hidden="true">·</span>
              <span>Ethical Boutique Cattery Adelaide</span>
            </div>

            {/* Headline with balanced wrap and clear presence */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#382A22] tracking-tight leading-[1.15] font-display text-balance">
              Cherished Pedigree Kittens Raised with Love in Adelaide
            </h1>

            {/* Value Proposition prose */}
            <p className="text-base sm:text-lg text-[#5A4B41] leading-relaxed max-w-2xl">
              Welcome to <strong className="text-[#382A22] font-semibold">Adelaide Premium Cattery</strong>. We specialise in genetically health-screened, sweet-tempered <strong className="text-[#382A22] font-semibold">Ragdoll</strong> and <strong className="text-[#382A22] font-semibold">British Shorthair kittens</strong> in Adelaide, South Australia. Raised cage-free in our family home, every kitten is vet-certified, desexed, microchipped, and backed by a comprehensive 2-year health guarantee.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreKittens}
                className="px-6 py-3.5 bg-[#5A4232] hover:bg-[#433124] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>View Kitten Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-white hover:bg-[#F2EAE2] text-[#5A4232] border border-[#D8C7B8] text-sm sm:text-base font-semibold rounded-lg transition-colors flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
              >
                Adoption Enquiry & Waitlist
              </button>
            </div>

            {/* Trust points list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#5A4B41]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>DACO Registered Breeder (South Australia)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>100% DNA Tested Parents (HCM & PKD Clear)</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>Raised Underfoot in Loving Family Home</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>2-Year Congenital Health Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (16:9 or frame balanced) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD8] bg-[#F0E6DC]">
              <img
                src={heroKittenImg}
                alt="Adorable lilac-cream Ragdoll kitten resting on a soft blanket in an Adelaide home - Adelaide Premium Cattery"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo caption captioning ethical home environment */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
                <p className="font-semibold drop-shadow-sm">Hand-Nurtured in Adelaide, South Australia</p>
                <p className="text-white/85 text-[11px] sm:text-xs drop-shadow-sm">Purebred Ragdoll & British Shorthair companions with calm, devoted temperaments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Quantitative Strip */}
        <div className="mt-14 pt-8 border-t border-[#E8DFD8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#382A22] font-display tabular-nums">100%</div>
            <div className="text-xs sm:text-sm text-[#7A6455] font-medium">DNA Tested Negative</div>
            <div className="text-[11px] text-[#9A8475]">HCM & PKD Genetic Screening</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#382A22] font-display tabular-nums">12+</div>
            <div className="text-xs sm:text-sm text-[#7A6455] font-medium">Years Breeding Experience</div>
            <div className="text-[11px] text-[#9A8475]">Dedicated Adelaide Breeder</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#382A22] font-display tabular-nums">2-Year</div>
            <div className="text-xs sm:text-sm text-[#7A6455] font-medium">Written Health Warranty</div>
            <div className="text-[11px] text-[#9A8475]">Genetic Defect Guarantee</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#382A22] font-display tabular-nums">5.0 ★</div>
            <div className="text-xs sm:text-sm text-[#7A6455] font-medium">Adopter Satisfaction</div>
            <div className="text-[11px] text-[#9A8475]">Across Adelaide & SA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
