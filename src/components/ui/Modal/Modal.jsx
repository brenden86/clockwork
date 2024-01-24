import React from 'react';
import './Modal.scss';

export default function Modal(props) {

  const { open } = props;

  return (
    <dialog className='modal' open={open}>
      <div className="modal-content">
        <div className="modal-icon">
          <i className="bi-exclamation-circle"></i>
        </div>
        {props.children}
      </div>
    </dialog>
  )
}
