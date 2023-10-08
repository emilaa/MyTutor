import React from "react";
import "./FindTutor.scss";
import Title from "../title/Title";
import Content from "../content/Content";
import FindTutorItem from "../findTutorItem/FindTutorItem";

function FindTutor() {
  return (
    <section id="find_tutor">
      <div className="container find_tutor__main">
        <div className="main__find">
          <Title title="Find The Best Tutor" />
          <Content
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been"
          />
          <div className="find__search">
            <input
              className="search__input"
              type="text"
              placeholder="Which language do you want to learn"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="#AAAAAA"
              />
              <path
                d="M22 22.7495C21.81 22.7495 21.62 22.6795 21.47 22.5295L19.47 20.5295C19.18 20.2395 19.18 19.7595 19.47 19.4695C19.76 19.1795 20.24 19.1795 20.53 19.4695L22.53 21.4695C22.82 21.7595 22.82 22.2395 22.53 22.5295C22.38 22.6795 22.19 22.7495 22 22.7495Z"
                fill="#AAAAAA"
              />
            </svg>
          </div>
        </div>
        <div className="main__tutors">
          <FindTutorItem />
        </div>
      </div>
    </section>
  );
}

export default FindTutor;
