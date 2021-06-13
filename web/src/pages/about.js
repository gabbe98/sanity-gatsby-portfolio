import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image"

import GraphQLErrorList from "../components/graphql-error-list";

import Container from "../components/container";
import GabbeBot from "../components/gabbebot";
import VerticalBar from "../components/verticalbar";
import History from "../components/history";
import Author from "../components/author";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query AboutPageQuery {
    about: sanitySiteSettings {
      author {
        name
        mail
        linkedin
        image {
          asset {
            gatsbyImageData(
              fit: CLIP
              height: 500
              placeholder: BLURRED
              width: 500
              aspectRatio: 1.1
              formats: JPG
            )
            _id
          }
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          alt
        }
        bio {
          children {
            text
            marks
            _key
          }
        }
      }
    }
  } 
`

const AboutPage = props => {
  const { data, errors } = props;
  const imageSrc = getImage(data.about.author.image.asset)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Author imageSrc={imageSrc} 
                imageAlt={data.about.author.image.alt} 
                bio={data.about.author.bio} 
                mail={data.about.author.mail} 
                linkedin={data.about.author.linkedin} 
        />
        <History />
        <VerticalBar />
        <GabbeBot />
      </Container>
    </Layout>
  );
};

export default AboutPage;
