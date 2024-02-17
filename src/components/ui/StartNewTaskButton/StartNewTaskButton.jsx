import React from 'react';
import './StartNewTaskButton.scss';

export default function StartNewTaskButton(props) {

  const { onClick } = props

  return (
    <button className='start-new-task-button' onClick={onClick}>
      <i className="bi-plus-circle"> START NEW TASK</i>
    </button>
  )
}
