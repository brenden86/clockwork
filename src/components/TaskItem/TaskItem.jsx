import React from 'react';
import './TaskItem.scss';

export default function TaskItem() {
  return (
    <div className="task-item">

      <span className="task-name">Task 1</span>

      <div className="task-details right-content-wrapper">

        <span className="start-date">Jan 10</span>
        <span className="time-elapsed">0h 03m</span>
        <button className="icon-button" onClick={() => alert('hi')}>
          <i className="bi-clock-history"></i>
        </button>
        
      </div>
      
    </div>
  )
}
