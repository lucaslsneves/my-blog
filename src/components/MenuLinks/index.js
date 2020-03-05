import React from 'react';
import { Link } from 'gatsby';
import links from './content';

import * as S from './styles';

export default function MenuLinks() {
  return (
    <S.Container>
      <S.MenuLinksList>
        {links.map(link => (
          <li key={link.label}>
            <Link to={link.url}>{link.label}</Link>
          </li>
        ))}
      </S.MenuLinksList>
    </S.Container>
  );
}
