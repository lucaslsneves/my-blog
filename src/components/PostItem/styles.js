import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 1px solid #38444d;
  width: 100%;
`;

export const PostItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #8899a6;
  &:hover {
    color: #1fa1f2;
  }
`;

export const PostItemTag = styled.div`
  min-height: 90px;
  min-width: 90px;
  border-radius: 50%;
  background: ${props => props.tagBackground};
  font-size: 1.3rem;
  color: #fff;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const PostItemInfos = styled.div`
  flex: 1;

  time {
    font-size: 0.9rem;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.2rem 0 0.5rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;
  }
`;
