import styled from 'styled-components';

export const Container = styled.nav``;

export const MenuLinksList = styled.ul`
  font-weight: 300;
  font-size: 1.2rem;

  li {
    padding: 0.5rem 0;

    .active {
      color: #1fa1f2;
    }

    a {
      text-decoration: none;
      color: #8899a6;
      transition: color 0.2s;
      &:hover {
        color: #1fa1f2;
      }
    }
  }
`;
