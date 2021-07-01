import React from 'react';
import './AddMeBtn.css';

const AddMeBtn = ({ addBtnHandler, title, id, dataMock }) => {
    const previewColumnTasksCount = id.slice(4) > 1 ? dataMock[`${id.slice(4) - 2}`].issues.length : '';

    return (
        <>
            <button
                className={`add-btn ${previewColumnTasksCount === 0 ? "add-btn-disabled" : ""}`}
                onClick={() => addBtnHandler(title, id)}
                id={id}>
                <img src="./plus.svg" alt="ic: plus-btn" className="add-btn__plus"/>
                <p className="add-btn__txt">
                    Add card
                </p>
            </button>
        </>
    )
}

export default AddMeBtn;