import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const servicesGroups = [
  {
    title: "Recruitment & Staffing",
    items: [
      "Permanent and Contract",
      "Retainership Search",
      "Contingency Search",
      "RPO services",
    ],
  },
  {
    title: "HR Consulting",
    items: [
      "Payroll & Compliance Outsourcing",
      "Organization Development",
      "Salary Benchmarking",
      "Industry Mapping",
      "Reference check",
    ],
  },
  {
    title: "HR Technology",
    items: [
      "HRIS (Human Resource Information System)",
      "PMS(Performance Management System)",
    ],
  },
  {
    title: "Training Consulting",
    items: ["Learning & Development", "Customized Training"],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* <section className="page-header">
        <div className="container"> */}
      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>Our Services</h1>
          {/* <p>Comprehensive HR & Recruitment Solutions</p> */}
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
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
