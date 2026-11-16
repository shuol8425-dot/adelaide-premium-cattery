import React from 'react';
import { X, Check, ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { KittenProfile } from '../data/catteryData.ts';

interface KittenModalProps {
  kitten: KittenProfile | null;
  onClose: () => void;
  onEnquire: (kittenName: string) => void;
}

export const KittenModal: React.FC<KittenModalProps> = ({ kitten, onClose, onEnquire }) => {
  if (!kitten) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#FAF7F2] rounded-2xl border border-[#E8DFD8] shadow-2xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="kitten-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#5A4232] shadow-sm hover:shadow transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Header Image & Badge */}
          <div className="relative rounded-xl overflow-hidden border border-[#E8DFD8] bg-[#F5EFEB]">
            <img
              src={kitten.image}
              alt={kitten.name}
              className="w-full h-64 sm:h-72 object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-semibold text-[#5A4232] border border-[#E8DFD8]">
              Example Profile · Breed Representative
            </div>
          </div>

          {/* Profile Header */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-wide">
              <span>{kitten.breed}</span>
              <span aria-hidden="true">·</span>
              <span>{kitten.colorPattern}</span>
              <span aria-hidden="true">·</span>
              <span>{kitten.gender}</span>
            </div>
            <h3 id="kitten-modal-title" className="text-2xl sm:text-3xl font-bold text-[#382A22] font-display">
              {kitten.name}
            </h3>
            <p className="text-xs text-[#7A6455] italic">
              Example profile demonstrating our standard of physical type, health clearance, and calm temperament.
            </p>
          </div>

          {/* Temperament */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#5A4232] uppercase tracking-wider">Temperament & Personality</h4>
            <div className="flex flex-wrap gap-2 text-xs text-[#48392F]">
              {kitten.temperament.map((trait, idx) => (
                <span key={idx} className="bg-[#F0E6DC] border border-[#E2D5C9] px-2.5 py-1 rounded-md">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Story & Background */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#5A4232] uppercase tracking-wider">About This Kitten Profile</h4>
            <p className="text-sm text-[#5A4B41] leading-relaxed">
              {kitten.story}
            </p>
          </div>

          {/* Ideal Home */}
          <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E8DFD8] space-y-1 text-xs">
            <div className="font-bold text-[#382A22] flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#8C6D58]" />
              <span>Recommended Home Environment</span>
            </div>
            <p className="text-[#5A4B41]">{kitten.idealHome}</p>
          </div>

          {/* Health Inclusions Checklist */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold text-[#5A4232] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#8C6D58]" />
              <span>Standard Adelaide Health & Ethical Inclusions</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#48392F]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>2x Core Vaccinations (F3/F4)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Microchipped with DACO SA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Desexed Prior to Rehoming</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Wormed & Flea Treated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>2-Year Genetic Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Transition Luxury Starter Pack</span>
              </div>
            </div>
          </div>

          {/* Pedigree & DNA Lineage */}
          <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E2D5C9] space-y-1 text-xs text-[#5A4B41]">
            <div><strong className="text-[#382A22]">Parentage:</strong> {kitten.parents}</div>
            <div><strong className="text-[#382A22]">Genetic Health:</strong> {kitten.dnaStatus}</div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                onEnquire(kitten.name);
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-[#5A4232] hover:bg-[#433124] text-white text-sm font-semibold rounded-lg text-center transition-colors cursor-pointer"
            >
              Enquire About Upcoming {kitten.breed} Litter
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 bg-white hover:bg-[#F2EAE2] text-[#5A4232] border border-[#D8C7B8] text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
