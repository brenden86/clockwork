import React, { useState, useEffect, useRef } from 'react';

import './CurrentTask.scss';

import { TimeUtils } from '../../utils/dateTimeUtils';
import Task from './Task';
import Heading from '../ui/Heading/Heading';
import IconButton from '../ui/IconButton/IconButton';

export default function CurrentTask(props) {

  const {
    currentTask,
    setCurrentTask,
    currentTaskStatus,
    setCurrentTaskStatus,
    tasks,
    setTasks,
    stopTask
  } = props;

  const [newTaskName, setNewTaskName] = useState('');

  const startButton = useRef();

  let elapsedTimer;

  // elapsed timer
  useEffect(() => {

    // while current task is being tracked (active status), update elapsed time
    if(currentTaskStatus.status === 'active') {
      // declare variables for calculating new elapsed time
      let prevElapsed = currentTask.elapsedTime;
      let taskStart = Date.now();
      let taskStop;
 
      // set the time the task was last started immediately
      setCurrentTask(prev => ({...prev, lastTaskStart: taskStart}));

      // interval that updates elapsed time every second
      elapsedTimer = setInterval(() => {
        taskStop = Date.now();
        setCurrentTask(prev => ({...prev, lastTaskStop: taskStop, elapsedTime: prevElapsed + (taskStop - taskStart)}));
      }, 1000)
    }
    
    // stop timer when task is stopped
    return () => {clearInterval(elapsedTimer)}

  }, [currentTaskStatus])


  // save new task name to state from input
  const handleChange = e => setNewTaskName(e.target.value.trim());

  // enable starting task with enter key
  function handleKeyPress(e) {
    if(!startButton.current.disabled && e.key === 'Enter') startTask(newTaskName);
  }

  // create a new task and set as current task
  function startTask(name) {
    setCurrentTask(new Task(name));
    setCurrentTaskStatus({status: 'active'});
  }
    
  const pauseTask = () => setCurrentTaskStatus({status: 'paused'});
  const resumeTask = () => setCurrentTaskStatus({status: 'active'});


  return (
    <section className='content-wrapper current-task'>

      {/* current task heading  */}
      <div className="current-task-heading">

        <Heading level={1} text="Current Task"/>

        <div className="current-task-details">
          {(currentTask != 'pending') &&
            <div className={'task-heading-detail ' + ((currentTaskStatus.status === 'paused') ? 'paused' : '')}>
              <i className="bi-stopwatch timer-icon"></i>
              {TimeUtils.formatElapsed(currentTask.elapsedTime)}
              {(currentTaskStatus.status === 'paused') &&<span>(paused)</span>}
            </div>
          }
        </div>

      </div>

      {/* PENDING task bar */}
      {(currentTask === 'pending') &&
      <div className="task-bar">

        <div className="task-name">
          <label htmlFor="task-name-input" className="sr-only">Task name</label>
          <input
            id="task-name-input"
            type='text'
            placeholder='enter task name'
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            maxLength={50}
          />
        </div>

        <div className="task-actions">

          <button className='cancel' onClick={() => setCurrentTask('')}>
            cancel
          </button>

          <button
            ref={startButton}
            disabled={(!newTaskName ? true : false)}
            onClick={() => startTask(newTaskName)}
          >start</button>

        </div>

      </div>
      }
      
      {/* ACTIVE task bar */}
      {(currentTask != 'pending') &&
        <div className="task-bar">

          <div className="task-name">
            {currentTask.name}
          </div>

          <div className={'task-actions ' + ((currentTaskStatus.status === 'paused') ? 'paused' : '')}>

            <IconButton
              type="start"
              onClick={resumeTask}
              disabled={((currentTaskStatus.status === 'paused') ? false : true)}
              ariaLabel="Start Task"
            >
              <i className='bi-triangle-fill'></i>
            </IconButton>

            <IconButton
              type="pause"
              onClick={pauseTask}
              disabled={((currentTaskStatus.status === 'paused') ? true : false)}
              ariaLabel="Pause Task"
            >
              <i className='bi-pause-fill'></i>
            </IconButton>

            <IconButton
              type="stop"
              onClick={stopTask}
              ariaLabel="Stop Task"
            >
              <i className='bi-square-fill'></i>
            </IconButton>
            
          </div>

        </div>
      }


    </section>
  )
}
