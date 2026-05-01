import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesSection from "../components/sections/ServicesSection";

export default function Industry() {
  return (
    <>
      <Navbar />

      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>Industry Practice</h1>
          <p className="about-page-watermark" aria-hidden="true">
            Industry
          </p>
          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Industry Practice</span>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </>
  );
}
