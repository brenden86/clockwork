import React from 'react'
import './IconButton.scss';

export default function IconButton(props) {
  const { type, onClick = null, disabled, ariaLabel } = props;
  return (
    <button
      className={`icon-button ${type}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >

    {type === 'start' &&<i className='bi-triangle-fill'></i>}
    {type === 'pause' &&<i className='bi-pause-fill'></i>}
    {type === 'stop' &&<i className='bi-square-fill'></i>}

    </button>
  )
}
