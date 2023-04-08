import React, { useEffect, useState } from "react";
import "./AccountingData.css";
import Storage from "../Accounting/Storage/Storage";
import Category from "../Accounting/Category/Category";
// import Income from "../Accounting/Income/Income";
import ModalBalance from "../Accounting/components/ModalBalance/ModalBalance";
import ModalItem from "../Accounting/components/ModalItem/ModalItem";

const AccountingData = ({ accountingData, setAccounting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [balance, setBalance] = useState("");

  // adding new item
  const [currentColumn, setCurrentColumn] = useState("");
  const [currentName, setCurrentName] = useState("");

  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);

  const getComponentByID = (id) => {
    if (id === 1)
      return (
        <Storage
          data={accountingData[id - 1]}
          key={`item-${id}`}
          accountingData={accountingData}
          balance={balance}
          setIsOpen={setIsOpen}
          setAccounting={setAccounting}
          isOpen={isOpen}
          setBalance={setBalance}
          setCurrentName={setCurrentColumn}
          setIsOpenItem={setIsOpenItem}
          divideNumber={divideNumber}
        />
      );
    else if (id === 2)
      return (
        <Category
          data={accountingData[id - 1]}
          key={`item-${id}`}
          accountingData={accountingData}
          balance={balance}
          setIsOpen={setIsOpen}
          setAccounting={setAccounting}
          isOpen={isOpen}
          setBalance={setBalance}
          setCurrentName={setCurrentColumn}
          setIsOpenItem={setIsOpenItem}
          divideNumber={divideNumber}
        />
      );
    // else return <Income data={accountingData[id - 1]} key={`item-${id}`} />;
  };

  const onSubmit = () => {
    setIsOpen(false);
  };

  const onSubmitItem = () => {
    setIsOpenItem(false);

    if (currentColumn) {
      let column = accountingData.find((c) => c.title === currentColumn);

      if (column) {
        column.items.push({ name: currentName, balance: 0 });

        setAccounting([...accountingData]);
        setCurrentColumn("");
        setCurrentName("");
      }
    }
  };

  const divideNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    let outcome = 0;
    let income = 0;

    accountingData[0].items.forEach((block) => {
      income += +block.balance;
    });

    accountingData[1].items.forEach((block) => {
      outcome += +block.balance;
    });

    setIncome(income);
    setOutcome(outcome);
    setTotal(income - outcome);
  }, [accountingData]);

  return (
    <div className="accounting">
      {isOpen && (
        <ModalBalance
          setIsOpen={setIsOpen}
          balance={balance}
          setBalance={setBalance}
          onSubmit={onSubmit}
        />
      )}

      {isOpenItem && (
        <ModalItem
          currentName={currentName}
          setIsOpen={setIsOpenItem}
          onSubmit={onSubmitItem}
          setCurrentName={setCurrentName}
        />
      )}

      <div className="stats">
        <span className="stats__item stats__green">
          <span className="stats__bold">Баланс:</span>+{divideNumber(income)} ₸
        </span>

        <span className="stats__item stats__red">
          <span className="stats__bold">Расходы:</span>-{divideNumber(outcome)}{" "}
          ₸
        </span>

        <span className="stats__item">
          <span className="stats__bold">Итого:</span>
          {divideNumber(total)} ₸
        </span>
      </div>

      {accountingData &&
        accountingData.map((item) => getComponentByID(item.id))}
    </div>
  );
};

export default AccountingData;
