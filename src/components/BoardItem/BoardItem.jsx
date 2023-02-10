import React from "react";
import "./BoardItem.css";
import TasksList from "../TasksList/TasksList.jsx";
import AddMeBtn from "../AddMeBtn/AddMeBtn.jsx";
import { BrowserRouter as Router } from "react-router-dom";

class BoardItem extends React.Component {
  render() {
    const { title, tasksList, addBtnHandler, count, dataMock } = this.props;

    return (
      <Router>
        <div className="board-item">
          <span className="board-item__title">{title}</span>

          <div
            className="scroll-holder"
            id={`column-${count}`}
            onDrop={() => addBtnHandler(title, `btn-${count}`)}
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
  }
}

export default BoardItem;
