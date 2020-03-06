import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                category
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY ")
                description
                tagBackground
                title
              }
              timeToRead
              wordCount {
                words
              }
            }
          }
        }
      }
    `
  );

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { date, category, description, tagBackground, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            date={date}
            timeToRead={timeToRead}
            title={title}
            category={category}
            description={description}
            tagBackground={tagBackground || null}
          />
        )
      )}
    </Layout>
  );
}
