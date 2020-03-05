import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import * as S from './styles';

export default function Sidebar() {
  return (
    <S.Container>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.Container>
  );
}
