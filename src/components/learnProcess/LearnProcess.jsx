import React from "react";
import "./LearnProcess.scss";
import Search from "../../assets/images/search.png";
import Chat from "../../assets/images/chat.png";
import Organize from "../../assets/images/organize.png";
import Title from "../title/Title";
import Content from "../content/Content";

function LearnProcess() {
  return (
    <section id="learn_process">
      <div className="container">
        <Title title="This is how all learning processes go" />
        <div className="learn_process__processes">
          <div className="processes__process">
            <div className="process__content">
              <div className="content__title">
                <h6 className="title__name">1.Search</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="221"
                  height="66"
                  viewBox="0 0 221 66"
                  fill="none"
                >
                  <rect width="221" height="66" rx="20" fill="#FFD2B2" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 66H153.5C153.5 66 145.67 52.1328 147 43C147.591 38.9391 150.436 35.2746 153.263 31.631C156.532 27.4192 159.78 23.2354 159.5 18.5C158.916 8.60299 149 0 149 0H20C8.9543 0 0 8.95431 0 20V46C0 57.0457 8.9543 66 20 66Z"
                    fill="#F97B22"
                  />
                </svg>
              </div>
              <Content
                content="View tutor profiles and contact any skilled tutor according to
                your criteria (rates, certification, reviews, at home or online
                lessons)"
              />
            </div>
            <div className="process__background">
              <img className="background__image" src={Search} alt="" />
            </div>
          </div>
          <div className="processes__process">
            <div className="process__content">
              <div className="content__title">
                <h6 className="title__name">2.Chat</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="221"
                  height="66"
                  viewBox="0 0 221 66"
                  fill="none"
                >
                  <rect width="221" height="66" rx="20" fill="#FFD2B2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 66H153.5C153.5 66 145.67 52.1328 147 43C147.591 38.9391 150.436 35.2746 153.263 31.631C156.532 27.4192 159.78 23.2354 159.5 18.5C158.916 8.60299 149 0 149 0H20C8.9543 0 0 8.95431 0 20V46C0 57.0457 8.9543 66 20 66Z"
                    fill="#F97B22"
                  />
                </svg>
              </div>
              <Content
                content="It's quick and easy, tutors will get back to you within hours!
                And if you can't find the perfect tutor, our team is here to
                help."
              />
            </div>
            <div className="process__background">
              <img className="background__image" src={Chat} alt="" />
            </div>
          </div>
          <div className="processes__process">
            <div className="process__content">
              <div className="content__title">
                <h6 className="title__name">3.Organize</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="221"
                  height="66"
                  viewBox="0 0 221 66"
                  fill="none"
                >
                  <rect width="221" height="66" rx="20" fill="#FFD2B2" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 66H153.5C153.5 66 145.67 52.1328 147 43C147.591 38.9391 150.436 35.2746 153.263 31.631C156.532 27.4192 159.78 23.2354 159.5 18.5C158.916 8.60299 149 0 149 0H20C8.9543 0 0 8.95431 0 20V46C0 57.0457 8.9543 66 20 66Z"
                    fill="#F97B22"
                  />
                </svg>
              </div>
              <Content
                content="Easily communicate and schedule your lessons from your message
                board with your tutor or coach."
              />
            </div>
            <div className="process__background">
              <img className="background__image" src={Organize} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnProcess;
