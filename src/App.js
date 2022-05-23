import React from "react";
import Gallery from "./components/carousel/Gallery";
import SlideShow from "./components/carousel/Slideshow";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";

export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <SlideShow />
      <About />
      <Mission />
      <Gallery />
    </div>
  );
};

export default App;
