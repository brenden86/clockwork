import React, { useState, useEffect, useRef } from 'react';
import Task from './Task';
import { TimeUtils } from '../../utils/dateTimeUtils';
import './CurrentTask.scss';
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
    if(currentTaskStatus.status === 'active') {
      let prevElapsed = currentTask.elapsedTime;
      let taskStart = Date.now();
      let taskStop;
 
      setCurrentTask(prev => ({...prev, lastTaskStart: taskStart}));

      elapsedTimer = setInterval(() => {
        taskStop = Date.now()
        setCurrentTask(prev => ({...prev, lastTaskStop: taskStop, elapsedTime: prevElapsed + (taskStop - taskStart)}))
      }, 1000)
    }
    
    // stop timer when task is stopped
    return () => {clearInterval(elapsedTimer)}
  }, [currentTaskStatus])


  
  const handleChange = e => setNewTaskName(e.target.value.trim());

  // enable starting task with enter key
  function handleKeyPress(e) {
    if(!startButton.current.disabled && e.key === 'Enter') startTask(newTaskName);
  }

  function startTask(name) {
    setCurrentTask(new Task(name));
    setCurrentTaskStatus({status: 'active'});
  }
    
  const pauseTask = () => setCurrentTaskStatus({status: 'paused'});
  const resumeTask = () => setCurrentTaskStatus({status: 'active'});


  return (
    <section className='content-wrapper current-task'>

      <div className="current-task-heading">
        <Heading level={1} text="Current Task"/>
        <div className="current-task-details">
          {(currentTask != 'pending') &&
            <div className={'task-heading-detail ' + ((currentTaskStatus.status === 'paused') ? 'paused' : '')}>
              <i className="bi-stopwatch"></i>
              {TimeUtils.formatElapsed(currentTask.elapsedTime)}
              {(currentTaskStatus.status === 'paused') &&<span>(paused)</span>}
            </div>
          }
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
            ref={startButton}
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

          <div className={'task-actions ' + ((currentTaskStatus.status === 'paused') ? 'paused' : '')}>
            <IconButton type="start" onClick={resumeTask} disabled={((currentTaskStatus.status === 'paused') ? false : true)}/>
            <IconButton type="pause" onClick={pauseTask} disabled={((currentTaskStatus.status === 'paused') ? true : false)}/>
            <IconButton type="stop" onClick={stopTask}/>
          </div>

        </div>
      }



    </section>
  )
}
