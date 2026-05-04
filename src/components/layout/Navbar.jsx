import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/newlogo.png";

import "./navbar.css";

const PHONE = "+91-8917553919";
const EMAIL = "enquiry@tveshagroup.com";
const HOURS = "Monday to Friday: 9.30 am to 6.30 PM";
const ABOUT_DROPDOWN_ITEMS = [
  { label: "Why Tvesha Group", to: "/about#why-tvesha" },
  { label: "Vision & Values", to: "/about#vision-values" },
  { label: "Domain Expertise", to: "/about#domain-expertise" },
];

const SERVICES_DROPDOWN_ITEMS = [
  { label: "Recruitment & Staffing", to: "/services" },
  { label: "Payroll Management", to: "/services" },
  { label: "HR Policies & Compliance", to: "/services" },
  { label: "Performance Management", to: "/services" },
];

const CAREER_DROPDOWN_ITEMS = [
  // { label: "Current Opening", to: "/about#why-tvesha" },
  // { label: "Submit Your CV", to: "/about#vision-values" },
  { label: "", to: "/about#domain-expertise" },
  { label: "Current Opening", to: "/career/current-opening" },
  { label: "Submit Your CV", to: "/career" },
];

const INDUSTRY_DROPDOWN_ITEMS = [
  { label: "Real Estate", to: "/industry/real-estate" },
  {
    label: "Retail & E-Commerce /Internet",
    to: "/industry/retail-e-commerce-internet",
  },
  {
    label: "EPC(Engineering Procurement Construction)",
    to: "/industry/epc-engineering-procurement-construction",
  },
  { label: "Advertising & Media", to: "/industry/advertising-media" },
  {
    label: "Chemical And Allied Industry",
    to: "/industry/chemical-allied-industry",
  },
  {
    label: "Pharma, Lifr, Sciences, Devices & Diagnostics",
    to: "/industry/pharma-life-sciences-devices-diagnostics",
  },
  { label: "FMCG", to: "/industry/fmcg" },
  { label: "Information Technology", to: "/industry/information-technology" },
  { label: "Telecommunication", to: "/industry/telecommunications" },
  {
    label: "Engineering & Manufacturing Industryx",
    to: "/industry/engineering-manufacturing-industry",
  },
];

const MOBILE_DROPDOWNS = {
  about: { label: "About Us", items: ABOUT_DROPDOWN_ITEMS },
  services: { label: "Services", items: SERVICES_DROPDOWN_ITEMS },
  career: { label: "Career", items: CAREER_DROPDOWN_ITEMS },
  industry: { label: "Industry Practice", items: INDUSTRY_DROPDOWN_ITEMS },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // const closeMenu = () => setMenuOpen(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const openMobileDropdown = (key) => setActiveMobileDropdown(key);

  const closeMobileDropdown = () => setActiveMobileDropdown(null);

  return (
    <>
      {/* Top Bar – bilkul same look */}
      <div className="top-bar">
        <div className="top-bar-container">
          {/* Left – Social Icons */}
          <div className="social-icons">
            <span>Follow On:</span>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Right – Contact details */}
          <div className="contact-info">
            <span>📞 Call us: {PHONE}</span>
            <span>✉ {EMAIL}</span>
            <span>🕒 {HOURS}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="Tvesha Group"
              style={{ height: "65px", width: "100px" }}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="nav-links">
            <Link to="/">Home</Link>

            {/* <Link to="/about">About Us</Link> */}
            <div className="nav-dropdown">
              <Link to="/about" className="nav-dropdown-trigger">
                About Us <span className="dropdown-caret">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                {ABOUT_DROPDOWN_ITEMS.map((item) => (
                  <Link key={item.label} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link to="/services">Services</Link> */}
            <div className="nav-dropdown">
              <Link to="/services" className="nav-dropdown-trigger">
                Services <span className="dropdown-caret">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                {SERVICES_DROPDOWN_ITEMS.map((item) => (
                  <Link key={item.label} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link to="/career">Career</Link> */}
            <div className="nav-dropdown">
              <Link to="/career" className="nav-dropdown-trigger">
                Career <span className="dropdown-caret">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                {CAREER_DROPDOWN_ITEMS.map((item) => (
                  <Link key={item.label} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link to="/industry">Industry Practice</Link> */}
            <div className="nav-dropdown">
              <Link to="/industry" className="nav-dropdown-trigger">
                Industry Practice <span className="dropdown-caret">▾</span>
              </Link>
              <div className="nav-dropdown-menu">
                {INDUSTRY_DROPDOWN_ITEMS.map((item) => (
                  <Link key={item.label} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* Enquire Button */}
          <div className="enquire-btn">
            <Link to="/career" className="header-btn">
              <span>Enquire Now »</span>
            </Link>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer (same as before) */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button onClick={closeMenu} aria-label="Close">
            ✕
          </button>
        </div>
        {/* <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/career" onClick={closeMenu}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/industry" onClick={closeMenu}>
              Industry Practice
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="drawer-contact">
          <h4>Contact Info</h4>
          <p>📞 {PHONE}</p>
          <p>✉ {EMAIL}</p>
          <p>🕒 {HOURS}</p>
        </div> */}
        {activeMobileDropdown ? (
          <div className="mobile-submenu-view">
            <div className="mobile-submenu-head">
              <h4>{MOBILE_DROPDOWNS[activeMobileDropdown].label}</h4>
              <button type="button" onClick={closeMobileDropdown}>
                Back ←
              </button>
            </div>

            <ul className="mobile-submenu-list">
              {MOBILE_DROPDOWNS[activeMobileDropdown].items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-dropdown-trigger"
                  onClick={() => openMobileDropdown("about")}
                >
                  <span>About Us</span>
                  <span>▾</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-dropdown-trigger"
                  onClick={() => openMobileDropdown("services")}
                >
                  <span>Services</span>
                  <span>▾</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-dropdown-trigger"
                  onClick={() => openMobileDropdown("career")}
                >
                  <span>Career</span>
                  <span>▾</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-dropdown-trigger"
                  onClick={() => openMobileDropdown("industry")}
                >
                  <span>Industry Practice</span>
                  <span>▾</span>
                </button>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="drawer-contact">
              <h4>Contact Info</h4>
              <p>🕒 {HOURS}</p>
              <p>✉ {EMAIL}</p>
            </div>
          </>
        )}
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}
