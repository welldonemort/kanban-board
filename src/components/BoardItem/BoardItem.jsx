import "./BoardItem.css";
import TasksList from "../TasksList/TasksList.jsx";
import AddMeBtn from "../AddMeBtn/AddMeBtn.jsx";
import { useEffect, useState } from "react";

const BoardItem = ({
  title,
  tasksList,
  count,
  dataMock,
  setTasks,
  dropArea,
  setDropArea,
}) => {
  const [isAdd, setIsAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const backLogHandle = () => {
    setIsAdd(true);
  };

  const othersHandle = (id) => {
    let options_previous = dataMock[`${id.slice(4) - 2}`]?.issues;
    let options_next = dataMock[`${id.slice(4)}`]?.issues;

    let result = [];

    if (options_next) {
      setOptions([...options_previous, ...options_next]);
      result = [...options_previous, ...options_next];
    } else {
      setOptions([...options_previous]);
      result = [...options_previous];
    }

    if (result.length) {
      setSelectedOption(result[0].name);
      setIsAdd(true);
    }
  };

  const addBtnHandler = (id) => {
    if (title === "Backlog") {
      backLogHandle();
    } else {
      othersHandle(id);
    }
  };

  const submitBtnHandler = (id) => {
    if (title === "Backlog") {
      submitBacklog();
    } else {
      submitOthers(id);
    }
  };

  const submitBacklog = () => {
    if (inputValue !== "") {
      dataMock[0].issues.push({ id: "task", name: inputValue });
      setTasks({ dataMock: dataMock });
      setIsAdd(false);
    } else {
      alert("Please, make sure the name of task is not blank!");
    }
  };

  const submitOthers = (id_argument) => {
    // ID for adding task from a dropdown
    let id = id_argument;
    // ID for adding task by drag-and-drop
    if (!id_argument) id = dropArea;

    // Add task to drop area OR from a dropdown
    dataMock[`${id.slice(5) - 1}`].issues.push({
      id: "task",
      name: selectedOption || "No description",
    });

    // Delete task from other columns
    // Tasks with the same title will be deleted
    for (let i = 0; i < 4; i++) {
      let issues_tmp = dataMock[i]?.issues;

      if (issues_tmp && i !== id.slice(5) - 1) {
        issues_tmp.forEach((issue, i) => {
          if (issue.name === selectedOption) {
            issues_tmp.splice(i, 1);
          }
        });
      }
    }

    // Update global tasks array
    setTasks({ dataMock: dataMock });
    setIsAdd(false);
  };

  const handleDragStart = (e) => {
    setSelectedOption(e.target.innerText);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDropArea(e.target.id);
  };

  return (
    <div
      id={`list-${count}`}
      className={`board-item`}
      onDragOver={handleDragOver}
      onDragEnd={() => {
        submitOthers(dropArea);
      }}
      onDragStart={handleDragStart}
    >
      <span className="board-item__title">{title}</span>

      <div className="scroll-holder">
        <TasksList
          className="tasks-list"
          tasks={tasksList}
          id={`list-${count}`}
          addBtnHandler={addBtnHandler}
          title={title}
          isAdd={isAdd}
          inputValue={inputValue}
          setInputValue={setInputValue}
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setTasks={setTasks}
          dataMock={dataMock}
        />

        {!isAdd && (
          <AddMeBtn
            addBtnHandler={addBtnHandler}
            title={title}
            id={`btn-${count}`}
            dataMock={dataMock}
          />
        )}

        {isAdd && (
          <button
            className="submit-btn"
            onClick={() => submitBtnHandler(`list-${count}`)}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default BoardItem;
