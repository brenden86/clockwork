import React, {useState, useEffect, useRef} from 'react'
import './TaskSettingsMenu.scss';
import Modal from '../ui/Modal/Modal';

export default function TaskSettingsMenu(props) {

  const {
    task,
    toggleSettings,
    tasks,
    setTasks,
    removeTask,
    settingsButtonRef
  } = props;

  const [newTaskName, setNewTaskName] = useState(task.name);

  const taskSettingsRef = useRef();
  const renameTaskRef = useRef();

  useEffect(() => {

    function handleClickOutside(e) {
      if(
        !settingsButtonRef.current.contains(e.target) &&
        !taskSettingsRef.current.contains(e.target)
      ) {
        toggleSettings(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);

  }, []);

  function handleRename() {
    renameTaskRef.current.showModal();
  }

  function handleNameChange(e) {
    setNewTaskName(e.target.value);
  }
  
  function handleCancel() {
    renameTaskRef.current.close();
    toggleSettings(); // close menu when modal appears
  }

  function renameTask(newName) {
    let newTasks = tasks;
    let taskIndex = newTasks.findIndex(item => item.id === task.id);
    newTasks[taskIndex].name = newName;
    setTasks([...newTasks]);
    handleCancel(); // close modal and settings
  }

  return (
    <div className='task-settings-container' ref={taskSettingsRef}>
      
      <button onClick={handleRename}>
        <i className="bi-pencil-square"> Rename task</i>
      </button>

      <button className='cancel' onClick={() => {removeTask(task)}}>
        <i className="bi-trash"> Delete Task</i>
      </button>

      <Modal modalRef={renameTaskRef}>
        <p className="modal-text">
          Please enter a new name for <span>{task.name}</span>:
        </p>
        <input
          type="text"
          placeholder='New task name'
          onChange={handleNameChange}
          value={newTaskName}
        />
        <div className="modal-buttons">
          <button className='cancel' onClick={handleCancel}>cancel</button>
          <button
            onClick={() => renameTask(newTaskName)}
            disabled={((newTaskName.length > 0) ? false : true)} 
          >rename</button>
        </div>
      </Modal>

    </div>
  )
}
