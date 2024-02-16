import { useState, useRef } from 'react';
import Heading from '../ui/Heading/Heading';
import Modal from '../ui/Modal/Modal';
import TaskItem from '../TaskItem/TaskItem';
import './RecentTasksTable.scss';

export default function RecentTasksTable(props) {

  const {
    tasks,
    setTasks,
    currentTask,
    setCurrentTask,
    currentTaskStatus,
    setCurrentTaskStatus,
    stopTask
  } = props;

  const [nextTask, setNextTask] = useState();

  const switchTaskRef = useRef();

  function removeTask(task) {
    let removeTaskIndex = tasks.findIndex(item => item.id == task.id);
    setTasks(tasks => [...tasks.slice(0,removeTaskIndex), ...tasks.slice(removeTaskIndex+1, tasks.length)])
  }

  function switchTask(task, confirmed = false) {
    // if no current task OR task switch is confirmed by modal, switch
    if(!currentTask || confirmed) {
      if(currentTask && currentTask != 'pending') stopTask();
      setCurrentTask(task)
      setCurrentTaskStatus(prev => ({...prev, status: 'active'}));
      removeTask(task); // remove current task from table, will be returned when task stopped
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
              <i className="bi-calendar" role='presentation'></i>
              started
            </th>
            <th colSpan={2}>
              <i className="bi-stopwatch" role='presentation'></i>
              time elapsed
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
