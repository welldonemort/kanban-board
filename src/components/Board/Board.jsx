import React from 'react';
import BoardItem from '../BoardItem/BoardItem.jsx';
import './Board.css';

const Board = ({ dataMock, addBtnHandler }) => {    
    let count = 1;
        
    return (
        <div className="board">
            {dataMock.map((i) => (
                <BoardItem
                    title={i.title}
                    tasksList={i.issues}
                    addBtnHandler={addBtnHandler}
                    count={count++}
                    dataMock={dataMock}
                />
            ))}
        </div>
    )
}

export default Board;