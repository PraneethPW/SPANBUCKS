// src/components/Navbar.tsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logomain.webp"; // adjust path if needed

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-6 py-3 mt-4 rounded-2xl bg-black/50 backdrop-blur-xl border border-slate-800/70 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between">
          {/* Brand with logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-amber-400/80 shadow-[0_0_12px_rgba(250,204,21,0.6)]">
              <img
                src={logo}
                alt="Spanbucks logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl md:text-2xl font-extrabold tracking-wide text-slate-50">
              SPANBUCKS
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-200 text-2xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative pb-1 transition ${
                      isActive ? "text-amber-300" : "hover:text-amber-200"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      <span
                        className={`
                          pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px]
                          bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0
                          transition-opacity duration-300
                          group-hover:opacity-100
                          ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="mt-4 md:hidden space-y-2 text-slate-200 text-base">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded-lg hover:bg-white/5 hover:text-amber-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
