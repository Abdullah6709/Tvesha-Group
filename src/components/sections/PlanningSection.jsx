import { IoPlay } from "react-icons/io5";

export default function PlanningSection() {
  return (
    <section className="planning-cta section">
      <div className="container planning-cta-inner">
        <div className="planning-copy">
          <h2>Good Business Planning Ensures Success.</h2>
          <p>
            We are leading Human Resource Staffing and Recruitment consulting
            company with expertise in providing end-to-end hr solutions to
            across various industries.
          </p>
          <button type="button" className="planning-btn">
            View All Services <span aria-hidden="true">»</span>
          </button>
        </div>

        <button
          type="button"
          className="planning-play"
          aria-label="Play company overview video"
        >
          <span className="planning-play-inner">
            <IoPlay aria-hidden="true" />
          </span>
        </button>
      </div>
    </section>
  );
}
