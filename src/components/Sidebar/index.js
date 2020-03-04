import React from 'react';

import * as S from './styles';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

export default function Sidebar() {
  return (
    <S.Container>
      <Profile />
      <SocialLinks />
    </S.Container>
  );
}
