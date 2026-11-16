  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !validate()) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setReferenceCode(`DEMO-APC-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
      const analytics = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof analytics === 'function') {
        analytics('event', 'demo_enquiry_submit', {
          enquiry_type: formData.enquiryType,
          is_demo: true,
        });
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData(emptyForm());
    setErrors({});
    setReferenceCode('');
    setIsSubmitted(false);
    onClearInitialKitten?.();
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border bg-[#FAF7F2] px-3.5 py-2.5 text-sm text-[#382A22] focus:outline-none focus:ring-2 focus:ring-[#8C6D58] ${errors[field] ? 'border-red-500' : 'border-[#D8C7B8]'}`;

  const selectField = (title: string, field: keyof FormData, values: [string, string][]) => (
    <label className="block space-y-1 text-xs font-semibold text-[#382A22]">
      <span>{title}</span>
      <select className={inputClass(field)} value={formData[field]} onChange={e => update(field, e.target.value)}>
        {values.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
    </label>
  );

  return (
    <section id="contact" className="bg-[#FAF7F2] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7A5B45]">Get in Touch · Adelaide, South Australia</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#382A22] sm:text-4xl">Enquire About Our Adelaide Kittens</h2>
          <p className="text-base leading-relaxed text-[#5A4B41] sm:text-lg">Explore a sample adoption enquiry experience created for a university digital marketing project.</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-5 lg:col-span-5">
            <div className="space-y-5 rounded-2xl border border-[#E8DFD8] bg-[#F5EFEB] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#382A22]">Adelaide Premium Cattery</h3>
              <p className="text-sm leading-relaxed text-[#5A4B41]">This is a fictional cattery created for an academic project. All contact details and breeder claims are illustrative.</p>
              <div className="flex items-start gap-3 text-sm text-[#48392F]"><MapPin className="h-5 w-5 shrink-0 text-[#8C6D58]"/><span>Adelaide, South Australia (simulated location)</span></div>
              <div className="flex items-start gap-3 text-sm text-[#48392F]"><Mail className="h-5 w-5 shrink-0 text-[#8C6D58]"/><span>No monitored customer-service email (class demonstration)</span></div>
              <div className="flex items-start gap-3 text-sm text-[#48392F]"><Clock className="h-5 w-5 shrink-0 text-[#8C6D58]"/><span>Online demo only — no live appointments</span></div>
              <div className="flex items-start gap-3 text-sm text-[#48392F]"><ShieldCheck className="h-5 w-5 shrink-0 text-[#8C6D58]"/><span>Certifications, guarantees and products are fictional</span></div>
              <div className="rounded-xl border border-[#E2D5C9] bg-white p-4 text-xs leading-relaxed text-[#5A4B41]">
                <strong className="block text-[#382A22]">Academic Project Disclaimer</strong>
                Submitting the form demonstrates an interface only. No actual enquiry is sent, stored or answered. Please use fictitious information.
              </div>
            </div>
          </aside>
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="space-y-5 rounded-2xl border border-[#E8DFD8] bg-white p-8 text-center shadow-sm sm:p-10" role="status">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-700" />
                <h3 className="font-display text-2xl font-bold text-[#382A22]">Demo Submission Successful</h3>
                <p className="text-sm leading-relaxed text-[#5A4B41]">Thanks, {formData.name}. Your sample enquiry form has been validated. No details were sent to a cattery.</p>
                <div className="rounded-xl bg-[#FAF7F2] p-4 text-sm text-[#5A4B41]">Demo reference: <strong>{referenceCode}</strong></div>
                <button type="button" onClick={handleReset} className="rounded-lg bg-[#5A4232] px-6 py-3 font-semibold text-white hover:bg-[#433124]">Try Another Demo Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-[#E8DFD8] bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0E6DC] pb-3">
                  <h3 className="font-display text-lg font-bold text-[#382A22]">Kitten Adoption & General Enquiry Form</h3>
                  <span className="text-xs text-[#8C6D58]">* Required fields</span>
                </div>
                <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-900">University simulation: do not enter real personal information. Form responses are not sent or stored.</p>
                {formData.selectedKitten && (
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-[#FAF7F2] p-3 text-xs text-[#5A4B41]">
                    <span className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> Enquiring about: <strong>{formData.selectedKitten}</strong></span>
                    <button type="button" onClick={() => update('selectedKitten', '')} className="underline">Clear</button>
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  {([['name','Full Name *','text','Test Student'],['email','Email Address *','email','test@example.com'],['phone','Phone Number *','tel','0400 000 000']] as const).map(([key,label,type,placeholder]) => (
                    <label key={key} className="block space-y-1 text-xs font-semibold text-[#382A22]">
                      <span>{label}</span>
                      <input type={type} value={formData[key]} onChange={e => update(key,e.target.value)} placeholder={placeholder} className={inputClass(key)} aria-invalid={!!errors[key]}/>
                      {errors[key] && <span className="block text-[11px] text-red-600">{errors[key]}</span>}
                    </label>
                  ))}
                  {selectField('Enquiry Purpose','enquiryType',[
                    ['waitlist','Upcoming Litter Waitlist'],['general','General Question'],['video-consult','Video Consultation'],['health','Health & Genetic Clearances']
                  ])}
                  {selectField('Preferred Cat Breed','preferredBreed',[
                    ['Ragdoll','Ragdoll'],['British Shorthair','British Shorthair'],['Either Breed','Either Breed']
                  ])}
                  {selectField('Adoption Timeline','timeframe',[
                    ['Immediately (Next Ready Litter)','Immediately'],['Next 1-3 months','Next 1–3 months'],['Next 3-6 months','Next 3–6 months'],['Just researching for future','Just researching']
                  ])}
                  {selectField('Home Environment','housingType',[
                    ['House with secure indoor environment','House / Indoor'],['Apartment / Townhouse','Apartment / Townhouse'],['Acreage / Suburban Estate','Acreage / Suburban Estate']
                  ])}
                  {selectField('Other Pets in Household','hasOtherPets',[
                    ['No other pets','No other pets'],['Have another friendly cat','Another cat'],['Have a dog (cat-tested)','Dog'],['Have children in home','Children in home']
                  ])}
                </div>
                <label className="block space-y-1 text-xs font-semibold text-[#382A22]">
                  <span>Your Message or Special Preferences *</span>
                  <textarea rows={4} value={formData.message} onChange={e=>update('message',e.target.value)} className={inputClass('message')} placeholder="This is a test enquiry for my university assignment." aria-invalid={!!errors.message}/>
                  {errors.message && <span className="block text-[11px] text-red-600">{errors.message}</span>}
                </label>
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A4232] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#433124] disabled:opacity-60 sm:text-base">
                  {isSubmitting ? 'Submitting Demo...' : <><Send className="h-4 w-4"/> Submit Demo Enquiry</>}
                </button>
                <p className="text-center text-[11px] text-[#7A6455]">This is a simulation. GA4 may record the demo event, but personal fields are not sent to Google Analytics.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
