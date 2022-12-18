import React from "react";
import DemoCarousel from "./components/DemoCarousel";
import DescriptionSection from "./components/DescriptionSection";
import PopularSection from "./components/PopularSection";

function Home(props) {
  return (
    <>
      <DemoCarousel />
      <DescriptionSection />
      <PopularSection />
    </>
  );
}

export default Home;
