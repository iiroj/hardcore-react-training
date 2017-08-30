import React from 'react';
import reset from 'css-wipe/js';
import { injectGlobal } from 'styled-components';

import App from './components/App';

injectGlobal`
  ${reset}
`;

const Root = () => {
  return <App />;
};

export default Root;
