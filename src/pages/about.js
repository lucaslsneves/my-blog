import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <>
    <Layout>
    <h1>AboutPage</h1>
    <ul>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{color: 'red'}}>About</Link>
      </li>
    </ul>
    </Layout>
    </>
  );
}
