import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSectionTwo from "./HeadSectionTwo";


function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSectionTwo />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
