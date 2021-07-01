import React from 'react';
import './TasksList.css';

const TasksList = ({ tasks, id }) => {
    return (
            <div className="tasks-list" id={id}>
                {tasks.map((item) => <div className="task">{item.name}</div>)}
            </div>
        )
}

export default TasksList;