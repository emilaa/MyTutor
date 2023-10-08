import React from "react";
import FindTutor from "../../components/findTutor/FindTutor";
import SkilledTutor from "../../components/skilledTutor/SkilledTutor";
import BecomeTutor from "../../components/becomeTutor/BecomeTutor";
import Languages from "../../components/languages/Languages";
import LearnProcess from "../../components/learnProcess/LearnProcess";

function HomePage() {
  return (
    <main>
      <FindTutor />
      <SkilledTutor />
      <BecomeTutor />
      <Languages />
      <LearnProcess />
    </main>
  );
}

export default HomePage;
