import React, { useState } from 'react';
import Task from '../../Task';
import './CurrentTask.scss';
import Heading from '../ui/Heading/Heading';
import ElapsedTime from '../ElapsedTime/ElapsedTime';
import IconButton from '../ui/IconButton/IconButton';

export default function CurrentTask(props) {

  const {
    pauseTask,
    unpauseTask,
    isPaused,
    currentTask,
    setCurrentTask,
    tasks,
    setTasks
  } = props;

  const [newTaskName, setNewTaskName] = useState('');
  
  function handleChange(e) {
    setNewTaskName(e.target.value);
  }

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      startTask(newTaskName)
    }
  }

  function startTask(name) {
    let newTask = new Task(name)
    setCurrentTask(newTask);
  }

  function stopTask() {
    // move current task to tasks table
    setTasks([...tasks, currentTask]);
    setCurrentTask('');
    unpauseTask();
  }

  return (
    <section className='content-wrapper current-task'>

      <div className="current-task-heading">
        <Heading level={1} text="Current Task"/>
        <div className="current-task-details">
          <ElapsedTime isPaused={isPaused}/>
        </div>
      </div>

      {(currentTask === 'pending') &&
      <div className="task-bar">

        <div className="task-name">
          <input
            type='text'
            placeholder='enter task name'
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            maxLength={50}
          ></input>
        </div>

        <div className="task-actions">

          <button className='cancel' onClick={() => setCurrentTask('')}>
            cancel
          </button>

          <button
            disabled={(!newTaskName ? true : false)}
            onClick={() => startTask(newTaskName)}
          >start</button>
        </div>

      </div>
      }
        
      {(currentTask != 'pending') &&
        <div className="task-bar">

          <div className="task-name">
            {currentTask.name}
          </div>

          <div className={'task-actions ' + (isPaused ? 'paused' : '')}>
            <IconButton type="start" onClick={unpauseTask} disabled={(isPaused ? false : true)}/>
            <IconButton type="pause" onClick={pauseTask} disabled={(isPaused ? true : false)}/>
            <IconButton type="stop" onClick={stopTask}/>
          </div>

        </div>
      }



    </section>
  )
}
