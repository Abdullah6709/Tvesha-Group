import logo from "../../assets/newlogo.png";

const industryLinks = [
  "Real Estate",
  "Retail & E-Commerce /Internet",
  "EPC (Engineering Procurement Construction)",
  "Advertising & Media",
  "Chemical and Allied Industry",
  "Pharma, Life sciences, Devices & Diagnostics",
  "FMCG",
  "Information Technology",
  "Telecommunications",
  "Engineering & Manufacturing Industry",
];

const quickLinks = ["About Company", "Our Services", "Career", "Contact"];

export default function Footer() {
  return (
    <footer className="footer">
      {/* <div className="container text-center">
        <h4>Tvesha Group</h4>
        <p>Leading Recruitment & HR Consulting Company</p>
        <p>© 2026 All Rights Reserved</p> */}
      <div className="container footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Tvesha Group" />
          <p>
            Tvesha Group was founded in 2024 with vision to provide Hr
            solutions under one roof. Our Objectives is to achieve and help our
            clients with fully integrated human resource management solution.
          </p>
        </div>

        <div>
          <h3>Industry Practices</h3>
          <ul className="footer-list">
            {industryLinks.map((item) => (
              <li key={item}>» {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick Link</h3>
          <ul className="footer-list">
            {quickLinks.map((item) => (
              <li key={item}>» {item}</li>
            ))}
          </ul>
          <div>
            <h3>Our Location</h3>
            <ul className="footer-list">
              <li>📍SA 6/186 Aktha pahariya Sarnath Varanasi, Uttar Pradesh 221007 India</li>
              <li>📞 +91 12345 67890</li>
              <li>✉️ info@tveshagroup.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © 2022 <strong>Tvesha Group</strong> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}