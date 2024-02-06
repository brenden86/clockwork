import React, { useState, useRef } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';

import './MainContent.scss';
import CurrentTask from '../CurrentTask/CurrentTask';
import RecentTasksTable from '../RecentTasksTable/RecentTasksTable';
import RecentTasksPlaceholder from '../RecentTasksPlaceholder/RecentTasksPlaceholder';
import StartNewTaskButton from '../ui/StartNewTaskButton/StartNewTaskButton';

export default function MainContent() {

  const [currentTask, setCurrentTask] = useLocalStorage('current_task');
  const [taskPaused, setTaskPaused] = useLocalStorage('task_paused', false);
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  return (
    <main className='main-content-container'>

      {currentTask &&<CurrentTask
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        tasks={tasks}
        setTasks={setTasks}
        isPaused={taskPaused}
        pauseTask={() => setTaskPaused(true)}
        unpauseTask={() => setTaskPaused(false)}
        
      />}

      {!currentTask &&<StartNewTaskButton onClick={() => setCurrentTask('pending')}/>}

      {tasks.length < 1 &&<RecentTasksPlaceholder/>}

      {tasks.length > 0 &&<RecentTasksTable
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />}


    </main>
  )
}
