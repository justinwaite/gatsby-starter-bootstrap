import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import '../styles/main.scss';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Bootstrap Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div style={{ paddingTop: 16 }}>{children()}</div>
  </div>
);

TemplateWrapper.defaultProps = {
  children: undefined,
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
