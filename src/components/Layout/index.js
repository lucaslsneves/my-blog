import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile';

import { Container, Content } from './styles';

const Layout = ({ children }) => (
  <>
    <Container>
      <aside>
        <Profile />
      </aside>
      <Content>{children}</Content>
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
