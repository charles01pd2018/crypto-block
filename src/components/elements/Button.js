import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool,
  panel: PropTypes.bool,
  target: PropTypes.string
}

const defaultProps = {
  tag: 'button',
  color: '',
  size: '',
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
  panel: false,
  target: ''
}


const Button = ({
  className,
  tag,
  color,
  size,
  loading,
  wide,
  wideMobile,
  disabled,
  panel,
  target,
  ...props
}) => {

  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    panel && 'panel-button',
    className
  );

  const Component = tag;
  return (
    <Component
      {...props}
      className={classes}
      target={target}
      disabled={disabled}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;