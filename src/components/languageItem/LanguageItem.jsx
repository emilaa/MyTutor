import React from "react";
import "./LanguageItem.scss";
import English from "../../assets/images/english.jpeg";
import Russian from "../../assets/images/russian.jpeg";
import French from "../../assets/images/french.jpeg";
import Italy from "../../assets/images/italy.jpeg";
import Ielts from "../../assets/images/ielts.jpeg";

function LanguageItem() {
  return (
    <>
      <div className="languages__language">
        <img className="language__image" src={English} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">English</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={Russian} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">Russian</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={French} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">French</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={Italy} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">Italy</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={Ielts} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">Ielts</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={Italy} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">Italy</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={Ielts} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">Ielts</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={English} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">English</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={French} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">French</h6>
        </div>
      </div>
      <div className="languages__language">
        <img className="language__image" src={Russian} alt="" />
        <div className="language__name_parent">
          <h6 className="name_parent__name">Russian</h6>
        </div>
      </div>
    </>
  );
}

export default LanguageItem;
