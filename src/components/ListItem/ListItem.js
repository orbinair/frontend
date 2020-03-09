import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ListItem = ({
  children,
  control,
  className
}) => (
  <div
    className={className}
  >
    {children}
    <div>
      {control}
    </div>
  </div>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  control: PropTypes.node,
  className: PropTypes.string,
}

export default ListItem
