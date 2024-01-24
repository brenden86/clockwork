import React from 'react';
import Heading from '../ui/Heading/Heading';
import './RecentTasksTable.scss';

export default function RecentTasksTable() {

  return (
    <section className='content-wrapper'>

      <table className='task-table'>

        <thead>
          <tr>
            <th>
              <Heading level={1} text="Recent Tasks"/>
            </th>
            <th>
              <i className="bi-calendar" role='presentation'></i>
              started
            </th>
            <th colSpan={2}>
              <i className="bi-stopwatch" role='presentation'></i>
              time elapsed
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Debugging</td>
            <td>12/31</td>
            <td>0h 31m</td>
            <td>
              <button className="icon-button">
                <i className="bi-clock-history"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Debugging</td>
            <td>12/31</td>
            <td>0h 31m</td>
            <td>
              <button className="icon-button">
                <i className="bi-clock-history"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Debugging</td>
            <td>12/31</td>
            <td>0h 31m</td>
            <td>
              <button className="icon-button">
                <i className="bi-clock-history"></i>
              </button>
            </td>
          </tr>
        </tbody>

      </table>

    </section>

  )
}
