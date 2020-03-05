import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #8899a6;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    color: #1fa1f2;
  }

  h1 {
    font-size: 1.6rem;
    margin: 0.5rem 0;
  }
  h2 {
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
  }

  p {
    font-size: 1rem;
    text-align: center;
    line-height: 1.4;
    font-weight: 300;
  }
`;
