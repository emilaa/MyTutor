import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "./Const";
import Header from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/Footer";
import HomePage from "../pages/home/HomePage";
import FindTutorPage from "../pages/findTutor/FindTutorPage";

function Routs() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={Router.Home.toString()} element={<HomePage />} />
        <Route path={Router.FindTutor.toString()} element={<FindTutorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routs;
