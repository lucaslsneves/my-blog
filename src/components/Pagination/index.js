import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import * as S from './styles';

export default function Pagination({ currentPage, numPages }) {
  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('/page/2');

  useEffect(() => {
    if (currentPage === numPages) {
      setNextPage('');
    } else {
      setNextPage(`/page/${currentPage + 1}`);
    }
    if (currentPage === 2) {
      setPrevPage('/');
    } else {
      setPrevPage(`/page/${currentPage - 1}`);
    }
  }, [currentPage, numPages]);

  return (
    <S.Container>
      {prevPage !== '/page/0' && <Link to={prevPage}>Página Anterior</Link>}
      <div>
        <span>
          {currentPage} de {numPages}
        </span>
      </div>
      {nextPage !== '' && <Link to={nextPage}>Próxima página</Link>}
    </S.Container>
  );
}
