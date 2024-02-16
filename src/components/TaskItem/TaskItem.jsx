import React, { useRef } from 'react';
import useToggle from '../../hooks/useToggle';
import './TaskItem.scss';
import TaskSettingsMenu from '../TaskSettingsMenu/TaskSettingsMenu';

import { TimeUtils, DateUtils } from '../../utils/dateTimeUtils';

export default function TaskItem(props) {

  const {
    task,
    switchTask,
    tasks,
    setTasks,
    removeTask
  } = props;

  const [showSettings, toggleShowSettings] = useToggle(false);
  const settingsButtonRef = useRef();

  return (
    <tr>
      <td>{task.name}</td>
      <td>{DateUtils.formatMonthDate(task.startDate)}</td>
      <td>{TimeUtils.formatElapsed(task.elapsedTime)}</td>
      <td className='task-buttons'>

        <button className="icon-button" onClick={() => switchTask(task)}>
          <i className="bi-clock-history"></i>
        </button>

        <button className="icon-button setting" onClick={() => toggleShowSettings()} ref={settingsButtonRef}>
          <i className="bi-three-dots-vertical"></i>
        </button>

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