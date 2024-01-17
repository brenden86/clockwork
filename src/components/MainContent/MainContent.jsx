import React from 'react'
import './MainContent.scss';
import CurrentTask from '../CurrentTask/CurrentTask';
import RecentTasksTable from '../RecentTasksTable/RecentTasksTable';

export default function MainContent() {
  return (
    <main className='main-content-container'>
      <CurrentTask/>
      <RecentTasksTable/>
    </main>
  )
}
