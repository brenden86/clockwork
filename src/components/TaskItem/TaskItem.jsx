import React from 'react';
import './TaskItem.scss';
import { TimeUtils, DateUtils } from '../../utils/dateTimeUtils';

export default function TaskItem({ task, switchTask }) {

  return (
    <tr>
      <td>{task.name}</td>
      <td>{DateUtils.formatMonthDate(task.startDate)}</td>
      <td>{TimeUtils.formatElapsed(task.elapsedTime)}</td>
      <td>
        <button className="icon-button" onClick={() => switchTask(task)}>
          <i className="bi-clock-history"></i>
        </button>
      </td>
    </tr>
  )
}
