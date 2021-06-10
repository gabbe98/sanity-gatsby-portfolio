import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react";
import { cn } from "../lib/helpers";
import BlockText from "./block-text";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  const imageSrc = getImage(props.mainImage.asset)
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <GatsbyImage image={imageSrc} alt={props.mainImage.alt} />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  );
}

export default ProjectPreview;
