import React from "react";
import "./Languages.scss";
import LanguageItem from "../languageItem/LanguageItem";

function Languages() {
  return (
    <section id="languages_title">
      <div className="container">
        <h4 className="languages_title__title">
          There are some language that you can learn
        </h4>
        <div className="languages_title__languages">
          <LanguageItem />
        </div>
      </div>
    </section>
  );
}

export default Languages;
