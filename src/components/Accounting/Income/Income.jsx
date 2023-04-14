import React, { useEffect, useState } from "react";
import "./Income.css";

const Income = ({
  accountingData,
  data,
  setIsOpen,
  isOpen,
  balance,
  setAccounting,
  setCurrentColumn,
  setIsOpenItem,
  divideNumber,
}) => {
  const [currentIncome, setCurrentIncome] = useState(null);
  const onAddBalance = (income) => {
    setCurrentColumn("income");
    setCurrentIncome(income);
    setIsOpen(true);
  };

  const onAddIncome = () => {
    setIsOpenItem(true);
    setCurrentColumn("income");
  };

  useEffect(() => {
    let new_balance = +balance;

    if (typeof new_balance === "number" && currentIncome && balance !== 0) {
      let obj_found = data.items.find((obj) => obj.name === currentIncome.name);

      if (!isOpen && obj_found) {
        obj_found.balance += new_balance;

        const current_date = new Date();
        const datetime =
          current_date.getDate() +
          "/" +
          (current_date.getMonth() + 1) +
          "/" +
          current_date.getFullYear() +
          ", " +
          current_date.getHours() +
          ":" +
          current_date.getMinutes();

        accountingData[4].history.push({
          from: null,
          to: obj_found.name,
          date: datetime,
          amount: new_balance,
          type: "Пополнение",
        });

        setAccounting([...accountingData]);
      }
    }
  }, [isOpen]);

  return (
    <div className="income">
      {data.items &&
        data.items.map((income) => (
          <div
            className="income__item"
            key={`i-${income.name}`}
            onClick={() => onAddBalance(income)}
          >
            <p className="income__item__title">{income.name}</p>

            <img
              src={require(`./${income.icon || "money-bag"}.svg`)}
              alt="ic: bank"
              className="income__item__img"
            />

            <p className="income__item__balance">
              {income.balance ? divideNumber(income.balance) : 0} ₸
            </p>
          </div>
        ))}

      <button className="income__item__add-btn" onClick={onAddIncome}>
        +
      </button>
    </div>
  );
};

export default Income;
