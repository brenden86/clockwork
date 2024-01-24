import React from 'react'
import './CurrentTask.scss';
import Heading from '../ui/Heading/Heading';
import ElapsedTime from '../ElapsedTime/ElapsedTime';
import IconButton from '../ui/IconButton/IconButton';

export default function CurrentTask() {

  return (
    <section className='content-wrapper current-task'>

      <div className="current-task-heading">
        <Heading level={1} text="Current Task"/>
        <div className="current-task-details">
          <ElapsedTime/>
        </div>
      </div>

      <div className="task-bar">

        <div className="task-name">
          Debugging
          {/* <input type='text' placeholder='enter task name'></input> */}
        </div>

        <div className="task-actions">
          <IconButton type="start"/>
          <IconButton type="pause"/>
          <IconButton type="stop"/>
          {/* <button>start</button> */}
        </div>

      </div>

    </section>
  )
}
