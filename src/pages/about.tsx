import * as React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC = React.memo(() => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage alt="cute dog" src="../images/dog.jpg" />
    </Layout>
  );
});

export const Head: HeadFC = () => <Seo title="About Me" />;

export default AboutPage;
