import Hero from "../sections/Hero";
import PortfolioSection from "../sections/PortfolioSection";
import ReviewSection from "../sections/ReviewSection";
import StatsSection from "../sections/StatsSection";
import ContactSection from "../sections/ContactSection";
import FeaturedProjectsSection from "../sections/FeaturedProjectsSection";
import FounderSection from "../sections/FounderSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FounderSection/>
      <PortfolioSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <ReviewSection />
      <ContactSection />
    </>
  );
}
