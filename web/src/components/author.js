import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

import Icon from "./icon";

import * as styles from "./author.module.css";

const Author = (props) => {
    //Remove unwanted parts of linkedin link url.
    const linkedinLink = props.linkedin.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('-')[0];

    return(
        <div className={styles.author_container}>
            <div className={styles.image_container}>   
                <GatsbyImage className={styles.author_img} image={props.imageSrc} alt={props.imageAlt} />
            </div>
            <div className={styles.text_container}>
                {props.bio.map((content) => {
                    if(content.children[0].marks[0] === "strong"){
                        return <p key={content.children[0]._key} className={styles.author_paragraph_strong}>{content.children[0].text}</p>
                    }
                    return <p key={content.children[0]._key} className={styles.author_paragraph}>{content.children[0].text}</p>
                })}
                <div className={styles.icon_container}>
                    <a href={"mailto:" + props.mail}>
                        <span className={styles.icon_svg}>
                            <Icon symbol="mail" />
                        </span>
                        <span className={styles.icon_text}>{props.mail}</span>
                    </a>
                    <a href={props.linkedin}>
                        <span className={styles.icon_svg}>
                            <Icon symbol="linkedin" />
                        </span>
                        <span className={styles.icon_text}>{linkedinLink + "-dahlberg"}</span>
                    </a>
                </div>
            </div>
        </div>
    )
};

Author.defaultProps = {
    lang: "en",
    meta: [],
    keywords: []
};
  
Author.propTypes = {
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    bio: PropTypes.array,
    mail: PropTypes.string,
    linkedin: PropTypes.string,
};

export default Author;
