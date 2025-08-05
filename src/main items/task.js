import React, { useState } from 'react';

const TaskItem = ({ id, title, status, onDelete, onUpdateStatus }) => {
  const getStatusColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'in progress':
        return '#f97316';
      case 'completed':
        return '#22c55e';
      case 'on hold':
        return '#ef4444';
      default:
        return '#9ca3af';
    }
  };

  const getStatusBgColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'in progress':
        return '#fff7ed';
      case 'completed':
        return '#dcfce7';
      case 'on hold':
        return '#fee2e2';
      default:
        return '#f3f4f6';
    }
  };

  return (
    <div className="task-item">
      <div className="task-details">
        <h3 className="task-title">{title}</h3>
      </div>
      <div className="task-status-container">
        <select
          className="status-select"
          value={status}
          onChange={(e) => onUpdateStatus(id, e.target.value)}
          style={{
            backgroundColor: getStatusBgColor(status),
            color: getStatusColor(status)
          }}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
        </select>
        <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

const TaskTracker = () => {
  const initialTasks = [
    { id: 1, title: "Finish project proposal", status: "In Progress" },
    { id: 2, title: "Review code base", status: "Completed" },
    { id: 3, title: "Prepare for client meeting", status: "On Hold" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle) {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        status: 'In Progress',
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleUpdateStatus = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="task-list-container">
      <div className="list-header">
        <h2 className="list-title">My Tasks</h2>
      </div>

      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            onDelete={handleDeleteTask}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskTracker;
