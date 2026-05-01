import slide1 from "../../assets/about1.png";
import slide2 from "../../assets/about2.png";

export default function AboutSection() {
  return (
    <section className="about-showcase section" id="about">
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
                6<span>+</span>
              </h3>
              <p>Years Experience</p>
            </div>

            <img
              className="about-middle-image"
              src={slide2}
              alt="Human resource and talent acquisition concept"
            />
            <div className="about-accent-line" aria-hidden="true" />
          </aside>

          <article className="about-content">
            <p className="about-kicker">ABOUT US</p>
            <h2>HR Staffing & Recruitment Consultancy</h2>

            <p>
              At <strong>Tvesha Group</strong>, we are a premier human resource
              staffing and recruitment consulting firm dedicated to delivering
              comprehensive, end-to-end HR solutions across diverse industries
              and geographies.
            </p>

            <p>
              Founded in <strong>2017</strong>, we have steadily grown by
              adapting to the evolving business landscape, offering tailored
              staffing and recruitment services that align perfectly with our
              clients' strategic goals.
            </p>

            <p>
              With offices in <strong>Bhubaneswar (Odisha)</strong> and{" "}
              <strong>Noida (Uttar Pradesh)</strong>, and an expanding global
              footprint, we partner with organizations of all sizes — delivering
              unmatched expertise in:
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
              recruitment solutions. We go beyond filling roles — we build
              lasting partnerships that drive sustainable business success.
            </p>

            <ul>
              <li>
                <strong>Industry-Specific Expertise</strong>: Deep understanding
                across IT, finance, healthcare, manufacturing, FMCG, real
                estate, and more — sourcing niche talent that fits your exact
                needs.
              </li>
              <li>
                <strong>Client-Centric Focus</strong>: We invest time in
                understanding your culture, goals, and challenges to ensure
                perfect candidate alignment and a seamless experience.
              </li>
              <li>
                <strong>Speed without Compromise</strong>: Agile processes
                deliver quality candidates quickly and efficiently.
              </li>
              <li>
                <strong>Integrity & Confidentiality</strong>: Highest ethical
                standards and complete data protection at every step.
              </li>
              <li>
                <strong>Cost-Effective & Scalable</strong>: Flexible models that
                optimize your budget while maintaining excellence.
              </li>
            </ul>

            <p>
              Whether you're scaling rapidly, replacing key roles, or
              outsourcing HR functions,  Tvesha Group is your trusted partner
              for building high-performing teams.
            </p>

            <h3>Our Vision</h3>
            <p>
              To be the preferred HR staffing and recruitment partner,
              empowering organizations worldwide to create exceptional teams
              that drive innovation and growth.
            </p>

            <h3>Our Core Values</h3>
            <ul>
              <li>
                <strong>Integrity</strong> — Doing the right thing, always.
              </li>
              <li>
                <strong>Client-Centricity</strong> — Your success is our top
                priority.
              </li>
              <li>
                <strong>Excellence</strong> — Striving for the highest quality
                in every interaction.
              </li>
              <li>
                <strong>Innovation</strong> — Continuously evolving to meet
                changing market needs.
              </li>
              <li>
                <strong>Collaboration</strong> — Harnessing the power of
                teamwork.
              </li>
              <li>
                <strong>Diversity & Inclusion</strong> — Championing diverse
                perspectives and equitable workplaces.
              </li>
              <li>
                <strong>Professional Growth</strong> — Supporting development
                for clients, candidates, and our own team.
              </li>
            </ul>

            <h3>Domain Expertise</h3>
            <p>
              Backed by a large talent pool, cutting-edge tools, and seasoned
              professionals, we excel in delivering targeted HR solutions —
              locally and globally.
            </p>

            <h3>Partner with Tvesha Group Today</h3>
            <p>
              Discover the difference with <strong>Tvesha Group</strong> —
              where your human capital objectives meet customized strategies,
              professionalism, and real results.
            </p>

            <p>
              <strong>Let’s build exceptional teams together.</strong>
              <br />
              Reach out now to discuss your hiring needs and elevate your
              organization to new heights.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
