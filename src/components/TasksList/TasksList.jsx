import React from "react";
import "./TasksList.css";

const TasksList = ({ tasks, id, addBtnHandler, title }) => {
  return (
    <div className="tasks-list" id={id}>
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
    </div>
  );
};

export default TasksList;
