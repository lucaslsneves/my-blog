import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      date="25 de fevereiro de 2020"
      timeToRead="25"
      title="API REST em NodeJS"
      category="NodeJS"
      description="Aprenda a criar uma API REST em NodeJS utilizando express"
      tagBackground="blue"
    />
  </Layout>
);

export default IndexPage;
