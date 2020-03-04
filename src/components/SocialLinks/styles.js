import styled from 'styled-components';

export const Container = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #1fa1f2;
    }
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
