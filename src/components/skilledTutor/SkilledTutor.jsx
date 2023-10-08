import React from "react";
import "./SkilledTutor.scss";
import FindButton from "../buttons/findButton/FindButton";
import Title from "../title/Title";
import Content from "../content/Content";
import SkilledTutorItem from "../skilledTutorItem/SkilledTutorItem";

function SkilledTutor() {
  return (
    <section id="skilled_tutor">
      <div className="container skilled_tutor__main">
        <div className="main__tutors">
          <SkilledTutorItem />
        </div>
        <div className="main__find">
          <Title title="Skilled Tutors" />
          <Content content="More than one thousand students gave a 5 star to their tutor" />
          <FindButton />
        </div>
      </div>
    </section>
  );
}

export default SkilledTutor;
