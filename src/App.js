import React from "react";
import Gallery from "./components/carousel/Gallery";
import SlideShow from "./components/carousel/Slideshow";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import DonationTile from "./components/donationTile/DonationTile";

export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <SlideShow />
      <About />
      <Mission />
      <Projects />
      <DonationTile />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
