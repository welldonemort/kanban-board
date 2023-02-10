import "./BoardItem.css";
import TasksList from "../TasksList/TasksList.jsx";
import AddMeBtn from "../AddMeBtn/AddMeBtn.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const BoardItem = ({ title, tasksList, count, dataMock, setTasks }) => {
  const backLogHandle = () => {
    //переменные
    const backlogList = document.querySelector("#list-1");
    const backlogColumn = document.querySelector("#column-1");
    const btnAdd = document.querySelector("#btn-1");

    const input = document.createElement("input");

    const btnSubmit = document.createElement("button");

    //после нажатия add
    btnAdd.style.display = "none";

    input.classList.add("input");
    backlogList.appendChild(input);

    btnSubmit.classList.add("submit-btn");
    btnSubmit.innerText = "Submit";
    backlogColumn.appendChild(btnSubmit);

    //после нажатия submit
    btnSubmit.addEventListener("click", () => {
      if (input.value !== "") {
        dataMock[0].issues.push({ id: "dvscfds", name: input.value });

        setTasks({ dataMock: dataMock });

        btnAdd.style.display = "flex";
        input.style.display = "none";
        btnSubmit.style.display = "none";
      } else {
        alert("Please, make sure the name of task is not blank!");
      }
    });
  };

  const othersHandle = (id) => {
    //переменные
    console.log(`${id.slice(4) - 2}`);
    const currentColumnTasks = dataMock[`${id.slice(4) - 2}`].issues;

    const currentList = document.querySelector(`#list-${id.slice(4)}`);
    const currentColumn = document.querySelector(`#column-${id.slice(4)}`);
    const btnAdd = document.querySelector(`#btn-${id.slice(4)}`);
    const dropdown = document.createElement("select");
    const btnSubmit = document.createElement("button");

    //после нажатия add
    btnAdd.style.display = "none";
    dropdown.classList.add("dropdown");
    currentList.appendChild(dropdown);
    btnSubmit.classList.add("submit-btn");
    btnSubmit.innerText = "Submit";
    currentColumn.appendChild(btnSubmit);
    //наполнение дропдауна
    currentColumnTasks.forEach((item) => {
      const option = document.createElement("option");
      option.appendChild(document.createTextNode(`${item.name}`));
      // option.value = `${item.name}`;
      dropdown.appendChild(option);
    });

    //после нажатия submit
    btnSubmit.addEventListener("click", () => {
      const opt = dropdown.options[dropdown.selectedIndex].innerHTML;
      dataMock[`${id.slice(4) - 1}`].issues.push({
        id: "dvscfds",
        name: opt,
      });

      //убираем задачу из предыдущего столбца
      for (let i = 0; i < dataMock[`${id.slice(4) - 2}`].issues.length; i++) {
        if (dataMock[`${id.slice(4) - 2}`].issues[i].name === opt) {
          dataMock[`${id.slice(4) - 2}`].issues.splice(i, 1);
          break;
        }
      }

      setTasks({ dataMock: dataMock });

      btnAdd.style.display = "flex";
      dropdown.style.display = "none";
      btnSubmit.style.display = "none";
    });
  };

  const addBtnHandler = (id) => {
    if (title === "Backlog") {
      backLogHandle();
    } else {
      othersHandle(id);
    }
  };

  return (
    <Router>
      <div className="board-item">
        <span className="board-item__title">{title}</span>

        <div
          className="scroll-holder"
          id={`column-${count}`}
          onDrop={() => addBtnHandler(`btn-${count}`)}
        >
          <TasksList
            className="tasks-list"
            tasks={tasksList}
            id={`list-${count}`}
            addBtnHandler={addBtnHandler}
            title={title}
          />

          <AddMeBtn
            addBtnHandler={addBtnHandler}
            title={title}
            id={`btn-${count}`}
            dataMock={dataMock}
          />
        </div>
      </div>
    </Router>
  );
};

export default BoardItem;
