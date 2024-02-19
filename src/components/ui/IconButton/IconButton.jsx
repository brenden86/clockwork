import React from 'react'
import './IconButton.scss';

export default function IconButton(props) {
  const { type, onClick = null, disabled, ariaLabel, buttonRef } = props;
  return (
    <button
      className={`icon-button ${type}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={ariaLabel}
      ref={buttonRef}
    >

    {props.children}

    </button>
  )
}
