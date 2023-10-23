import React from "react";
import "./Tutors.scss";
import TutorItem from "../tutorItem/TutorItem";

function Tutors() {
  return (
    <section id="tutors">
      <div className="container tutors__tutor_main">
        <TutorItem />
      </div>
    </section>
  );
}

export default Tutors;
