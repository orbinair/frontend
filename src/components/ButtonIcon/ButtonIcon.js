import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/Button';

const ButtonIcon = ({
  children,
  className,
  ...rest
}) => (
  <Button
    className={className}
    {...rest}
  >
    {children}
  </Button>
)

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default ButtonIcon
