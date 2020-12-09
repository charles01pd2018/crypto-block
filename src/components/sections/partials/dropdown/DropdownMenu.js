import React from 'react';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';

// elements
import DropdownItem from './DropdownItem';


const propTypes = {
  data: PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.shape({
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
    })
  }).isRequired,
  children: PropTypes.node
}

const defaultProps = {
  children: null,
}

const DropdownMenu = ({
  className,
  data,
  children
}) => {

      const dropdownMenuClasses = classNames(
        'panel-dropdown',
        className
      );

    return (
            <>
              <div className={dropdownMenuClasses}>
                {children}
                { data.map( item => (
                  <DropdownItem item={item}  />
                )
                ) }
              </div>
            </>
    )
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;