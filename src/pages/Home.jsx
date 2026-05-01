// import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import PlanningSection from "../components/sections/PlanningSection";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsContactSection from "../components/sections/TestimonialsContactSection";

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PlanningSection />
      <TestimonialsContactSection />
      <Footer />
    </>
  );
}
