import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from 'reactjs-popup';
import Button from './Button';
import 'reactjs-popup/dist/index.css';


const propTypes = {
    trigger: PropTypes.element.isRequired,
    title: PropTypes.string,
    textContent: PropTypes.element,
    buttonColor: PropTypes.string
};

const defaultProps = {
  buttonColor: 'primary'
};


const Modal = ({
    className,
    trigger,
    title,
    textContent,
    buttonColor,
    ...props
}) => {

    const modalClasses = classNames(
      'modal container'
    );

    return (
        <Popup
        {...props}
        trigger={trigger}
        modal
        >
        {close => (
          <div className={modalClasses}>

            <Button className="modal-close-icon" color={buttonColor} onClick={close}>
              &times;
            </Button>

            <div className="modal-header"> 
              <p className='text-color-secondary fw-600 mb-4'>{title}</p>
            </div>

            <div className="modal-content">
              {textContent}
            </div>

            </div>
          )}
        </Popup>
    );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;