import { TbMap2 } from "react-icons/tb";

const locations = [
  {
    city: "Bhubaneswar",
    address:
      "2157 ,1st Floor ,Ravi Talkies Rd, Old Town Bhubaneswar, Odisha-751002,India",
  },
  {
    city: "Noida",
    address:
      "G Block G-75, 4th Floor, Sector 63, Noida, Uttar Pradesh 201301 India",
  },
];

export default function TestimonialsContactSection() {
  return (
    <section className="testimonials-contact">
      <div className="testimonials-band">
        <div className="container testimonials-header">
          <p>TESTIMONIALS</p>
          <h2>What people say About Us</h2>
        </div>
      </div>

      <div className="locations-enquiry section">
        <div className="container locations-layout">
          <div className="locations-col">
            <h2>Our Locations</h2>
            <p className="locations-intro">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look
            </p>

            <div className="locations-grid">
              {locations.map(({ city, address }) => (
                <article className="location-card" key={city}>
                  <TbMap2 className="location-icon" aria-hidden="true" />
                  <div>
                    <h3>{city}</h3>
                    <p>{address}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="enquiry-card">
            <p>GET IN TOUCH</p>
            <h3>Enquire Now</h3>
            <form className="enquiry-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your e-mail" />
              <textarea rows="5" placeholder="Your Massage" />
              <button type="button">Submit »</button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}
