import GreenCartBanner from "./banner";
import BeliefSection from "./belief";
import FeaturesSection from "./features";
import Footer from "./footer";
import HeroSection from "./hero";
import Navbar from "./navbar";
import { AnimatedTestimonials } from "./testimonials";

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BeliefSection />
      <AnimatedTestimonials />
      <GreenCartBanner />
      <Footer />
    </>
  );
}
