import React from "react";
import PropTypes from "prop-types";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import * as styles from "./author.module.css";

const Author = (props) => {
  return(
    <div className={styles.author_container}>
        <div className={styles.image_container}>   
            <img className={styles.author_img}
                src={imageUrlFor(buildImageObj(props.imageSrc))
                .fit("crop")
                .url()}
            alt={props.imageAlt}
            />
        </div>
        {/* Set Key to each  paragraph? */}
        <div className={styles.text_container}>
            {props.bio.map((content) => {
                if(content.children[0].marks[0] === "strong"){
                    return <p key={content.children[0]._key} className={styles.author_paragraph_strong}>{content.children[0].text}</p>
                }
                return <p key={content.children[0]._key} className={styles.author_paragraph}>{content.children[0].text}</p>
            })}
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
};

export default Author;
