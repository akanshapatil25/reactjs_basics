import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center py-2 border-b">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
      </label>
      <button onClick={() => onDelete(task.id)} className="text-red-500">✕</button>
    </li>
  );
}

export default TaskItem;