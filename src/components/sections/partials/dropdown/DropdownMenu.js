import React from 'react';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';

// elements
import DropdownItem from './DropdownItem';


const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  dropdownKey: PropTypes.string.isRequired,
  children: PropTypes.node
}

const defaultProps = {
  children: null,
}

const DropdownMenu = ({
  className,
  data,
  dropdownKey,
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
                { data.map( ( item, index ) => (
                  <DropdownItem key={`${dropdownKey}-dropdown-item-${index}`} item={item} dropdownKey={dropdownKey} />
                )
                ) }
              </div>
            </>
    )
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;