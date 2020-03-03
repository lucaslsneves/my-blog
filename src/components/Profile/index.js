import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from './styles';

import Avatar from '../Avatar';

export default function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `);
  return (
    <Container>
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </Container>
  );
}
