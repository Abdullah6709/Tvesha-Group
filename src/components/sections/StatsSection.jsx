+41 - 13;

import { GiCoffeeCup, GiProgression } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";

const statsData = [
  {
    value: "6+",
    label: "Years of Experience",
    icon: GiCoffeeCup,
  },
  {
    value: "600+",
    label: "Successfully Careers",
    icon: GiProgression,
  },
  {
    value: "15+",
    label: "Consultants",
    icon: LiaChalkboardTeacherSolid,
  },
  {
    value: "20+",
    label: "Industries covered",
    icon: FiUsers,
  },
];

export default function StatsSection() {
  return (
    // <section className="stats">
    //   <div className="container d-flex justify-content-around">
    //     <div>
    //       <h3>500+</h3>
    //       <p>Clients</p>
    //     </div>
    //     <div>
    //       <h3>1200+</h3>
    //       <p>Placements</p>
    //     </div>
    //     <div>
    //       <h3>10+</h3>
    //       <p>Industries</p>
    <section className="stats-showcase">
      <div className="container">
        <div className="stats-grid">
          {statsData.map(({ value, label, icon: Icon }) => (
            <article className="stats-card" key={label}>
              <div className="stats-icon-box">
                <Icon className="stats-icon" aria-hidden="true" />
              </div>
              <div className="stats-content-box">
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
