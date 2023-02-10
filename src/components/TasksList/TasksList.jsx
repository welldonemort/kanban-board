import React from "react";
import "./TasksList.css";

const TasksList = ({
  tasks,
  id,
  isAdd,
  inputValue,
  setInputValue,
  options,
  setSelectedOption,
  selectedOption,
}) => {
  return (
    <div id={id} className="tasks-list">
      {tasks.map((item) => (
        <div
          className="task"
          draggable
          onDragEnd={(e) => {
            console.log(e);
          }}
        >
          {item.name}
        </div>
      ))}

      {isAdd && (
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      {isAdd && options && (
        <select
          name="dropdown"
          id={`${id}-dropdown`}
          className="dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TasksList;
