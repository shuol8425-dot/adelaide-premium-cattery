import React from 'react';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { BLOG_POST } from '../data/catteryData.ts';

interface BlogSectionProps {
  onExploreKittens: () => void;
  onOpenCareGuide: () => void;
  onOpenEnquiry: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onExploreKittens,
  onOpenCareGuide,
  onOpenEnquiry,
}) => {
  const scrollToHeading = (index: number) => {
    const el = document.getElementById(`blog-section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
            <span>Cattery Journal</span>
            <span className="text-[#C8B8A6]" aria-hidden="true">·</span>
            <span>Adelaide Kitten Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
            Adelaide Kitten Care & Breed Journal
          </h2>
          <p className="text-base text-[#5A4B41] leading-relaxed">
            Practical, down-to-earth advice written for prospective cat parents and families across South Australia.
          </p>
        </div>

        {/* Editorial Article Container */}
        <article className="bg-white rounded-2xl border border-[#E8DFD8] shadow-xs overflow-hidden">
          {/* Article Lead Header & Dual Breed Photography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#E8DFD8]">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Clean Unboxed Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#7A6455] font-medium">
                  <span className="text-[#8C6D58] font-semibold">{BLOG_POST.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8C6D58]" />
                    {BLOG_POST.publishedDate}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#8C6D58]" />
                    {BLOG_POST.readTime}
                  </span>
                </div>

                {/* SEO Article Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#382A22] tracking-tight leading-[1.2] font-display text-balance">
                  {BLOG_POST.title}
                </h3>

                {/* Standfirst / SEO Summary */}
                <p className="text-sm sm:text-base text-[#5A4B41] leading-relaxed">
                  {BLOG_POST.metaDescription}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#7A6455]">
                <BookOpen className="w-4 h-4 text-[#8C6D58]" />
                <span>Written by <strong className="text-[#382A22] font-semibold">{BLOG_POST.author}</strong></span>
              </div>
            </div>

            {/* Dual Side-by-Side Kitten Showcase */}
            <div className="lg:col-span-5 grid grid-cols-2 bg-[#F5EFEB] border-t lg:border-t-0 lg:border-l border-[#E8DFD8]">
              <div className="relative overflow-hidden min-h-[240px] lg:min-h-full border-r border-[#E8DFD8]">
                <img
                  src={BLOG_POST.heroImage}
                  alt="Ragdoll kitten in Adelaide with soft blue eyes and silky coat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-white">
                  <span className="text-xs font-semibold block">Ragdoll</span>
                  <span className="text-[11px] text-white/85">Affectionate & silky coat</span>
                </div>
              </div>
              <div className="relative overflow-hidden min-h-[240px] lg:min-h-full">
                <img
                  src={BLOG_POST.secondaryImage}
                  alt="British Shorthair golden shaded kitten with plush velvet coat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-white">
                  <span className="text-xs font-semibold block">British Shorthair</span>
                  <span className="text-[11px] text-white/85">Calm & plush velvet coat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Body + Quick Navigation Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Sidebar: Table of Contents & Breed Snapshot */}
            <aside className="lg:col-span-4 p-6 sm:p-8 bg-[#FAF7F2] border-b lg:border-b-0 lg:border-r border-[#E8DFD8] space-y-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                  In This Article
                </h4>
                <nav aria-label="Blog article sections" className="space-y-2">
                  {BLOG_POST.sections.map((sec, idx) => (
                    <button
                      key={sec.heading}
                      onClick={() => scrollToHeading(idx)}
                      className="w-full text-left text-xs sm:text-sm text-[#5A4B41] hover:text-[#382A22] hover:underline py-1 transition-colors cursor-pointer flex items-start gap-2"
                    >
                      <span className="text-[#8C6D58] font-semibold tabular-nums">0{idx + 1}.</span>
                      <span>{sec.heading}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* At-a-Glance Breed Comparison */}
              <div className="p-5 rounded-xl bg-white border border-[#E8DFD8] space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                  Quick Breed Comparison
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="pb-3 border-b border-[#F0E6DC] space-y-1">
                    <div className="font-bold text-[#382A22]">Ragdoll Kittens</div>
                    <p className="text-[#5A4B41]">Lap-loving, sociable, follows family members; comb 2–3 times weekly.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-[#382A22]">British Shorthair Kittens</div>
                    <p className="text-[#5A4B41]">Placid, quietly loyal, suits full-time workers; brush once weekly.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F5EFEB] border border-[#E2D5C9] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                  Preparing Your Home?
                </h4>
                <p className="text-xs text-[#5A4B41] leading-relaxed">
                  Use our interactive Homecoming Checklist to tick off essential bowls, litter trays, and safe room items before pickup day.
                </p>
                <button
                  onClick={onOpenCareGuide}
                  className="text-xs font-semibold text-[#5A4232] hover:text-[#382A22] inline-flex items-center gap-1 cursor-pointer underline underline-offset-4"
                >
                  <span>Open Homecoming Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </aside>

            {/* Right Main Prose Column */}
            <div className="lg:col-span-8 p-6 sm:p-10 space-y-8">
              {/* Short Introduction */}
              <p className="text-base sm:text-lg text-[#3D322A] leading-relaxed font-medium">
                {BLOG_POST.intro}
              </p>

              {/* Main Headings & Subheadings */}
              {BLOG_POST.sections.map((section, idx) => (
                <div
                  key={section.heading}
                  id={`blog-section-${idx}`}
                  className="space-y-3.5 pt-4 border-t border-[#F0E6DC] scroll-mt-28"
                >
                  <h4 className="text-xl sm:text-2xl font-bold text-[#382A22] font-display">
                    {section.heading}
                  </h4>

                  <p className="text-sm sm:text-base text-[#5A4B41] leading-relaxed">
                    {section.paragraphs[0]}
                  </p>

                  {section.bullets && (
                    <ul className="space-y-2.5 py-1">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet.label}
                          className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-sm text-[#5A4B41] leading-relaxed"
                        >
                          <strong className="text-[#382A22] font-semibold">{bullet.label}:</strong>{' '}
                          {bullet.text}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.paragraphs.slice(1).map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-[#5A4B41] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Final Call to Action */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EFEB] border border-[#E2D5C9] space-y-5 mt-4">
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#382A22] font-display">
                    {BLOG_POST.ctaHeading}
                  </h4>
                  <p className="text-sm sm:text-base text-[#5A4B41] leading-relaxed">
                    {BLOG_POST.ctaCopy}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <button
                    onClick={onExploreKittens}
                    className="px-6 py-3 bg-[#5A4232] hover:bg-[#433124] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>Explore Our Kitten Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenEnquiry}
                    className="px-6 py-3 bg-white hover:bg-[#FAF7F2] text-[#5A4232] border border-[#D8C7B8] text-sm font-semibold rounded-lg transition-colors text-center cursor-pointer whitespace-nowrap"
                  >
                    Contact Adelaide Premium Cattery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
