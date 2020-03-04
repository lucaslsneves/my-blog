import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';
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
    <S.ProfileContainer>
      <S.ProfileLink to="/">
        <Avatar />
        <h1>{title}</h1>
        <h2>{position}</h2>
      </S.ProfileLink>
      <p>{description}</p>
    </S.ProfileContainer>
  );
}
