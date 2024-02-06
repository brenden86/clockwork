import React from 'react';
import './ElapsedTime.scss';

export default function ElapsedTime(props) {
  const { isPaused } = props;
  return (
    <div className={'task-heading-detail ' + (isPaused ? 'paused' : '')}>
      <i className="bi-stopwatch"></i>
      0h 30m
      {isPaused &&<span>(paused)</span>}
    </div>
  )
}
