import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const propTypes = {
    trigger: PropTypes.element
}

const defaultProps = {
}


const Modal = ({
    className,
    trigger,
    ...props
}) => {

     

    return (
        <Popup
    trigger={trigger}
    modal
  >
    {close => (
      <div className="modal">

        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Modal Title </div>
            <div className="content">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            </div>

        
      </div>
    )}
  </Popup>
    );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;