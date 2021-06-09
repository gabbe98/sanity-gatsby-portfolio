import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";

import Container from "../components/container";
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
        image {
          asset {
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
        <Author imageSrc={data.about.author.image} imageAlt={data.about.author.image.alt} bio={data.about.author.bio} />
        <History />
        <VerticalBar />
      </Container>
    </Layout>
  );
};

export default AboutPage;
