import React, { useRef } from 'react';
import useToggle from '../../hooks/useToggle';
import './TaskItem.scss';

import TaskSettingsMenu from '../TaskSettingsMenu/TaskSettingsMenu';
import IconButton from '../ui/IconButton/IconButton';

import { TimeUtils, DateUtils } from '../../utils/dateTimeUtils';

export default function TaskItem(props) {

  const {
    task,
    switchTask,
    tasks,
    setTasks,
    removeTask
  } = props;

  // toggle whether task settings menu is visible
  const [showSettings, toggleShowSettings] = useToggle(false);

  const settingsButtonRef = useRef();

  return (
    <tr>
      <td>{task.name}</td>
      <td>{DateUtils.formatMonthDate(task.startDate)}</td>
      <td>{TimeUtils.formatElapsed(task.elapsedTime)}</td>
      <td className='task-buttons'>

        <IconButton onClick={() => switchTask(task)} aria-label="Switch Task">
          <i className="bi-clock-history"></i>
        </IconButton>

        <IconButton type="setting" onClick={() => toggleShowSettings()} buttonRef={settingsButtonRef} aria-label="Task Settings">
          <i className="bi-three-dots-vertical"></i>
        </IconButton>

        {showSettings &&
          <TaskSettingsMenu
            task={task}
            toggleSettings={toggleShowSettings}
            tasks={tasks}
            setTasks={setTasks}
            removeTask={removeTask}
            settingsButtonRef={settingsButtonRef}
          />
        }

      </td>
    </tr>
  )

} 