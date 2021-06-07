import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby"
import WebDeveloper from "./illustrations/webdeveloper.svg"

import * as styles from "./hero.module.css";

const query = graphql`
  query HeroQuery {
    hero: sanityHero {
        titlePart1
        titlePart2
        paragraph
    }
  }
`;

const Hero = () => {
  return(
    <div className={styles.hero_container}>
        <StaticQuery
            query={query}
            render={data => {
            if (!data.hero) {
                throw new Error(
                'Missing "Hero". Open the studio at http://localhost:3333 and add "Site hero" data.'
                );
            }      
            return (
                <div className={styles.textcontainer}>
                    <h1 className={styles.hero_title}>{data.hero.titlePart1}<span>{data.hero.titlePart2}</span></h1>
                    <p>{data.hero.paragraph}</p>
                </div>
            ); 
            }}
        />
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
    header: PropTypes.string,
    paragraph: PropTypes.string,
};

export default Hero;
