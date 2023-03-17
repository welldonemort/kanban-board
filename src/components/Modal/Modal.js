import "./Modal.css";
import closePath from "../../assets/icons/close.svg";

const Modal = ({ setIsOpen, title = "Modal" }) => {
  const closeModal = (e) => {
    if (e.target.id === "modal-holder" || e.target.id === "modal-close") {
      setIsOpen(false);
    }
  };

  return (
    <div id="modal-holder" className="modal-holder" onClick={closeModal}>
      <div className="modal">
        <div className="modal-header">
          <span>{title}</span>

          <img
            id="modal-close"
            src={closePath}
            alt="ic-close"
            className="modal-close"
            onClick={closeModal}
          />
        </div>

        <div className="modal-content"></div>

        <div className="modal-actions"></div>
      </div>
    </div>
  );
};

export default Modal;
