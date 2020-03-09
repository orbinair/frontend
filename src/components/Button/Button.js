import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ children, className, type = 'button', ...rest }) => (
  <button
    type={type}
    className={className}
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button'])
}

export default Button
