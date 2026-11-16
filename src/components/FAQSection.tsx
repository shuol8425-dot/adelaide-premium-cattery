import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, FAQItem } from '../data/catteryData.ts';

interface FAQSectionProps {
  onOpenEnquiry: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // first two open by default

  const categories = ['All', 'Process', 'Pricing', 'Health', 'Care'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
            <span>Got Questions?</span>
            <span className="mx-2 text-[#C8B8A6]">·</span>
            <span>Adelaide Adoption FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#5A4B41] leading-relaxed">
            Everything you need to know about choosing, pricing, veterinary health guarantees, and caring for your Adelaide kitten.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9A8475]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., pricing, health, Ragdoll, food)..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-[#D8C7B8] text-sm text-[#382A22] placeholder:text-[#9A8475] focus:outline-none focus:ring-2 focus:ring-[#8C6D58] focus:border-transparent transition-all shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5A4232] text-white shadow-xs'
                    : 'bg-[#F0E6DC] text-[#6A584C] hover:bg-[#E5D7CA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#E8DFD8] text-[#7A6455] space-y-2">
              <p className="font-semibold text-[#382A22]">No matching questions found.</p>
              <p className="text-xs">Try different keywords or contact our Adelaide cattery directly below.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E8DFD8] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6D58] shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#382A22]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A6455] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#382A22]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#F5EFEB] text-xs sm:text-sm text-[#5A4B41] leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EFEB] border border-[#E8DFD8] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#EADDCF] flex items-center justify-center text-[#5A4232] mx-auto">
            <MessageSquare className="w-6 h-6 text-[#8C6D58]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#382A22] font-display">
              Have a Specific Question About Our Adelaide Kittens?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4B41] max-w-md mx-auto">
              We love chatting with passionate cat lovers and will gladly discuss upcoming litters, colors, and home readiness.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 bg-[#5A4232] hover:bg-[#433124] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Send Us an Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};
