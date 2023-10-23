import React, { useState } from "react";
import "./FindTutor.scss";
import Title from "../title/Title";
import Content from "../content/Content";
import FindTutorItem from "../findTutorItem/FindTutorItem";

function FindTutor() {
  const [focus, setFocus] = useState(false);

  return (
    <section id="find_tutor">
      <div className="container find_tutor__main">
        <div className="main__find">
          <Title title="Find The Best Tutor" />
          <Content
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been"
          />
          <form
            action=""
            className="find__search"
            style={{ width: focus ? "37.7rem" : "" }}
          >
            <div
              className="search__main_search"
              style={{ width: !focus ? "32.9rem" : "" }}
            >
              <input
                onFocus={() => setFocus(!focus)}
                // onBlur={() => setFocus(!focus)}
                className="search__input"
                type="text"
                style={{
                  borderRight: !focus && "none",
                }}
                placeholder={
                  focus ? "Search" : "Which language do you want to learn"
                }
              />
              <svg
                className="search__icon"
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
            <div className="location_translate">
              <div
                className={
                  focus
                    ? "search__main_location d-block"
                    : "search__main_location d-none"
                }
              >
                <svg
                  className="search__location"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M8.99999 21.75H7.99999C7.58999 21.75 7.24999 21.41 7.24999 21C7.24999 20.59 7.56999 20.26 7.97999 20.25C6.40999 14.89 6.40999 9.11 7.97999 3.75C7.56999 3.74 7.24999 3.41 7.24999 3C7.24999 2.59 7.58999 2.25 7.99999 2.25H8.99999C9.23999 2.25 9.46999 2.37 9.60999 2.56C9.74999 2.76 9.78999 3.01 9.70999 3.24C7.82999 8.89 7.82999 15.11 9.70999 20.77C9.78999 21 9.74999 21.25 9.60999 21.45C9.46999 21.63 9.23999 21.75 8.99999 21.75Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M15 21.75C14.92 21.75 14.84 21.74 14.76 21.71C14.37 21.58 14.15 21.15 14.29 20.76C16.17 15.11 16.17 8.89 14.29 3.23C14.16 2.84 14.37 2.41 14.76 2.28C15.16 2.15 15.58 2.36 15.71 2.75C17.7 8.71 17.7 15.27 15.71 21.22C15.61 21.55 15.31 21.75 15 21.75Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M21 9.75C20.92 9.75 20.84 9.74 20.76 9.71C15.11 7.83 8.88003 7.83 3.23003 9.71C2.83003 9.84 2.41003 9.63 2.28003 9.24C2.16003 8.84 2.37003 8.42 2.76003 8.29C8.72003 6.3 15.28 6.3 21.23 8.29C21.62 8.42 21.84 8.85 21.7 9.24C21.61 9.55 21.31 9.75 21 9.75Z"
                    fill="#AAAAAA"
                  />
                </svg>
                <input
                  onBlur={() => setFocus(!focus)}
                  className="search__input"
                  type="text"
                  placeholder="Location"
                />
                <button className="location__search">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="main__tutors">
          <FindTutorItem />
        </div>
      </div>
    </section>
  );
}

export default FindTutor;
