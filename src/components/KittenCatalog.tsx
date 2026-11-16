import React, { useState } from 'react';
import { Sparkles, Info, Heart, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { EXAMPLE_KITTENS, KittenProfile } from '../data/catteryData.ts';
import { KittenModal } from './KittenModal.tsx';

interface KittenCatalogProps {
  onOpenEnquiry: (kittenName?: string) => void;
}

export const KittenCatalog: React.FC<KittenCatalogProps> = ({ onOpenEnquiry }) => {
  const [selectedBreed, setSelectedBreed] = useState<'all' | 'Ragdoll' | 'British Shorthair'>('all');
  const [activeKittenModal, setActiveKittenModal] = useState<KittenProfile | null>(null);

  const filteredKittens = selectedBreed === 'all'
    ? EXAMPLE_KITTENS
    : EXAMPLE_KITTENS.filter((k) => k.breed === selectedBreed);

  return (
    <section id="kittens" className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
              <span>Purebred Breeding Program</span>
              <span className="mx-2 text-[#C8B8A6]">·</span>
              <span>Kittens Adelaide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
              Our Kittens & Upcoming Litter Types
            </h2>
            <p className="text-base text-[#5A4B41] leading-relaxed">
              Explore representative profiles of our purebred Ragdoll and British Shorthair kittens. Because we breed ethically with limited litters, all kittens are reserved through our private waitlist.
            </p>
          </div>

          {/* Functional Breed Filter Controls (Interactive Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EADDCF] rounded-xl self-start md:self-auto border border-[#D8C7B8]">
            <button
              onClick={() => setSelectedBreed('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedBreed === 'all'
                  ? 'bg-white text-[#382A22] shadow-xs font-semibold'
                  : 'text-[#6A584C] hover:text-[#382A22]'
              }`}
            >
              All Kittens ({EXAMPLE_KITTENS.length})
            </button>
            <button
              onClick={() => setSelectedBreed('Ragdoll')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedBreed === 'Ragdoll'
                  ? 'bg-white text-[#382A22] shadow-xs font-semibold'
                  : 'text-[#6A584C] hover:text-[#382A22]'
              }`}
            >
              Ragdoll
            </button>
            <button
              onClick={() => setSelectedBreed('British Shorthair')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedBreed === 'British Shorthair'
                  ? 'bg-white text-[#382A22] shadow-xs font-semibold'
                  : 'text-[#6A584C] hover:text-[#382A22]'
              }`}
            >
              British Shorthair
            </button>
          </div>
        </div>

        {/* Ethical Transparency Note: Clear explanation of Example Profiles */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E2D5C9] flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-[#5A4B41]">
            <span className="font-bold text-[#382A22] block">Ethical Cattery Notice: Example Profiles</span>
            <p>
              To protect animal welfare and prevent impulsive purchasing, we showcase representative profiles from previous litters rather than listing live kittens for immediate transactional purchase. By joining our seasonal waitlist, you gain first access to reserve a kitten from upcoming litters matching your preferred breed, colour, and personality.
            </p>
          </div>
        </div>

        {/* Kitten Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredKittens.map((kitten) => (
            <div
              key={kitten.id}
              className="group bg-[#FAF7F2] rounded-2xl border border-[#E8DFD8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#EADDCF]">
                  <img
                    src={kitten.image}
                    alt={`${kitten.breed} kitten profile - Adelaide Premium Cattery`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/55 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Example Profile
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-1.5 text-xs text-[#7A6455] font-medium">
                    <span>{kitten.breed}</span>
                    <span aria-hidden="true">·</span>
                    <span>{kitten.gender}</span>
                    <span aria-hidden="true">·</span>
                    <span>{kitten.birthWeek}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#382A22] group-hover:text-[#8C6D58] transition-colors font-display">
                    {kitten.name}
                  </h3>

                  {/* Coat Pattern */}
                  <p className="text-xs text-[#5A4B41] font-medium">
                    Coat: {kitten.colorPattern}
                  </p>

                  {/* Temperament highlight */}
                  <p className="text-xs text-[#7A6455] line-clamp-2 leading-relaxed">
                    {kitten.story}
                  </p>

                  {/* Health clearance summary */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#4F6851] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{kitten.dnaStatus}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setActiveKittenModal(kitten)}
                  className="w-full py-2.5 px-3 bg-[#F0E6DC] hover:bg-[#E5D7CA] text-[#382A22] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Profile & Health</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(kitten.name)}
                  className="w-full py-2.5 px-3 bg-[#5A4232] hover:bg-[#433124] text-white text-xs font-semibold rounded-lg transition-colors text-center cursor-pointer"
                >
                  Enquire About Similar Litter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist CTA banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#FAF7F2] to-[#F0E6DC] border border-[#E8DFD8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#382A22] font-display">
              Looking for a Specific Ragdoll or British Shorthair Coat?
            </h3>
            <p className="text-sm text-[#5A4B41]">
              We accommodate preferences for Lilac, Blue Point, Golden Shaded, and Chocolate varieties in upcoming Adelaide litters.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Upcoming Litter Waitlist')}
            className="px-6 py-3 bg-[#5A4232] hover:bg-[#433124] text-white text-sm font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            Join Seasonal Waitlist
          </button>
        </div>
      </div>

      {/* Profile Detail Modal */}
      <KittenModal
        kitten={activeKittenModal}
        onClose={() => setActiveKittenModal(null)}
        onEnquire={onOpenEnquiry}
      />
    </section>
  );
};
