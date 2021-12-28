import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Jornal from "../components/Jornal/Jornal";
import Portifolio from "../components/Portfolio/Portifolio";
import Services from "../components/Services/Services";

function LandingPage() {
  return (
    <main id="main">
      <Hero />
      <main id="main">
        <About />
        <Portifolio />
        <Jornal />
        <Contact />
      </main>
    </main>
  );
}

export default LandingPage;
