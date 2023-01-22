import { HeadFC } from "gatsby";
import * as React from "react";

const AboutPage: React.FC = React.memo(() => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
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
