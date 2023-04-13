import React, { useEffect, useState } from "react";
import "./Storage.css";

const Storage = ({
  accountingData,
  data,
  setIsOpen,
  isOpen,
  balance,
  setAccounting,
  setCurrentColumn,
  setIsOpenItem,
  divideNumber,
  selectedOption,
}) => {
  const [currentStorage, setCurrentStorage] = useState(null);
  const onAddBalance = (storage) => {
    setCurrentColumn("storage");
    setCurrentStorage(storage);
    setIsOpen(true);
  };

  const onAddStorage = () => {
    setIsOpenItem(true);
    setCurrentColumn("storage");
  };

  useEffect(() => {
    let new_balance = +balance;
    if (typeof new_balance === "number" && currentStorage && balance !== 0) {
      let obj_found = data.items.find(
        (obj) => obj.name === currentStorage.name
      );

      if (!isOpen && obj_found) {
        let delete_from = accountingData[0].items.find(
          (income) => income.name === selectedOption
        );

        if (delete_from) {
          delete_from.balance -= new_balance;
        }

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
