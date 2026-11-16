import React from 'react';
import { ShieldCheck, Dna, FileCheck, Stethoscope, Heart, Lock, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface HealthEthicsProps {
  onOpenEnquiry: () => void;
}

export const HealthEthics: React.FC<HealthEthicsProps> = ({ onOpenEnquiry }) => {
  const healthPillars = [
    {
      icon: Dna,
      title: 'Orivet DNA Panel Screening',
      detail: 'Both parents are 100% DNA tested clear for Hypertrophic Cardiomyopathy (HCM), Polycystic Kidney Disease (PKD), and hereditary retinal disorders. Zero genetic risk passed to kittens.',
    },
    {
      icon: Stethoscope,
      title: '10-Point Veterinary Examination',
      detail: 'Every kitten is independently examined by licensed South Australian veterinary surgeons for cardiac soundness, clear respiratory sounds, bite alignment, patella stability, and hernia checks.',
    },
    {
      icon: FileCheck,
      title: 'South Australia DACO Registered',
      detail: 'Compliant with the Dog and Cat Management Board (DACO) and the South Australian Animal Welfare Act. Transparent breeder identification and official registration provided with all adoptions.',
    },
    {
      icon: ShieldCheck,
      title: '2-Year Genetic Health Warranty',
      detail: 'We stand firmly behind our bloodlines. Every adoption includes a written legal contract providing a full 24-month replacement or support warranty against hereditary conditions.',
    },
    {
      icon: Lock,
      title: 'Desexed & Microchipped Prior to Departure',
      detail: 'To combat shelter abandonment and ensure responsible pet stewardship, all pet-companion kittens are professionally desexed and microchipped before arriving at their new homes.',
    },
    {
      icon: Heart,
      title: 'Lifetime Shelter-Free Guarantee',
      detail: 'If your circumstances ever change, we promise that any cat bred by us is welcomed back with open arms. No Adelaide Premium Cattery cat will ever be placed in an animal shelter.',
    },
  ];

  return (
    <section id="health-ethics" className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
            <span>Our Uncompromising Standard</span>
            <span className="mx-2 text-[#C8B8A6]">·</span>
            <span>Veterinary Care & Animal Welfare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
            Health & Responsible Breeding in South Australia
          </h2>
          <p className="text-base sm:text-lg text-[#5A4B41] leading-relaxed">
            Responsible breeding is not merely about producing gorgeous coats; it is a sacred ethical responsibility to the kittens, their parents, and the families who love them.
          </p>
        </div>

        {/* Contrast Table: Responsible Breeding vs Backyard Breeding */}
        <div className="bg-white rounded-2xl border border-[#E8DFD8] overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FAF7F2] to-[#F5EFEB] border-b border-[#E8DFD8]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#382A22] font-display">
              Why Ethical Breeding Matters
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4B41] mt-1">
              Compare our verified Adelaide standards with indiscriminate backyard breeders.
            </p>
          </div>

          <div className="divide-y divide-[#E8DFD8]">
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-center bg-[#FAF7F2]/50">
              <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                Breeding Standard
              </div>
              <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-[#382A22] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Adelaide Premium Cattery</span>
              </div>
              <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-[#8A7669] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Unverified / Backyard Sellers</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-start text-xs sm:text-sm">
              <div className="md:col-span-4 font-semibold text-[#382A22]">
                Parent DNA Disease Testing
              </div>
              <div className="md:col-span-4 text-[#5A4B41]">
                Complete Orivet genomic panels for HCM, PKD, PRA. Only verified negative bloodlines bred.
              </div>
              <div className="md:col-span-4 text-[#7A6455]">
                Rarely tested. Kittens often suffer fatal heart failure (HCM) or renal failure (PKD) by age 2–4.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-start text-xs sm:text-sm">
              <div className="md:col-span-4 font-semibold text-[#382A22]">
                Living Conditions
              </div>
              <div className="md:col-span-4 text-[#5A4B41]">
                100% cage-free home nursery. Queens live as pampered family pets with ample play and rest.
              </div>
              <div className="md:col-span-4 text-[#7A6455]">
                Cages, sheds, or outdoor wire enclosures with little human contact and high virus transmission.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-start text-xs sm:text-sm">
              <div className="md:col-span-4 font-semibold text-[#382A22]">
                Veterinary Inclusions
              </div>
              <div className="md:col-span-4 text-[#5A4B41]">
                Double core vaccinations, microchip registered with DACO SA, desexing, and full vet passport.
              </div>
              <div className="md:col-span-4 text-[#7A6455]">
                Unvaccinated or single vaccine; buyers left with expensive $500–$800 desexing and chipping fees.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-start text-xs sm:text-sm">
              <div className="md:col-span-4 font-semibold text-[#382A22]">
                Contractual Guarantee
              </div>
              <div className="md:col-span-4 text-[#5A4B41]">
                Binding 2-year written health warranty + lifetime breeder support and return policy.
              </div>
              <div className="md:col-span-4 text-[#7A6455]">
                No contract, cash-in-hand transactions with zero recourse if health problems emerge.
              </div>
            </div>
          </div>
        </div>

        {/* 6 Health Commitment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#EADDCF] flex items-center justify-center text-[#5A4232]">
                  <Icon className="w-5 h-5 text-[#8C6D58]" />
                </div>
                <h4 className="text-base font-bold text-[#382A22]">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-[#5A4B41] leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Veterinary Note Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFD8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#382A22] font-display">
              Have Questions About Our Veterinary Clearances?
            </h4>
            <p className="text-xs sm:text-sm text-[#5A4B41]">
              We are pleased to provide copies of parental DNA health certificates and South Australia registration upon request.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 bg-[#5A4232] hover:bg-[#433124] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Health Documentation
          </button>
        </div>
      </div>
    </section>
  );
};
