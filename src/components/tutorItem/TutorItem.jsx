import React from "react";
import "./TutorItem.scss";
import Tutor from "../../assets/images/tutor-5.jpeg";

function TutorItem() {
  return (
    <>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
      <div className="main_tutor">
        <div className="tutor__image_name">
          <img className="image_name__image" src={Tutor} alt="" />
          <h6 className="image_name__name">Name</h6>
        </div>
        <div className="tutor__about">
          <div className="about__rate_favorite">
            <div className="rate_favorite__rate_star">
              <svg
                className=".rate_star__star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703ZM12.0001 18.5903C12.4901 18.5903 12.9801 18.7103 13.3701 18.9403L16.3601 20.7103C17.2301 21.2303 17.7801 21.2303 17.9901 21.0803C18.2001 20.9303 18.3501 20.4003 18.1301 19.4203L17.4201 16.3503C17.2301 15.5203 17.5401 14.4503 18.1401 13.8403L20.6201 11.3603C21.1101 10.8703 21.3301 10.3903 21.2301 10.0603C21.1201 9.73031 20.6601 9.46031 19.9801 9.35031L16.7901 8.82031C16.0201 8.69031 15.1801 8.07031 14.8301 7.37031L13.0701 3.85031C12.7501 3.21031 12.3501 2.83031 12.0001 2.83031C11.6501 2.83031 11.2501 3.21031 10.9401 3.85031L9.17012 7.37031C8.82012 8.07031 7.98012 8.69031 7.21012 8.82031L4.03012 9.35031C3.35012 9.46031 2.89012 9.73031 2.78012 10.0603C2.67012 10.3903 2.90012 10.8803 3.39012 11.3603L5.87012 13.8403C6.47012 14.4403 6.78012 15.5203 6.59012 16.3503L5.88012 19.4203C5.65012 20.4103 5.81012 20.9303 6.02012 21.0803C6.23012 21.2303 6.77012 21.2203 7.65012 20.7103L10.6401 18.9403C11.0201 18.7103 11.5101 18.5903 12.0001 18.5903Z"
                  fill="#FFF621"
                />
                <path
                  d="M7.5 8.5L11.5 3C11.6667 2.83333 12.1 2.5 12.5 2.5C12.9 2.5 14.6667 6.16667 15.5 8C17 8.33333 20.1 8.9 20.5 8.5C21 8 21.5 10.5 21.5 11C21.5 11.5 17.5 14.882 17.5 16C17.5 16.5 18.3333 19 19 20L18.5 21L17.5 21.5C15.8333 20.8333 12.3 19.4 11.5 19C10.7 18.6 8.16667 20.5 7 21.5C6.5 21.5 5.4 21.3 5 20.5C4.5 19.5 6.5 15 5.5 14.5C4.5 14 2.5 10.5 2.5 10C2.5 9.6 5.83333 8.66667 7.5 8.5Z"
                  fill="#FFF621"
                />
              </svg>
              <span className="rate_star__rate">5</span>
            </div>
            <svg
              className="rate_favorite__favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.6496C11.69 21.6496 11.39 21.6096 11.14 21.5196C7.32 20.2096 1.25 15.5596 1.25 8.68961C1.25 5.18961 4.08 2.34961 7.56 2.34961C9.25 2.34961 10.83 3.00961 12 4.18961C13.17 3.00961 14.75 2.34961 16.44 2.34961C19.92 2.34961 22.75 5.19961 22.75 8.68961C22.75 15.5696 16.68 20.2096 12.86 21.5196C12.61 21.6096 12.31 21.6496 12 21.6496ZM7.56 3.84961C4.91 3.84961 2.75 6.01961 2.75 8.68961C2.75 15.5196 9.32 19.3196 11.63 20.1096C11.81 20.1696 12.2 20.1696 12.38 20.1096C14.68 19.3196 21.26 15.5296 21.26 8.68961C21.26 6.01961 19.1 3.84961 16.45 3.84961C14.93 3.84961 13.52 4.55961 12.61 5.78961C12.33 6.16961 11.69 6.16961 11.41 5.78961C10.48 4.54961 9.08 3.84961 7.56 3.84961Z"
                fill="#1C1B1B"
              />
            </svg>
          </div>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="about__price_chat">
            <p className="price_chat__price">$15/h</p>
            <button className="price_chat__chat">Chat</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorItem;
