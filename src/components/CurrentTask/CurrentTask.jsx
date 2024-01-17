import React from 'react'
import Heading from '../ui/Heading/Heading';
import StartNewTaskButton from '../ui/StartNewTaskButton/StartNewTaskButton';
import './CurrentTask.scss';

export default function CurrentTask() {

  return (
    <section className='task-container'>
      <StartNewTaskButton/>
      {/* <Heading level={1} text="Current Task"/> */}
    </section>
  )
}
