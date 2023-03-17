import "./BoardItem.css";
import TasksList from "../TasksList/TasksList.jsx";
import AddMeBtn from "../AddMeBtn/AddMeBtn.jsx";
import { useState } from "react";

const BoardItem = ({ title, tasksList, count, dataMock, setTasks }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const backLogHandle = () => {
    setIsAdd(true);
  };

  const othersHandle = (id) => {
    setIsAdd(true);

    let options = dataMock[`${id.slice(4) - 2}`].issues;

    setOptions([...options]);
    setSelectedOption(options[0].name);
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

  const submitOthers = (id) => {
    if (!selectedOption) return;

    dataMock[`${id.slice(5) - 1}`].issues.push({
      id: "task",
      name: selectedOption,
    });

    let issues = dataMock[`${id.slice(5) - 2}`].issues;

    issues.forEach((issue, i) => {
      if (issue.name === selectedOption) {
        issues.splice(i, 1);
      }
    });

    setTasks({ dataMock: dataMock });
    setIsAdd(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.className === "board-item") {
      // e.target.classList.toggle("red");
    }
  };

  const handleDrop = (e) => {
    console.log(e);
    submitOthers(e.target.id);
  };

  const handleDragStart = (e) => {
    setSelectedOption(e.target.innerText);
  };

  return (
    <div
      id={`list-${count}`}
      className="board-item"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={(e) => {
        setSelectedOption(e.target.innerText);
        submitOthers(`list-${count + 1}`);
      }}
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
