import React from 'react';
import { HeartHandshake, Home, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { nurseryCareImg, TESTIMONIALS } from '../data/catteryData.ts';

interface AboutUsProps {
  onOpenEnquiry: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
            <span>Our Heritage & Values</span>
            <span className="mx-2 text-[#C8B8A6]">·</span>
            <span>Adelaide, South Australia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
            Ethical, Cage-Free Breeding Grounded in Love, Science & Care
          </h2>
          <p className="text-base sm:text-lg text-[#5A4B41] leading-relaxed">
            Adelaide Premium Cattery was founded with a singular conviction: that kittens deserve to be born into warmth, nurtured without cages, and raised as treasured family members from their very first breath.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#E8DFD8] bg-[#F5EFEB] shadow-md relative">
              <img
                src={nurseryCareImg}
                alt="Mother cat peacefully nursing tiny kittens in a clean, sunlit Adelaide cattery nursery"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-[#FAF7F2] border-t border-[#E8DFD8] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#7A5B45]">
                  <span>Pristine Home Nursery</span>
                  <span>·</span>
                  <span>24/7 Maternal Comfort</span>
                </div>
                <p className="text-xs text-[#5A4B41] leading-normal">
                  Our queens nurse in climate-controlled bedrooms with soothing ambient music, daily hygiene sanitation, and unrestricted room to roam.
                </p>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-4 text-sm sm:text-base text-[#5A4B41] leading-relaxed">
              <p>
                Based in the peaceful Adelaide foothills of South Australia, we are registered cat breeders dedicated exclusively to the welfare of pedigree Ragdolls and British Shorthairs. We reject commercial breeding mills and mass-litter production. Instead, we keep our breeding program intentionally small and intimate.
              </p>
              <p>
                Every queen receives extended recovery periods between litters. Every kitten is born directly into our living spaces, sleeping near our bedside during their vulnerable early weeks, and later frolicking across our sunlit living rooms.
              </p>
              <p>
                This intensive home socialisation ensures that when an Adelaide Premium Cattery kitten enters your home, they are already accustomed to children, regular domestic noises, gentle grooming brushes, and human cuddles.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E8DFD8] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EADDCF] flex items-center justify-center text-[#5A4232]">
                  <Home className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#382A22]">100% Cage-Free</h3>
                <p className="text-xs text-[#7A6455] leading-normal">
                  Zero cages or outdoor confinement. Kittens run free underfoot in our sanitised home.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E8DFD8] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EADDCF] flex items-center justify-center text-[#5A4232]">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#382A22]">Rigorous Vet Protocols</h3>
                <p className="text-xs text-[#7A6455] leading-normal">
                  Pre-departure health clearance, double vaccination, desexing, and DACO microchipping.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E8DFD8] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EADDCF] flex items-center justify-center text-[#5A4232]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#382A22]">Lifetime Breeder Care</h3>
                <p className="text-xs text-[#7A6455] leading-normal">
                  We remain your trusted lifelong resource for nutritional, behavioural, and wellness advice.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-3 text-sm font-semibold text-white bg-[#5A4232] hover:bg-[#433124] rounded-lg transition-colors cursor-pointer"
              >
                Connect With Our Adelaide Team
              </button>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Verified Testimonials from Adelaide Cat Parents */}
        <div className="pt-8 border-t border-[#E8DFD8] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-[#7A5B45] uppercase tracking-wide">Adelaide Adopter Experiences</span>
              <h3 className="text-2xl font-bold text-[#382A22] font-display">Loved by Families Across South Australia</h3>
            </div>
            <p className="text-xs text-[#7A6455]">Real experiences from verified Adelaide kitten adopters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F5EFEB] border border-[#E8DFD8] flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#48392F] italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-[#E2D5C9]">
                  <div className="text-xs font-bold text-[#382A22]">{t.author}</div>
                  <div className="text-[11px] text-[#7A6455] flex items-center gap-1.5 pt-0.5">
                    <span>{t.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.breed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
