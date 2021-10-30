import React from 'react';
import PropTypes from 'prop-types';

import { WrapperError404 } from './styles';

export function Error404({ message }) {
  return (
    <WrapperError404>
      <div>
        <h1>{message}</h1>
      </div>
    </WrapperError404>
  );
}

Error404.propTypes = {
  message: PropTypes.string,
};

Error404.defaultProps = {
  message: 'PAGE NOT FOUND',
};
