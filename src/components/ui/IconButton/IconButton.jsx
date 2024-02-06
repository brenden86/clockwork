import React from 'react'
import './IconButton.scss';

export default function IconButton(props) {
  const { type, onClick = null, disabled } = props;
  return (
    <button
      className={`icon-button ${type}`}
      onClick={onClick}
      disabled={disabled}

    >

    {type === 'start' &&<i className='bi-triangle-fill'></i>}
    {type === 'pause' &&<i className='bi-pause-fill'></i>}
    {type === 'stop' &&<i className='bi-square-fill'></i>}

    </button>
  )
}
