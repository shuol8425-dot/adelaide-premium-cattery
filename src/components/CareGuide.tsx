import React, { useState } from 'react';
import { BookOpen, CheckSquare, Square, Utensils, Scissors, Home, HeartPulse, Sparkles, AlertCircle } from 'lucide-react';
import { CARE_GUIDE_TOPICS } from '../data/catteryData.ts';

interface CareGuideProps {
  onOpenEnquiry: () => void;
}

export const CareGuide: React.FC<CareGuideProps> = ({ onOpenEnquiry }) => {
  const [activeTopicId, setActiveTopicId] = useState(CARE_GUIDE_TOPICS[0].id);

  // Interactive Checklist State for First-Time Owners
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    room: true,
    bowls: true,
    litter: false,
    scratching: false,
    carrier: false,
    brush: false,
    toys: false,
    vet: false,
  });

  const checklistItems = [
    { id: 'room', label: 'Dedicated quiet Safe Room with door for first 48 hours' },
    { id: 'bowls', label: 'Wide shallow ceramic/stainless steel bowls (prevents whisker fatigue)' },
    { id: 'litter', label: 'Low-entry litter tray with natural unscented pellets' },
    { id: 'scratching', label: 'Heavy-base sisal scratching post (at least 70cm tall)' },
    { id: 'carrier', label: 'Secure hard-shell pet carrier with fleece blanket' },
    { id: 'brush', label: 'Breed-appropriate brush (slicker for British Shorthair, comb for Ragdoll)' },
    { id: 'toys', label: 'Interactive wand toys & safe felt/plush mice' },
    { id: 'vet', label: 'Local Adelaide vet chosen & initial welcome appointment scheduled' },
  ];

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const activeTopic = CARE_GUIDE_TOPICS.find((t) => t.id === activeTopicId) || CARE_GUIDE_TOPICS[0];

  return (
    <section id="care-guide" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
            <span>New Pet Parent Handbook</span>
            <span className="mx-2 text-[#C8B8A6]">·</span>
            <span>First-Time Cat Care Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
            Essential Kitten Care for First-Time Owners
          </h2>
          <p className="text-base sm:text-lg text-[#5A4B41] leading-relaxed">
            Welcoming a kitten into your home is a joy. We have distilled our veterinary expertise and 12+ years of breeding experience into this practical guide tailored for Adelaide households.
          </p>
        </div>

        {/* Two-Column Interactive Guide: Topics Nav on left, Detailed Content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Topics Navigation Strip */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold text-[#7A5B45] uppercase tracking-wider mb-3">
              Care Topics & Advice
            </h3>
            {CARE_GUIDE_TOPICS.map((topic) => {
              const isActive = topic.id === activeTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-[#F0E6DC] border-[#D8C7B8] text-[#382A22] shadow-xs'
                      : 'bg-white border-[#E8DFD8] text-[#5A4B41] hover:bg-[#F9F4EE]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wide text-[#8C6D58]">
                      {topic.category}
                    </div>
                    <div className="text-sm font-semibold">{topic.title}</div>
                  </div>
                  <span className={`text-lg font-mono ${isActive ? 'text-[#5A4232]' : 'text-[#C2B2A3]'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Topic Content Panel */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFD8] shadow-xs space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8C6D58]">
                Chapter: {activeTopic.category}
              </div>
              <h3 className="text-2xl font-bold text-[#382A22] font-display">
                {activeTopic.title}
              </h3>
              <p className="text-sm text-[#5A4B41] leading-relaxed">
                {activeTopic.summary}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#382A22] uppercase tracking-wider">
                Best Practice Recommendations
              </h4>
              <ul className="space-y-3">
                {activeTopic.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5A4B41] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#F0E6DC] text-[#5A4232] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beginner Pro-Tip Box */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADDCF] space-y-1 text-xs sm:text-sm text-[#5A4B41]">
              <div className="font-bold text-[#382A22] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#8C6D58]" />
                <span>Breeder Insider Advice for First-Timers</span>
              </div>
              <p className="leading-relaxed">{activeTopic.tipsForBeginners}</p>
            </div>
          </div>
        </div>

        {/* Interactive First-Time Home Checklist Widget */}
        <div className="bg-[#F5EFEB] rounded-2xl border border-[#E8DFD8] p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8C6D58]">
                Interactive Tool
              </div>
              <h3 className="text-2xl font-bold text-[#382A22] font-display">
                Adelaide Kitten Homecoming Checklist
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4B41]">
                Tick off supplies as you prepare your home before collecting your kitten.
              </p>
            </div>
            
            <div className="bg-white px-4 py-2.5 rounded-xl border border-[#D8C7B8] flex items-center gap-3 shrink-0">
              <div className="text-right">
                <div className="text-xs text-[#7A6455] font-medium">Readiness Score</div>
                <div className="text-base font-bold text-[#382A22] tabular-nums">
                  {completedCount} of {checklistItems.length} Complete
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EADDCF] flex items-center justify-center text-[#5A4232] font-bold text-xs">
                {Math.round((completedCount / checklistItems.length) * 100)}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {checklistItems.map((item) => {
              const isChecked = checklist[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    isChecked
                      ? 'bg-white border-[#C8B8A6] text-[#382A22] shadow-xs'
                      : 'bg-[#FAF7F2] border-[#E8DFD8] text-[#7A6455] hover:bg-white'
                  }`}
                >
                  <div className="shrink-0 text-[#8C6D58]">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-700 fill-emerald-100" />
                    ) : (
                      <Square className="w-5 h-5 text-[#BFA896]" />
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm ${isChecked ? 'font-medium' : 'line-through text-[#9A8475]'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2D5C9]">
            <p className="text-xs text-[#7A6455]">
              Every Adelaide Premium Cattery kitten leaves with a comprehensive transition starter kit including sample foods, comforting scent blanket, and your printed health record.
            </p>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 bg-[#5A4232] hover:bg-[#433124] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Ask Our Care Team a Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
