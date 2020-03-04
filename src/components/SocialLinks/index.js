import React from 'react';

import Icons from './icons';
import links from './content';

import * as S from './styles';

export default function SocialLinks() {
  return (
    <S.Container>
      <ul>
        {links.map(link => {
          const Icon = Icons[link.label];
          return (
            <li key={link.label}>
              <a href={link.url} target="__blank">
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </a>
            </li>
          );
        })}
      </ul>
    </S.Container>
  );
}
