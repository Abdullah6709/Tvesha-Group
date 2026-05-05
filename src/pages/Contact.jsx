import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const varanasiMap =
  "https://maps.google.com/maps?q=25.332271,82.972288&z=15&output=embed";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>Contact With Us</h1>

          <p className="about-page-watermark" aria-hidden="true">
            Contact
          </p>

          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="contact-with-us section">
        <div className="container">
          <div className="contact-office-card">
            <div className="contact-office-left">
              <p className="contact-office-kicker">CONTACT US WITH EASE</p>

              <h2>Get in Touch</h2>

              <p>
                Have questions about our HR staffing and recruitment services? 
                We're here to help you build exceptional teams. Whether you're 
                looking for permanent recruitment, temporary staffing, payroll 
                management, or customized HR solutions, our team is ready to 
                assist you with expert guidance and support.
              </p>
            </div>

            <div className="contact-office-right">
              <div className="office-header active">
                <span>
                  <span className="office-help-icon" aria-hidden="true">
                    ?
                  </span>
                  Varanasi Office
                </span>
                <strong>−</strong>
              </div>

              <div className="office-body">
                <div>
                  <p>
                    SA 6/186 Aktha pahariya Sarnath,
                    <br />
                    Varanasi, Uttar Pradesh 221007
                    <br />
                    India
                    <br />
                    <strong>Email us:</strong> enquiry@tveshagroup.com
                    <br />
                    <strong>Call us:</strong> +91-120-4111866
                  </p>
                </div>

                <iframe
                  title="Varanasi office map"
                  src={varanasiMap}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: "100%", height: "300px", border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}