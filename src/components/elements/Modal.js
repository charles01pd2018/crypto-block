import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Button from './Button';


const propTypes = {
    trigger: PropTypes.element,
    textContent: PropTypes.element
};

const defaultProps = {
};


const Modal = ({
    className,
    trigger,
    textContent,
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

            <Button className="modal-close-icon" color='primary' onClick={close}>
              &times;
            </Button>

            <div className="modal-header"> 
              <p className='text-color-secondary fw-600 mb-4'>Advertising Disclosure</p>
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