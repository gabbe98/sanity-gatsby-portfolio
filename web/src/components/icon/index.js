import React from "react";
import HamburgerIcon from "./hamburger";
import DarkModeIcon from "./darkmode";
import TranslateIcon from "./translate";
import LinkedinIcon from "./linkedin";
import ChatIcon from "./chat";
import CloseChatIcon from "./closechat";
import GithubIcon from "./github";
import MailIcon from "./mail";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    case "darkmode":
      return <DarkModeIcon />;
    case "translate":
      return <TranslateIcon />;
    case "github":
      return <GithubIcon />;
    case "chat":
      return <ChatIcon />;
    case "closechat":
      return <CloseChatIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "mail":
      return <MailIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
