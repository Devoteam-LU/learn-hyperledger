import React from "react";
import { CircularProgress } from "material-ui/Progress";

import LoadingBackground from "./LoadingBackground";
import Logo from "./Logo";

import BlueDevoteamLogo from "images/devoteam-blue.png";

function Loading(props) {
  const { active } = props;
  return (
    <LoadingBackground className="cell grid-x" active={active}>
      <Logo src={BlueDevoteamLogo} />
      <CircularProgress color="secondary" size={120} />
    </LoadingBackground>
  );
}

Loading.propTypes = {};

export default Loading;
