import React, { useEffect, useState } from "react";
import "./TasksList.css";
import Modal from "../Modal/Modal";

const TasksList = ({
  tasks,
  id,
  isAdd,
  inputValue,
  setInputValue,
  options,
  setSelectedOption,
  selectedOption,
  setTasks,
  dataMock,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTask, setModalTask] = useState(null);

  let id_num = +id.split("-")[1];

  const deleteTask = (idx) => {
    tasks.splice(idx, 1);
    setTasks({ dataMock: dataMock });
  };

  const openModal = (task) => {
    setModalTask(task);
    setIsOpen(true);
  };

  return (
    <div id={id} className="tasks-list">
      {isOpen && <Modal setIsOpen={setIsOpen} title={modalTask?.name} />}

      {tasks.map((item, idx) => (
        <div
          key={`task-${idx}`}
          className="task"
          draggable
          onClick={() => openModal(item)}
        >
          {item.name}

          <img
            src="/delete.svg"
            alt="delete-ic"
            className="task__delete"
            onClick={() => deleteTask(idx)}
          />
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
