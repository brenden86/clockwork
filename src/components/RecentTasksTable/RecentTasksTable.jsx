import { useState, useRef } from 'react';
import Heading from '../ui/Heading/Heading';
import Modal from '../ui/Modal/Modal';
import './RecentTasksTable.scss';

export default function RecentTasksTable(props) {

  const { tasks, setTasks, currentTask, setCurrentTask } = props;
  const [nextTask, setNextTask] = useState();
  const switchTaskRef = useRef();

  function switchTask(task, confirmed = false) {
    // if no current task OR confirmed by modal, switch task
    if(!currentTask || confirmed) {
      let oldTask = currentTask;
      setCurrentTask(tasks.find(item => item.id == task.id))
      let removeTaskIndex = tasks.findIndex(item => item.id == task.id);
      if(oldTask) {
        setTasks([oldTask, ...tasks.slice(0,removeTaskIndex), ...tasks.slice(removeTaskIndex+1, tasks.length)]);
      } else {
        setTasks([...tasks.slice(0,removeTaskIndex), ...tasks.slice(removeTaskIndex+1, tasks.length)]);
      }
    } else {
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
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>12/31</td>
              <td>0h 31m</td>
              <td>
                <button className="icon-button" onClick={() => switchTask(task)}>
                  <i className="bi-clock-history"></i>
                </button>
              </td>
            </tr>
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
