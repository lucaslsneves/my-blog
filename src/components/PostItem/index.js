import React from 'react';

import * as S from './styles';

export default function PostItem({ tagBackground }) {
  return (
    <S.PostItemLink to="/slug">
      <S.Container>
        <S.PostItemTag tagBackground={tagBackground}>JS</S.PostItemTag>
        <S.PostItemInfos>
          <time>25 de dezembro</time>
          <h1>NodeJS Application</h1>
          <p>API REST criada em NodeJS e express</p>
        </S.PostItemInfos>
      </S.Container>
    </S.PostItemLink>
  );
}
