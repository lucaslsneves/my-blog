import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function PostItem({
  slug,
  category,
  date,
  description,
  title,
  timeToRead,
  tagBackground,
}) {
  return (
    <S.PostItemLink to={slug}>
      <S.Container>
        <S.PostItemTag tagBackground={tagBackground}>{category}</S.PostItemTag>
        <S.PostItemInfos>
          <time>
            {date} . {timeToRead} min de leitura
          </time>
          <h1>{title}</h1>
          <p>{description}</p>
        </S.PostItemInfos>
      </S.Container>
    </S.PostItemLink>
  );
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tagBackground: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
