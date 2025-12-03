// Layout.tsx
import Navbar from "./Navbar";

import BottomInfoSection from "../sections/BottomInfoSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#05060a] text-slate-100">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <BottomInfoSection />
      {/* <Footer /> */}
    </div>
  );
}
