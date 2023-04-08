import React, { useEffect, useState } from "react";
import "./Storage.css";

const Storage = ({
  accountingData,
  data,
  setIsOpen,
  isOpen,
  balance,
  setAccounting,
  setCurrentName,
  setIsOpenItem,
  divideNumber,
}) => {
  const [currentStorage, setCurrentStorage] = useState(null);
  const onAddBalance = (storage) => {
    setCurrentStorage(storage);
    setIsOpen(true);
  };

  const onAddStorage = () => {
    setIsOpenItem(true);
    setCurrentName("storage");
  };

  useEffect(() => {
    let new_balance = +balance;
    if (typeof new_balance === "number" && currentStorage && balance !== 0) {
      let obj_found = data.items.find(
        (obj) => obj.name === currentStorage.name
      );

      if (!isOpen && obj_found) {
        obj_found.balance += new_balance;
        setAccounting([...accountingData]);
      }
    }
  }, [isOpen]);

  return (
    <div className="storage">
      {data.items &&
        data.items.map((storage) => (
          <div
            className="storage__item"
            key={`s-${storage.name}`}
            onClick={() => onAddBalance(storage)}
          >
            <p className="storage__item__title">{storage.name}</p>

            <img
              src={require(`./${storage.icon || "money-bag"}.svg`)}
              alt="ic: bank"
              className="storage__item__img"
            />

            <p className="storage__item__balance">
              {storage.balance ? divideNumber(storage.balance) : 0} ₸
            </p>
          </div>
        ))}

      <button className="storage__item__add-btn" onClick={onAddStorage}>
        +
      </button>
    </div>
  );
};

export default Storage;
