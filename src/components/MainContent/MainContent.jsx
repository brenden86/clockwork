import React from 'react'
import './maincontent.scss';
import CurrentTaskContainer from '../CurrentTaskContainer/CurrentTaskContainer';
import RecentTasksContainer from '../RecentTasksContainer/RecentTasksContainer';

export default function MainContent() {
  return (
    <main className='main-content-container'>
      <CurrentTaskContainer/>
      <RecentTasksContainer/>
    </main>
  )
}
