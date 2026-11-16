import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Send, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialKittenName?: string;
  onClearInitialKitten?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialKittenName,
  onClearInitialKitten,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'waitlist',
    preferredBreed: 'Ragdoll',
    selectedKitten: initialKittenName || '',
    housingType: 'House with secure indoor environment',
    hasOtherPets: 'No other pets',
    timeframe: 'Next 1-3 months',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (initialKittenName) {
      setFormData((prev) => ({
        ...prev,
        selectedKitten: initialKittenName,
        enquiryType: 'waitlist',
      }));
    }
  }, [initialKittenName]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or question.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability submission
    setTimeout(() => {
      const code = `APC-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: 'waitlist',
      preferredBreed: 'Ragdoll',
      selectedKitten: '',
      housingType: 'House with secure indoor environment',
      hasOtherPets: 'No other pets',
      timeframe: 'Next 1-3 months',
      message: '',
    });
    if (onClearInitialKitten) onClearInitialKitten();
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7A5B45] uppercase">
            <span>Get in Touch</span>
            <span className="mx-2 text-[#C8B8A6]">·</span>
            <span>Adelaide, South Australia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#382A22] tracking-tight font-display text-balance">
            Enquire About Our Adelaide Kittens
          </h2>
          <p className="text-base sm:text-lg text-[#5A4B41] leading-relaxed">
            Whether you want to join our upcoming litter waitlist, ask about feline genetics, or book a video call consultation, we welcome your enquiry.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Cattery Contact & Visit Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EFEB] border border-[#E8DFD8] space-y-6">
              <h3 className="text-xl font-bold text-[#382A22] font-display">
                Adelaide Premium Cattery Office
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4B41] leading-relaxed">
                We are based in the scenic Adelaide foothills of South Australia. To protect newborn kitten biosecurity, private visits are arranged by advance appointment following initial consultation.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#48392F]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#382A22] block">Location</span>
                    <span>Adelaide Hills & Foothills Region, South Australia 5000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#382A22] block">Adoption Enquiries</span>
                    <span>(08) 8200 4890 / +61 8 8200 4890</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#382A22] block">Direct Email</span>
                    <span>hello@adelaidepremiumcattery.com.au</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#382A22] block">Consultation Hours</span>
                    <span>Monday – Saturday: 9:00 AM – 5:00 PM ACST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#382A22] block">South Australian Accreditation</span>
                    <span>DACO Registered Breeder #DACO198422</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2D5C9] space-y-1 text-xs text-[#5A4B41]">
                <span className="font-bold text-[#382A22] block">What Happens After You Enquire?</span>
                <p>
                  1. Our breeder team reviews your household preferences within 24 hours.<br />
                  2. We schedule a brief phone or Zoom call to answer all your questions.<br />
                  3. You receive photo/video updates as upcoming litters reach developmental milestones.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Form / Confirmation View */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DFD8] shadow-sm text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B45]">
                    Enquiry Received Successfully
                  </div>
                  <h3 className="text-2xl font-bold text-[#382A22] font-display">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5A4B41] max-w-md mx-auto leading-relaxed">
                    We have received your kitten enquiry for{' '}
                    <strong className="text-[#382A22]">{formData.preferredBreed}</strong>
                    {formData.selectedKitten && ` (${formData.selectedKitten})`}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] max-w-sm mx-auto text-left text-xs space-y-1.5 text-[#5A4B41]">
                  <div><strong className="text-[#382A22]">Enquiry Reference:</strong> <span className="font-mono font-bold text-[#5A4232]">{referenceCode}</span></div>
                  <div><strong className="text-[#382A22]">Contact Email:</strong> {formData.email}</div>
                  <div><strong className="text-[#382A22]">Preferred Timeframe:</strong> {formData.timeframe}</div>
                  <div><strong className="text-[#382A22]">Status:</strong> Under Review by Adelaide Breeding Team</div>
                </div>

                <p className="text-xs text-[#7A6455] max-w-md mx-auto">
                  A confirmation summary has been logged. Our Adelaide adoption coordinator will respond to your phone or email within 24 to 48 business hours.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#5A4232] hover:bg-[#433124] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFD8] shadow-xs space-y-5"
                noValidate
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#F0E6DC]">
                  <h3 className="text-lg font-bold text-[#382A22] font-display">
                    Kitten Adoption & General Enquiry Form
                  </h3>
                  <span className="text-xs text-[#8C6D58] font-medium">* Required fields</span>
                </div>

                {/* Pre-selected Kitten Banner if applicable */}
                {formData.selectedKitten && (
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#D8C7B8] flex items-center justify-between text-xs text-[#5A4B41]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#8C6D58] shrink-0" />
                      <span>Enquiring regarding: <strong className="text-[#382A22]">{formData.selectedKitten}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, selectedKitten: '' }))}
                      className="text-xs text-[#8C6D58] hover:underline font-medium cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#382A22] placeholder:text-[#9A8475] focus:outline-none focus:ring-2 focus:ring-[#8C6D58] transition-all ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#D8C7B8] bg-[#FAF7F2]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com.au"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#382A22] placeholder:text-[#9A8475] focus:outline-none focus:ring-2 focus:ring-[#8C6D58] transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#D8C7B8] bg-[#FAF7F2]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Enquiry Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0412 345 678"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#382A22] placeholder:text-[#9A8475] focus:outline-none focus:ring-2 focus:ring-[#8C6D58] transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#D8C7B8] bg-[#FAF7F2]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Enquiry Purpose
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7B8] bg-[#FAF7F2] text-sm text-[#382A22] focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    >
                      <option value="waitlist">Reserve on Upcoming Litter Waitlist</option>
                      <option value="general">General Question</option>
                      <option value="video-consult">Request a Video Consultation</option>
                      <option value="health">Ask About Health & Genetic Clearances</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Breed & Living Situation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Preferred Cat Breed
                    </label>
                    <select
                      value={formData.preferredBreed}
                      onChange={(e) => setFormData({ ...formData, preferredBreed: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7B8] bg-[#FAF7F2] text-sm text-[#382A22] focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    >
                      <option value="Ragdoll">Ragdoll (Blue Point, Seal, Bicolour)</option>
                      <option value="British Shorthair">British Shorthair (Golden Shaded, Lilac)</option>
                      <option value="Either Breed">Either Breed / Best Temperament Match</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Adoption Timeline
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7B8] bg-[#FAF7F2] text-sm text-[#382A22] focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    >
                      <option value="Immediately (Next Ready Litter)">Immediately (Next Ready Litter)</option>
                      <option value="Next 1-3 months">Next 1–3 months</option>
                      <option value="Next 3-6 months">Next 3–6 months</option>
                      <option value="Just researching for future">Just researching for future</option>
                    </select>
                  </div>
                </div>

                {/* Household context */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Home Environment
                    </label>
                    <select
                      value={formData.housingType}
                      onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7B8] bg-[#FAF7F2] text-sm text-[#382A22] focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    >
                      <option value="House with secure indoor environment">House (Indoor Only / Catio)</option>
                      <option value="Apartment / Townhouse">Apartment or Townhouse</option>
                      <option value="Acreage / Suburban Estate">Acreage or Suburban Estate</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#382A22] block">
                      Other Pets in Household
                    </label>
                    <select
                      value={formData.hasOtherPets}
                      onChange={(e) => setFormData({ ...formData, hasOtherPets: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8C7B8] bg-[#FAF7F2] text-sm text-[#382A22] focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
                    >
                      <option value="No other pets">No other pets</option>
                      <option value="Have another friendly cat">Have another friendly cat</option>
                      <option value="Have a dog (cat-tested)">Have a dog (cat-tested)</option>
                      <option value="Have children in home">Have young children in home</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#382A22] block">
                    Your Message or Special Preferences *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your household routine, whether you prefer a cuddly lap cat or a playful explorer, or any questions about Adelaide pickup..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#382A22] placeholder:text-[#9A8475] focus:outline-none focus:ring-2 focus:ring-[#8C6D58] transition-all resize-y ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-[#D8C7B8] bg-[#FAF7F2]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#5A4232] hover:bg-[#433124] disabled:bg-[#8A7669] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Enquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Kitten Adoption Enquiry
                      </span>
                    )}
                  </button>
                  <p className="text-[11px] text-[#7A6455] text-center mt-2.5">
                    We respect your privacy. Your contact details are stored securely and used solely for Adelaide Premium Cattery communications.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
