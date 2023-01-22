import { HeadFC } from "gatsby";
import * as React from "react";

const IndexPage: React.FC = React.memo(() => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
});

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
