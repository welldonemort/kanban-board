import React, { useState } from "react";
import BoardItem from "../BoardItem/BoardItem.jsx";
import "./Board.css";

const Board = ({ dataMock, addBtnHandler, setTasks }) => {
  let count = 1;

  const [dropArea, setDropArea] = useState("");

  return (
    <div className="board">
      {dataMock.map((i, idx) => (
        <BoardItem
          key={`board-item-${idx}`}
          title={i.title}
          tasksList={i.issues}
          addBtnHandler={addBtnHandler}
          count={count++}
          dataMock={dataMock}
          setTasks={setTasks}
          dropArea={dropArea}
          setDropArea={setDropArea}
        />
      ))}
    </div>
  );
};

export default Board;
