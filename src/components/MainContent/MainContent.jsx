import React from 'react'
import './MainContent.scss';
import CurrentTask from '../CurrentTask/CurrentTask';
import RecentTasksTable from '../RecentTasksTable/RecentTasksTable';
import RecentTasksPlaceholder from '../RecentTasksPlaceholder/RecentTasksPlaceholder';
import StartNewTaskButton from '../ui/StartNewTaskButton/StartNewTaskButton';
import Modal from '../ui/Modal/Modal';

export default function MainContent() {
  return (
    <main className='main-content-container'>
      <CurrentTask/>
      <StartNewTaskButton/>
      <RecentTasksPlaceholder/>
      <RecentTasksTable/>

      <Modal open={false}>
        <p className="modal-text">
          Stop current task and switch to previous task <span>Debugging</span>?
        </p>
        <div className="modal-buttons">
          <button className='cancel'>one</button>
          <button>two</button>
        </div>
      </Modal>
    </main>
  )
}
