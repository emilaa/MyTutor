import React from "react";
import "./FindTutorItem.scss";
import Tutor_1 from "../../assets/images/tutor-1.jpeg";
import Tutor_2 from "../../assets/images/tutor-2.jpeg";
import Tutor_3 from "../../assets/images/tutor-3.jpeg";
import Tutor_4 from "../../assets/images/tutor-4.jpeg";

function FindTutorItem() {
  return (
    <>
      <div className="tutors__tutor">
        <img className="tutor__image" src={Tutor_1} alt="" />
        <div className="tutor__about">
          <h6 className="about__name">Harry</h6>
          <p className="about__position">English tutor</p>
        </div>
      </div>
      <div className="tutors__tutor">
        <img className="tutor__image" src={Tutor_2} alt="" />
        <div className="tutor__about">
          <h6 className="about__name">Mack</h6>
          <p className="about__position">Spain tutor</p>
        </div>
      </div>
      <div className="tutors__tutor">
        <img className="tutor__image" src={Tutor_3} alt="" />
        <div className="tutor__about">
          <h6 className="about__name">Jenny</h6>
          <p className="about__position">French tutor</p>
        </div>
      </div>
      <div className="tutors__tutor">
        <img className="tutor__image" src={Tutor_4} alt="" />
        <div className="tutor__about">
          <h6 className="about__name">Jenny</h6>
          <p className="about__position">English tutor</p>
        </div>
      </div>
    </>
  );
}

export default FindTutorItem;
