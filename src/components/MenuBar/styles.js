import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.nav`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 3.75rem;
  background-color: #192734;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-left: 1px solid #38444d;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
`;
