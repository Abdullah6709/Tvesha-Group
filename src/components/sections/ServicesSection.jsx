import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const industryCards = [
  {
    title: "Real Estate",
    description:
      "The Real Estate sector in India is largely divided into residential and commercial segments, including retail and offices.",
  },
  {
    title: "Retail & E-Commerce /Internet",
    description:
      "The Indian Retail and E-commerce Industry is one of the fastest-growing sectors domestically as well as globally.",
  },
  {
    title: "EPC (Engineering Procurement Construction)",
    description:
      "EPC is a prominent form of contract used to undertake construction projects with complete delivery accountability.",
  },
  {
    title: "Advertising & Media",
    description:
      "The advertising industry is a global, multibillion-dollar business that serves as a conduit between brands and audiences.",
  },
  {
    title: "Chemical and Allied Industry",
    description:
      "India’s chemical industry is extremely diversified and can be broadly classified into bulk chemica",
  },
  {
    title: "Pharma, Life sciences, Devices & Diagnostics",
    description:
      "Indian Pharmaceutical sector where the technological advancements have been taking inroads into the",
  },
  {
    title: "FMCG",
    description:
      "Fast-moving consumer goods (FMCG) sector is India’s fourth largest sector with household and perso",
  },
  {
    title: "Information Technology",
    description:
      "India is the world’s second-largest telecommunications market with a subscriber base of 1.16 billi",
  },
  {
    title: "Telecommunications",
    description:
      "India is the world’s second-largest telecommunications market with a subscriber base of 1.16 billi.",
  },
  {
    title: "Engineering & Manufacturing Industry",
    description:
      "By 2025 Engineering & Manufacturing Industry would be creating 90 million jobs , These develo",
  },
];

export default function ServicesSection() {
  return (
    // <section className="section bg-light">
    <section className="industry-practices section" id="industries">
      <div className="container">
        <div className="industry-header">
          <div>
            <p className="industry-kicker">
              DEVELOPING SOLUTIONS FOR THE FUTURE
            </p>
            <h2>Industry Practices</h2>
          </div>
          <p className="industry-intro">
            Tvesha Group was founded in 2017 with vision to provide Hr
            solutions under one roof. Our objectives is to achieve and help our
            clients with fully integrated human resource management solution.
          </p>
        </div>

        <div className="industry-grid">
          {industryCards.map(({ title, description }) => (
            <article className="industry-practice-card" key={title}>
              <LiaChalkboardTeacherSolid
                className="industry-card-icon"
                aria-hidden="true"
              />
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="industry-read-more">Read More »</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
