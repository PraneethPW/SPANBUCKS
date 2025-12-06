// src/components/CookieBanner.tsx
import { useEffect, useState } from "react";

const COOKIE_NAME = "spanbucks-cookie-consent"; // accepted | declined

function getConsentFromCookie() {
  if (typeof document === "undefined") return null;

  const entry = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  return entry ? entry.split("=")[1] : null;
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = getConsentFromCookie();
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const setCookie = (value: "accepted" | "declined") => {
    document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const handleAccept = () => {
    setCookie("accepted");
    setOpen(false);
  };

  const handleDecline = () => {
    setCookie("declined");
    setOpen(false);
  };

  if (!open) return null;

  // OLD DESIGN (bottom, glassmorphism, amber buttons)
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto mb-4 max-w-4xl rounded-2xl border border-slate-700 bg-black/90 px-5 py-4 text-sm text-slate-200 shadow-[0_18px_40px_rgba(0,0,0,0.85)] backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs md:text-sm leading-relaxed">
            Spanbucks uses cookies and local storage to improve your browsing
            experience and to analyze traffic. You can choose to accept or
            decline non-essential cookies at any time.
          </p>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2 rounded-lg border border-slate-500 text-slate-200 text-xs md:text-sm hover:bg-slate-800 transition"
            >
              Decline
            </button>
            <button
              type="button"
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
