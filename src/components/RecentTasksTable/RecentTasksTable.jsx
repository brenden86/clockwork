import { useState, useRef } from 'react';

import './RecentTasksTable.scss';

import Heading from '../ui/Heading/Heading';
import Modal from '../ui/Modal/Modal';
import TaskItem from '../TaskItem/TaskItem';

export default function RecentTasksTable(props) {

  const {
    tasks,
    setTasks,
    currentTask,
    setCurrentTask,
    setCurrentTaskStatus,
    stopTask
  } = props;

  const [nextTask, setNextTask] = useState();

  const switchTaskRef = useRef();

  function removeTask(task) {
    // remove task from tasks array
    let removeTaskIndex = tasks.findIndex(item => item.id == task.id);
    setTasks(tasks => [...tasks.slice(0,removeTaskIndex), ...tasks.slice(removeTaskIndex+1, tasks.length)])
  }

  function switchTask(task, confirmed = false) {
    // if no current task OR task switch is confirmed by modal, switch
    if(!currentTask || confirmed) {
      // stop current task first if exists
      if(currentTask && currentTask != 'pending') stopTask();
      setCurrentTask(task)
      setCurrentTaskStatus(prev => ({...prev, status: 'active'}));
      removeTask(task); // remove new current task from table, will be returned to table when task stopped
    } else {
      // if a current task is running, confirm switch with modal
      setNextTask(task);
      switchTaskRef.current.showModal();
    }
  }

  function modalSwitchTask() {
    switchTask(nextTask, true);
    switchTaskRef.current.close();
  }

  return (
    <section className='content-wrapper'>

      <table className='task-table'>

        <thead>
          <tr>
            <th>
              <Heading level={1} text="Recent Tasks"/>
            </th>
            <th>
              <i className="bi-calendar"> started</i>
            </th>
            <th colSpan={2}>
              <i className="bi-stopwatch"> time elapsed</i>
            </th>
          </tr>
        </thead>

        <tbody>

          {tasks.map(task => 
            <TaskItem
              key={task.id}
              task={task}
              switchTask={switchTask}
              tasks={tasks}
              setTasks={setTasks}
              removeTask={removeTask}
            />
          )}

        </tbody>

      </table>

      <Modal modalRef={switchTaskRef}>
        <p className="modal-text">
          Stop current task and switch to previous task <span>{nextTask?.name}</span>?
        </p>
        <div className="modal-buttons">
          <button className='cancel' onClick={()=> switchTaskRef.current.close()}>cancel</button>
          <button onClick={modalSwitchTask}>switch task</button>
        </div>
      </Modal>

    </section>

  )
}
