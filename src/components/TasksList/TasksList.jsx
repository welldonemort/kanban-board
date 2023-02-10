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
  let id_num = +id.split("-")[1];
  console.log(id_num);

  return (
    <div id={id} className="tasks-list">
      {tasks.map((item, idx) => (
        <div
          key={`task-${idx}`}
          className="task"
          draggable
          onDragEnd={(e) => {
            console.log(e);
          }}
        >
          {item.name}
        </div>
      ))}

      {isAdd && id_num === 1 && (
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      {isAdd && options && id_num > 1 && (
        <select
          name="dropdown"
          id={`${id}-dropdown`}
          className="dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option, idx) => (
            <option value={option.name} key={`option-${idx}`}>
              {option.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TasksList;
