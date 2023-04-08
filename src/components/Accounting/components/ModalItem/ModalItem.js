import "./ModalItem.css";
import closePath from "../../../../assets/icons/close.svg";
import { useState } from "react";

const ModalItem = ({ currentName, setCurrentName, setIsOpen, onSubmit }) => {
  const closeModal = (e) => {
    if (e.target.id === "modal-holder" || e.target.id === "modal-close") {
      setIsOpen(false);
    }
  };

  return (
    <div id="modal-holder" className="modal-holder" onClick={closeModal}>
      <div className="modal">
        <div className="modal-header">
          <span>Введите название</span>

          <img
            id="modal-close"
            src={closePath}
            alt="ic-close"
            className="modal-close"
            onClick={closeModal}
          />
        </div>

        <div className="modal-content">
          <input
            type="text"
            value={currentName}
            className="modal-content__input"
            placeholder="Название"
            onChange={(e) => setCurrentName(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button className="modal-actions__btn" onClick={onSubmit}>
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalItem;
