import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_area">
          <div className="footer_area__footer_bar">
            <p className="footer_bar__title">About</p>
            <ul className="footer_bar__list">
              <li className="list__item">
                <Link className="a">Who are we?</Link>
              </li>
              <li className="list__item">
                <Link className="a">Our Values</Link>
              </li>
              <li className="list__item">
                <Link className="a">Terms & Conditions</Link>
              </li>
              <li className="list__item">
                <Link className="a">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer_area__footer_bar">
            <p className="footer_bar__title">Help</p>
            <ul className="footer_bar__list">
              <li className="list__item">
                <Link className="a">Help Center</Link>
              </li>
              <li className="list__item">
                <Link className="a">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer_area__footer_bar">
            <p className="footer_bar__title">Follow us</p>
            <ul className="footer_bar__list social">
              <li className="list__item">
                <Link className="a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                      fill="white"
                    />
                    <path
                      d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                      fill="white"
                    />
                    <path
                      d="M17 7.50088C16.87 7.50088 16.74 7.47088 16.62 7.42088C16.5 7.37088 16.39 7.30088 16.29 7.21088C16.2 7.11088 16.12 7.00088 16.07 6.88088C16.02 6.76088 16 6.63088 16 6.50088C16 6.37088 16.02 6.24088 16.07 6.12088C16.13 5.99088 16.2 5.89088 16.29 5.79088C16.34 5.75088 16.39 5.70088 16.44 5.67088C16.5 5.63088 16.56 5.60088 16.62 5.58088C16.68 5.55088 16.74 5.53088 16.81 5.52088C17.13 5.45088 17.47 5.56088 17.71 5.79088C17.8 5.89088 17.87 5.99088 17.92 6.12088C17.97 6.24088 18 6.37088 18 6.50088C18 6.63088 17.97 6.76088 17.92 6.88088C17.87 7.00088 17.8 7.11088 17.71 7.21088C17.61 7.30088 17.5 7.37088 17.38 7.42088C17.26 7.47088 17.13 7.50088 17 7.50088Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li className="list__item">
                <Link className="a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.75 22.75H10.25V15.5H9.29999C8.71999 15.5 8.25 15.03 8.25 14.45V12.55C8.25 11.97 8.71999 11.5 9.29999 11.5H10.25V9C10.25 6.93 11.93 5.25 14 5.25H16.7C17.28 5.25 17.75 5.71999 17.75 6.29999V8.70001C17.75 9.28001 17.28 9.75 16.7 9.75H14.75V11.5H16.63C16.95 11.5 17.24 11.64 17.44 11.88C17.64 12.12 17.72 12.44 17.66 12.75L17.28 14.65C17.18 15.14 16.75 15.49 16.25 15.49H14.75V22.75ZM11.75 21.25H13.25V14H15.89L16.09 13H13.26V9.29999C13.26 8.71999 13.73 8.25 14.31 8.25H16.26V6.75H14C12.76 6.75 11.75 7.76 11.75 9V13H9.75V14H11.75V21.25Z"
                      fill="white"
                    />
                    <path
                      d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li className="list__item">
                <Link className="a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 20.75H7C3.56 20.75 1.25 18.44 1.25 15V9C1.25 5.56 3.56 3.25 7 3.25H17C20.44 3.25 22.75 5.56 22.75 9V15C22.75 18.44 20.44 20.75 17 20.75ZM7 4.75C4.42 4.75 2.75 6.42 2.75 9V15C2.75 17.58 4.42 19.25 7 19.25H17C19.58 19.25 21.25 17.58 21.25 15V9C21.25 6.42 19.58 4.75 17 4.75H7Z"
                      fill="white"
                    />
                    <path
                      d="M10.59 15.5292C10.3 15.5292 10.02 15.4592 9.77002 15.3192C9.19002 14.9892 8.84998 14.3192 8.84998 13.4892V10.5292C8.84998 9.69924 9.18002 9.02925 9.77002 8.69925C10.35 8.36925 11.1 8.42923 11.81 8.85923L14.28 10.3392C14.96 10.7492 15.35 11.3593 15.35 12.0093C15.35 12.6593 14.96 13.2692 14.28 13.6792L11.81 15.1592C11.4 15.3992 10.98 15.5292 10.59 15.5292ZM10.59 9.96924C10.55 9.96924 10.52 9.97923 10.5 9.98923C10.43 10.0292 10.35 10.2092 10.35 10.5192V13.4793C10.35 13.7793 10.43 13.9593 10.5 14.0093C10.58 14.0493 10.77 14.0292 11.03 13.8692L13.5 12.3893C13.75 12.2393 13.84 12.0892 13.84 11.9992C13.84 11.9092 13.75 11.7692 13.5 11.6092L11.03 10.1292C10.85 10.0192 10.69 9.96924 10.59 9.96924Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="footer_bottom__copyright">
            2023 MyTutor, Explore and Learn
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
