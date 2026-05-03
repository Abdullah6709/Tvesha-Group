import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const servicesGroups = [
  {
    title: "Recruitment & Staffing",
    items: [
      "We help you find and hire the right candidates quickly and efficiently.",
    ],
  },
  {
    title: "Payroll Management",
    items: [
      "Accurate salary processing with full compliance and hassle-free management.",
    ],
  },
  {
    title: "HR Policies & Compliance",
    items: [
      "Set up professional HR systems and ensure legal compliance.",
    ],
  },
  {
    title: "Performance Management",
    items: ["Improve employee productivity with structured evaluation systems."],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>Our Services</h1>
          <p className="about-page-watermark" aria-hidden="true">
            Services
          </p>
          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="services-detail section">
        <div className="container services-detail-grid">
          {servicesGroups.map(({ title, items }) => (
            <article className="service-detail-card" key={title}>
              <h3>{title}</h3>
              {items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}