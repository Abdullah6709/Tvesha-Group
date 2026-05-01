import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const bhubaneswarMap =
  "https://maps.google.com/maps?q=20.238881,85.833450&z=14&output=embed";

const noidaMap =
  "https://maps.google.com/maps?q=28.632243,77.381172&z=14&output=embed";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                enim ad minim veniam.
              </p>
            </div>

            <div className="contact-office-right">
              <div className="office-header active">
                <span>
                  <span className="office-help-icon" aria-hidden="true">
                    ?
                  </span>
                  Noida Office
                </span>
                <strong>−</strong>
              </div>

              <div className="office-body">
                <div>
                  <p>
                    G Block G-75, 4th Floor, Sector 63,
                    <br />
                    Noida, Uttar Pradesh 201301
                    <br />
                    India
                    <br />
                    <strong>Email us:</strong> enquiry@tveshagroup.com
                    <br />
                    <strong>Call us:</strong> +91-120-4111866
                  </p>
                </div>

                <iframe
                  title="Noida office map"
                  src={noidaMap}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="office-header">
                <span>
                  <span className="office-help-icon" aria-hidden="true">
                    ?
                  </span>
                  Bhubaneswar Office
                </span>
                <strong>+</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-locations section">
        <div className="container contact-form-layout">
          <div className="contact-form-card">
            <p>NEED HELP?</p>

            <h2>Contact Us</h2>

            <form className="contact-us-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your e-mail" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Massage" />
              <button type="button">Submit Message »</button>
            </form>
          </div>

          <div className="contact-map-stack">
            <article>
              <h3>Bhubaneswar Location</h3>

              <iframe
                title="Bhubaneswar location map"
                src={bhubaneswarMap}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>

            <article>
              <h3>Noida Location</h3>

              <iframe
                title="Noida location map"
                src={noidaMap}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
