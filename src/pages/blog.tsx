import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage: React.FC<{ data: any }> = ({ data }): any => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogIndex {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;
