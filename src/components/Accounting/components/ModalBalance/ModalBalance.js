import "./ModalBalance.css";
import closePath from "../../../../assets/icons/close.svg";

const ModalBalance = ({
  setIsOpen,
  balance,
  setBalance,
  onSubmit,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  // const closeModal = (e) => {
  //   if (e.target.id === "modal-holder" || e.target.id === "modal-close") {
  //     setIsOpen(false);
  //   }
  // };

  return (
    // <div id="modal-holder" className="modal-holder" onClick={closeModal}>
    <div id="modal-holder" className="modal-holder">
      <div className="modal">
        <div className="modal-header">
          <span>Введите сумму</span>

          {/* <img
            id="modal-close"
            src={closePath}
            alt="ic-close"
            className="modal-close"
            onClick={closeModal}
          /> */}
        </div>

        <div className="modal-content">
          <input
            type="text"
            value={balance}
            className="modal-content__input"
            placeholder="Сумма (тг)"
            onChange={(e) => setBalance(+e.target.value)}
          />

          {options && (
            <select
              name="dropdown-from"
              id={`${options.id}-dropdown-from`}
              className="dropdown-balance"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.items.map((option, idx) => (
                <option value={option.name} key={`option-from-${idx}`}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="modal-actions">
          <button
            className={`modal-actions__btn ${
              !balance ? "modal-actions__btn-disabled" : ""
            }`}
            onClick={onSubmit}
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBalance;
