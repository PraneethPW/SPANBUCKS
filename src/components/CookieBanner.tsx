// src/components/CookieBanner.tsx
import { useEffect, useState } from "react";

const STORAGE_KEY = "spanbucks-cookie-consent"; // "accepted" | "declined"

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // only run in browser
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setOpen(false);
    // enable analytics / tracking here if you add them later
  };

  const handleDecline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setOpen(false);
    // ensure you don't set non‑essential cookies if declined
  };

// CookieBanner.tsx
if (!open) return null;

return (
  <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none">
    <div className="pointer-events-auto mb-6 md:mb-0 mx-4">
      <div className="max-w-md rounded-2xl border border-slate-700 bg-black/95 px-5 py-4 text-sm text-slate-200 shadow-[0_18px_40px_rgba(0,0,0,0.9)] backdrop-blur">
        <p className="text-xs md:text-sm leading-relaxed mb-4">
          Spanbucks uses cookies to improve your browsing
          experience and to analyze traffic. You can choose to accept or
          decline non-essential cookies at any time.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-lg border border-slate-500 text-slate-200 text-xs md:text-sm hover:bg-slate-800 transition"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-lg bg-amber-400 text-slate-900 text-xs md:text-sm font-semibold hover:bg-amber-500 shadow-[0_0_18px_rgba(250,204,21,0.9)] transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
