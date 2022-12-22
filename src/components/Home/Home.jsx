import React from "react";
import { connect } from "react-redux";
// import ideas from "../../StaticData/ideas";
import DemoCarousel from "./components/DemoCarousel";
import DescriptionSection from "./components/DescriptionSection";
import PopularSection from "./components/PopularSection";
import { getideas } from "../../redux-implementation/actions";
function Home({ state, getideas }) {
  React.useEffect(() => {
    getideas();
  }, [getideas]);
  return (
    <>
      {state.ideas && <DemoCarousel ideas={state.ideas} />}
      <DescriptionSection />
      {state.ideas && <PopularSection ideas={state.ideas} />}
    </>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, { getideas })(Home);
