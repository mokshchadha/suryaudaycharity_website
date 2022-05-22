import React from "react";
import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";

export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Mission />
      <Carousel />
    </div>
  );
};

export default App;
