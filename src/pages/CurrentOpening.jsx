import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FILTERS = [
  "Jobs by Location",
  "Jobs by Role",
  "Jobs by Department",
  "Jobs by Industry",
];

export default function CurrentOpening() {
  return (
    <>
      <Navbar />

      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>Jobs Listing</h1>
          <p className="about-page-watermark" aria-hidden="true">
            Jobs
          </p>
          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Jobs</span>
          </div>
        </div>
      </section>

      <section className="jobs-listing-section section">
        <div className="container jobs-layout">
          <aside className="jobs-filter-panel">
            <h3>Advance Filter</h3>
            <ul>
              {FILTERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          <div className="jobs-results-panel">
            <p>Showing 41–60 of 944 jobs</p>
            <h2>No result found</h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
