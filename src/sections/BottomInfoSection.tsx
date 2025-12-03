// src/sections/BottomInfoSection.tsx
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaFacebookF
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function BottomInfoSection() {
  return (
    <section className="bg-[#020617] border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 text-slate-200 text-sm">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-3">
            About Spanbucks
          </h3>
          <p className="text-slate-300 leading-relaxed">
            At Spanbucks, we are transforming the real estate industry with
            innovative solutions and an unwavering commitment to excellence.
            Partner with us to unlock limitless opportunities and secure
            a prosperous future.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-amber-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-amber-300 transition">
                Our Projects
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-amber-300 transition">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-300 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-3">
            Contact Us
          </h3>
          <p className="text-slate-300">
            <span className="font-semibold">Address:</span>{" "}
            12-6-2/269/4, 2nd Floor, Classic Homes,
            Kukatpally, Hyderabad - 500072
          </p>
          <p className="mt-2 text-slate-300">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:spanbucks@gmail.com"
              className="hover:text-amber-300 transition"
            >
              spanbucks@gmail.com
            </a>
          </p>
          <p className="mt-1 text-slate-300">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+919704503377"
              className="hover:text-amber-300 transition"
            >
              +91 9704503377
            </a>
          </p>
        </div>
      </div>

      {/* Social icons */}
      <div className="mt-8 flex justify-center gap-5 text-xl text-slate-300">
        <a
          href="https://www.instagram.com/spanbucks/#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575100950518"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 transition"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/company/spanbucks-developers-and-builders-private-limited/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.youtube.com/@spanbucks"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 transition"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://wa.me/919704503377"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://x.com/SpanBucks/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-300 transition"
          aria-label="X"
        >
          <FaXTwitter />
        </a>
      </div>

      <div className="mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SPANBUCKS. All rights reserved.
      </div>
    </section>
  );
}