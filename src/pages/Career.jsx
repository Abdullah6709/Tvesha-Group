import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Career() {
  return (
    <>
      <Navbar />
      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>Career</h1>
          <p className="about-page-watermark" aria-hidden="true">
            Career
          </p>
          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Career</span>
          </div>
        </div>
      </section>
      <section className="career-form-section section">
        <div className="container career-form-wrap">
          <form className="career-apply-form">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Job title / Designation*" />
            <input type="text" placeholder="Job Description*" />
            <input type="text" placeholder="Desired Candidate Profile" />
            <input type="text" placeholder="Key Skills" />
            <input type="text" placeholder="Work Experience (Years)*" />
            <input type="text" placeholder="Annual Salary Range*" />
            <input type="text" placeholder="Job Location*" />
            <input type="text" placeholder="Education" />
            <input type="text" placeholder="Contact Details*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Industry" />
            <input type="text" placeholder="Function" />
            <input type="text" placeholder="Employment Type" />
            <input type="file" />
            <button type="button">Submit It Now</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
