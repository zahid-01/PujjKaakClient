import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GreenCartBanner from "./banner";
import BeliefSection from "./belief";
import FeaturesSection from "./features";
import Footer from "./footer";
import HeroSection from "./hero";
import Navbar from "./navbar";
import BoxBuilder from "./box-builder";
import WazwanGuide from "./wazwan-guide";
import ColdChainSimulator from "./cold-chain-simulator";
import { AnimatedTestimonials } from "./testimonials";

export default function Landing() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly to ensure component rendering has finished
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BoxBuilder />
      <WazwanGuide />
      <ColdChainSimulator />
      <BeliefSection />
      <AnimatedTestimonials />
      <GreenCartBanner />
      <Footer />
    </>
  );
}
