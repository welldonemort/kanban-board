import React from "react";
import "./TasksList.css";

const TasksList = ({ tasks, id }) => {
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
    </div>
  );
};

export default TasksList;
