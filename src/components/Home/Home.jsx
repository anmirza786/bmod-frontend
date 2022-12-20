import React from "react";
import ideas from "../../StaticData/ideas";
import DemoCarousel from "./components/DemoCarousel";
import DescriptionSection from "./components/DescriptionSection";
import PopularSection from "./components/PopularSection";
function Home(props) {
  return (
    <>
      <DemoCarousel ideas={ideas} />
      <DescriptionSection />
      <PopularSection ideas={ideas} />
    </>
  );
}

export default Home;
