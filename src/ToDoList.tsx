import React, { useState } from "react";

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([
    "Breakfast",
    "shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveDown = (index: number) => {
    if (index < tasks.length -1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        setTasks(updatedTasks);
      }
  };

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={() => addTask()}>
          Add a task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveUp(index)}>
              up
            </button>
            <button className="move-button" onClick={() => moveDown(index)}>
              down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
