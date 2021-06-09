import React from "react";
import PropTypes from "prop-types";
import WebDeveloper from "./illustrations/webdeveloper.svg"

import * as styles from "./hero.module.css";

const Hero = (props) => {
  return(
    <div className={styles.hero_container}>
        <div className={styles.textcontainer}>
            <h1 className={styles.hero_title}>{props.titlePart1}<span> {props.titlePart2}</span></h1>
            <p>{props.paragraph}</p>
        </div>
        <div className={styles.displaycontainer}>
          <img src={WebDeveloper} alt="Animated Web Developer Illustration." />
        </div>
    </div>
  )
};

Hero.defaultProps = {
    lang: "en",
    meta: [],
    keywords: []
};
  
Hero.propTypes = {
    titlePart1: PropTypes.string,
    titlePart2: PropTypes.string,
    paragraph: PropTypes.string,
};

export default Hero;
