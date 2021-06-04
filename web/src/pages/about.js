import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import { responsiveTitle1 } from "../components/typography.module.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1 className={responsiveTitle1}>About</h1>
      </Container>
    </Layout>
  );
};

export default AboutPage;
