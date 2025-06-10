import React from 'react';
import TaskItem from './TaskItem';

function taskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default taskList;