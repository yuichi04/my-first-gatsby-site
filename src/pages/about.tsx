import * as React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/layout";

const AboutPage: React.FC = React.memo(() => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
});

export const Head: HeadFC = () => {
  return (
    <>
      <title>About Me</title>
      <meta name="description" content="This is About Me" />
    </>
  );
};

export default AboutPage;
