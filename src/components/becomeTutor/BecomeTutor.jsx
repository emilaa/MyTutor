import React from "react";
import "./BecomeTutor.scss";
import Title from "../title/Title";
import BecomeBackground from "../../assets/images/become-tutor.png";
import BecomeButton from "../buttons/becomeButton/BecomeButton";
import Content from "../content/Content";

function BecomeTutor() {
  return (
    <section id="become_tutor">
      <div className="container become_tutor__main">
        <div className="main__become">
          <Title title="Become a Tutor" />
          <Content
            content="By giving a good lesson, you can get positive feedback from your
            students, and you can be easily recognized"
          />
          <BecomeButton />
        </div>
        <div className="main__background">
          <img className="background__image" src={BecomeBackground} alt="" />
        </div>
      </div>
    </section>
  );
}

export default BecomeTutor;
