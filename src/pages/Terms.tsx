// src/pages/Terms.tsx
export default function Terms() {
    return (
      <section className="relative py-20 bg-[#020617]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />
  
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-6">
            Terms &amp; Conditions
          </h1>
  
          <p className="text-sm md:text-base text-slate-300 mb-8 text-center">
            By accessing and using this website, you agree to comply with the terms and conditions below.
            Please read them carefully.
          </p>
  
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#050816] border border-slate-700/70 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
              <p className="font-semibold text-amber-300">1. User Agreement</p>
              <p className="mt-1 text-sm text-slate-300">
                By using this website, you confirm that you are legally permitted to use our services and will use them
                responsibly.
              </p>
            </div>
  
            <div className="rounded-2xl bg-[#050816] border border-slate-700/70 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
              <p className="font-semibold text-amber-300">2. Intellectual Property</p>
              <p className="mt-1 text-sm text-slate-300">
                All content, branding and assets on this site belong to Spanbucks. Any unauthorised use or reproduction
                is not allowed.
              </p>
            </div>
  
            <div className="rounded-2xl bg-[#050816] border border-slate-700/70 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
              <p className="font-semibold text-amber-300">3. Limitation of Liability</p>
              <p className="mt-1 text-sm text-slate-300">
                Spanbucks is not responsible for any indirect or incidental damages arising from the use of this website.
              </p>
            </div>
  
            <div className="rounded-2xl bg-[#050816] border border-slate-700/70 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
              <p className="font-semibold text-amber-300">4. Privacy</p>
              <p className="mt-1 text-sm text-slate-300">
                Personal data is handled with care and is not shared with third parties without valid reason or consent,
                except where required by law.
              </p>
            </div>
  
            <div className="rounded-2xl bg-[#050816] border border-slate-700/70 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
              <p className="font-semibold text-amber-300">5. Governing Law</p>
              <p className="mt-1 text-sm text-slate-300">
                These terms are governed by the laws applicable in your jurisdiction. Any disputes will be resolved in
                accordance with those laws.
              </p>
            </div>
          </div>
  
          <div className="mt-8 rounded-xl bg-amber-500/10 border border-amber-400/60 px-4 py-3 text-xs md:text-sm text-amber-200 text-center">
            Disclaimer: This website is the official online presence of Spanbucks. Always verify communications and
            beware of fraudulent sites or offers.
          </div>
        </div>
      </section>
    );
  }
  