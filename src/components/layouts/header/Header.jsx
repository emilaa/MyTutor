import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="nav_area">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <nav className="nav_area__nav_bar">
            <ul className="nav_bar__list">
              <li className="list__item">
                <Link className="a" to="/findTutor">
                  Find Tutor
                </Link>
              </li>
              <li className="list__item">
                <Link className="a" to="/becomeTutor">
                  Become a tutor
                </Link>
              </li>
              <li className="list__item">
                <Link className="a" to="/aboutUs">
                  About us
                </Link>
              </li>
              <li className="list__item">
                <Link className="a" to="/help">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.71252 8.187C6.28652 8.187 5.94152 7.8315 6.00752 7.4115C6.42002 4.86 8.36402 3 11.7375 3C15.1125 3 17.388 5.04 17.388 7.8225C17.388 9.8385 16.3905 11.2545 14.703 12.282C13.053 13.2705 12.582 13.959 12.582 15.297V15.342C12.582 15.5409 12.503 15.7317 12.3623 15.8723C12.2217 16.013 12.0309 16.092 11.832 16.092H10.677C10.4794 16.092 10.2898 16.014 10.1493 15.875C10.0089 15.736 9.92899 15.5471 9.92702 15.3495L9.92252 15.0495C9.85802 13.218 10.638 12.048 12.39 10.9815C13.935 10.0335 14.4855 9.279 14.4855 7.9395C14.4855 6.471 13.3485 5.3925 11.5965 5.3925C10.083 5.3925 9.03152 6.186 8.68952 7.4955C8.59052 7.8765 8.27252 8.187 7.87952 8.187H6.71252ZM11.244 21C12.177 21 12.8865 20.289 12.8865 19.365C12.8865 18.438 12.177 17.727 11.244 17.727C10.335 17.727 9.61352 18.438 9.61352 19.3635C9.61352 20.289 10.335 21 11.244 21Z"
                      fill="#1C1B1B"
                    />
                  </svg>
                </Link>
              </li>
              <li className="list__item">
                <Link className="a" to="/signUp">
                  Sign up
                </Link>
              </li>
            </ul>
            <svg
              onClick={() => setOpened(!opened)}
              className="hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M31.5 11.625H4.5C3.885 11.625 3.375 11.115 3.375 10.5C3.375 9.885 3.885 9.375 4.5 9.375H31.5C32.115 9.375 32.625 9.885 32.625 10.5C32.625 11.115 32.115 11.625 31.5 11.625Z"
                fill="#292D32"
              />
              <path
                d="M31.5 19.125H4.5C3.885 19.125 3.375 18.615 3.375 18C3.375 17.385 3.885 16.875 4.5 16.875H31.5C32.115 16.875 32.625 17.385 32.625 18C32.625 18.615 32.115 19.125 31.5 19.125Z"
                fill="#292D32"
              />
              <path
                d="M31.5 26.625H4.5C3.885 26.625 3.375 26.115 3.375 25.5C3.375 24.885 3.885 24.375 4.5 24.375H31.5C32.115 24.375 32.625 24.885 32.625 25.5C32.625 26.115 32.115 26.625 31.5 26.625Z"
                fill="#292D32"
              />
            </svg>
          </nav>
        </div>
        <div
          style={{ display: opened ? "block" : "none" }}
          className="responsive_nav_area"
        >
          <ul className="responsive_nav_area__navbar_list">
            <li className="navbar_list__item">
              <Link className="a">Find Tutor</Link>
            </li>
            <li className="navbar_list__item">
              <Link className="a">Become a tutor</Link>
            </li>
            <li className="navbar_list__item">
              <Link className="a">About us</Link>
            </li>
            <li className="navbar_list__item">
              <Link className="a">Help</Link>
            </li>
            <li className="navbar_list__item">
              <Link className="a">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
