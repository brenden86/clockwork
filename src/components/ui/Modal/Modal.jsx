import React from 'react';
import './Modal.scss';

export default function Modal(props) {

  const { modalRef } = props;

  return (
    <dialog className='modal' ref={modalRef}>
      <div className="modal-content">
        <div className="modal-icon">
          <i className="bi-exclamation-circle"></i>
        </div>
        {props.children}
      </div>
    </dialog>
  )
}
