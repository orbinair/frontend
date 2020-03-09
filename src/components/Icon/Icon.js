import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ path, className, size = '24', color = 'currentColor' }) => {
  return (
    <svg
      className={className}
      display="block"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d={path} />
    </svg>
  )
}
Icon.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Icon;
