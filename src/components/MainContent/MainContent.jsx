import React, { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

import './MainContent.scss';
import CurrentTask from '../CurrentTask/CurrentTask';
import RecentTasksTable from '../RecentTasksTable/RecentTasksTable';
import RecentTasksPlaceholder from '../RecentTasksPlaceholder/RecentTasksPlaceholder';
import StartNewTaskButton from '../ui/StartNewTaskButton/StartNewTaskButton';

export default function MainContent() {

  const [currentTask, setCurrentTask] = useLocalStorage('current_task');
  const [currentTaskStatus, setCurrentTaskStatus] = useLocalStorage('task_status', { status: 'stopped'}); // stopped, active, or paused
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  


  function stopTask() {
    setTasks([...tasks, currentTask]);
    setCurrentTaskStatus(prev => ({...prev, status: 'stopped'}));
    setCurrentTask('');
  }

  return (
    <main className='main-content-container'>

      {currentTask &&<CurrentTask
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentTaskStatus={currentTaskStatus}
        setCurrentTaskStatus={setCurrentTaskStatus}
        tasks={tasks}
        setTasks={setTasks}
        stopTask={stopTask}
      />}

      {!currentTask &&<StartNewTaskButton onClick={() => setCurrentTask('pending')}/>}

      {tasks.length > 0 &&<RecentTasksTable
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentTaskStatus={currentTaskStatus}
        setCurrentTaskStatus={setCurrentTaskStatus}
        stopTask={stopTask}
      />}

      {tasks.length < 1 &&<RecentTasksPlaceholder/>}

    </main>
  )
}
