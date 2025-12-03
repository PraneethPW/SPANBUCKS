// ContactSection.tsx
export default function ContactSection() {
  return (
    <section className="relative py-20">
      {/* same radial glow feel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,118,110,0.25),_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-3">
          Contact Us
        </h2>
        <p className="text-center text-slate-300 mb-10">
          Have questions? Want to collaborate? Feel free to reach out.
        </p>

        {/* form + map side by side on desktop */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Form */}
          <div className="relative group">
            {/* glow border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-300/20 to-amber-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300" />
            <form className="relative grid gap-6 bg-[#020617] p-8 rounded-2xl border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-black/40 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-black/40 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg bg-black/40 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
              <button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 py-3 rounded-lg text-lg font-semibold transition shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:shadow-[0_0_40px_rgba(250,204,21,1)]">
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-semibold text-amber-300 mb-3">
              Contact Information
            </h3>

            <div className="relative group">
              {/* glowing border on hover */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-300/10 to-amber-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-md transition duration-300" />

              {/* shaky / scale effect wrapper */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-black/40 shadow-[0_18px_40px_rgba(0,0,0,0.85)] group-hover:shadow-[0_22px_50px_rgba(250,204,21,0.4)] transition-transform duration-300 group-hover:scale-[1.01] group-hover:-rotate-0.5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3805.529781605!2d78.411335!3d17.482206!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1764801758061!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
