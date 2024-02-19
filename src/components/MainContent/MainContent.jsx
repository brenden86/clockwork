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

  useEffect(() => {

    // if there is a current task, start it on paused status
    if(currentTaskStatus.status === 'active') {
      setCurrentTaskStatus({status: 'paused'});
    }

  }, [])

  function stopTask() {
    // move current task back to tasks array
    setTasks([...tasks, currentTask]);
    // stop timer and clear current task
    setCurrentTaskStatus(prev => ({...prev, status: 'stopped'}));
    setCurrentTask('');
  }

  return (
    <main className='main-content-container'>

      <div className="current-task-container">

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
      
      </div>

      {tasks.length > 0 &&<RecentTasksTable
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        setCurrentTaskStatus={setCurrentTaskStatus}
        stopTask={stopTask}
      />}

      {tasks.length < 1 &&<RecentTasksPlaceholder/>}

    </main>
  )
}