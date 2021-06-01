import React from "react";
import HamburgerIcon from "./hamburger";
import DarkModeIcon from "./darkmode";
import TranslateIcon from "./translate";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    case "darkmode":
      return <DarkModeIcon />;
    case "translate":
      return <TranslateIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
