import slide1 from "../../assets/about1.png";
import slide2 from "../../assets/about2.png";

export default function AboutSection() {
  return (
    <>
    <style>{`
  .about-showcase {
    padding: 80px 0;
    overflow: hidden;
  }

  .container {
    max-width: 1280px;
    margin: auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .about-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
    align-items: start;
  }

  .about-visuals {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .about-top-image,
  .about-middle-image {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  .about-exp-card {
    position: absolute;
    top: 35%;
    right: -20px;
    padding: 16px 24px;
    border-radius: 12px;
    z-index: 2;
  }

  .about-exp-card h3 {
    margin: 0;
    font-size: 32px;
  }

  .about-exp-card p {
    margin: 6px 0 0;
    font-size: 14px;
  }

  .about-content h2 {
    font-size: 42px;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  .about-content h3 {
    margin-top: 30px;
    margin-bottom: 12px;
    font-size: 24px;
  }

  .about-content p,
  .about-content li {
    font-size: 16px;
    line-height: 1.8;
  }

  .about-content ul {
    padding-left: 20px;
  }

  /* Tablet */
  @media (max-width: 992px) {
    .about-layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .about-content h2 {
      font-size: 34px;
    }

    .about-exp-card {
      top: 30%;
      right: 10px;
    }
  }

  /* Mobile */
  @media (max-width: 576px) {
    .about-showcase {
      padding: 50px 0;
    }

    .container {
      padding: 0 15px;
    }

    .about-content h2 {
      font-size: 28px;
    }

    .about-content h3 {
      font-size: 20px;
    }

    .about-content p,
    .about-content li {
      font-size: 14px;
      line-height: 1.7;
    }

    .about-exp-card {
      position: relative;
      top: auto;
      right: auto;
      margin-top: -10px;
      width: fit-content;
    }

    .about-exp-card h3 {
      font-size: 26px;
    }
  }
`}</style>

      <section className="about-showcase" id="about">
        <div className="container">
          <div className="about-layout">
            <aside
              className="about-visuals"
              aria-label="About Tvesha Group visuals"
            >
              <img
                className="about-top-image"
                src={slide1}
                alt="Tvesha Group team collaborating with professionals"
              />

              <div className="about-exp-card" aria-label="Experience card">
                <h3>
                  2<span>+</span>
                </h3>
                <p>Years Experience</p>
              </div>

              <img
                className="about-middle-image"
                src={slide2}
                alt="Human resource and talent acquisition concept"
              />

              <div className="about-accent-line" />
            </aside>

            <article className="about-content">
              <p className="about-kicker">ABOUT US</p>
              <h2>HR Staffing & Recruitment Consultancy</h2>

              <p>
                <strong>Tvesha Group</strong> is an HR consulting firm focused
                on helping businesses build strong teams and efficient HR
                systems.
              </p>

              <ul className="about-domain-list">
                <li>Permanent Recruitment</li>
                <li>Temporary & Contract Staffing</li>
                <li>Payroll Management & Compliance</li>
                <li>Employee Training & Development</li>
                <li>Recruitment Process Outsourcing (RPO)</li>
              </ul>

              <h3>Why Choose Tvesha Group?</h3>
              <p>
                Our experienced team combines deep domain knowledge with a
                client-first approach to deliver personalized, high-impact
                recruitment solutions.
              </p>

              <h3>Our Vision</h3>
              <p>
                To be the preferred HR staffing and recruitment partner.
              </p>

              <h3>Our Core Values</h3>
              <ul>
                <li><strong>Integrity</strong> — Doing the right thing.</li>
                <li><strong>Excellence</strong> — Quality in every interaction.</li>
                <li><strong>Innovation</strong> — Adapting to market needs.</li>
                <li><strong>Collaboration</strong> — Power of teamwork.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}