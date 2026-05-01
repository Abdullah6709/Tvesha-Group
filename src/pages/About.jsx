import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StatsSection from "../components/sections/StatsSection";
import AboutSection from "../components/sections/AboutSection";
import TestimonialsContactSection from "../components/sections/TestimonialsContactSection";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>About Company</h1>
          <p className="about-page-watermark" aria-hidden="true">
            About Us
          </p>
          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <StatsSection />
      <AboutSection />
      <TestimonialsContactSection />
      <Footer />
    </>
  );
}
