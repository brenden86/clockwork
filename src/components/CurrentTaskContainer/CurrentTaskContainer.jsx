import React from 'react'
import Heading from '../ui/Heading/Heading';
import StartNewTaskButton from '../ui/StartNewTaskButton/StartNewTaskButton';

export default function CurrentTaskContainer() {

  return (
    <div className='current-task-container'>
      <StartNewTaskButton/>
      <Heading level={1} text="Current Task"/>
    </div>
  )
}
