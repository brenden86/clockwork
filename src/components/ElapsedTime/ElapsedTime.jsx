import React from 'react';
import './ElapsedTime.scss';

export default function ElapsedTime() {
  return (
    <div className='task-heading-detail paused'>
      <i className="bi-stopwatch"></i>
      0h 30m
      <span>(paused)</span>
    </div>
  )
}
