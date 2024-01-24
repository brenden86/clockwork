import React from 'react';
import './RecentTasksPlaceholder.scss';
import Heading from '../ui/Heading/Heading';

export default function RecentTasksPlaceholder() {
  return (
    <section className="recent-tasks-placeholder-container">
      <Heading level={1} text="Recent Tasks"/>
      <div className='recent-tasks-placeholder'>Your recent tasks appear here</div>
    </section>
  )
}
