import React, { useEffect, useState } from "react";
import "./AccountingData.css";
import Storage from "../Accounting/Storage/Storage";
import Category from "../Accounting/Category/Category";
import Income from "../Accounting/Income/Income";
import ModalBalance from "../Accounting/components/ModalBalance/ModalBalance";
import ModalItem from "../Accounting/components/ModalItem/ModalItem";
import ModalLimit from "../Accounting/components/ModalLimit/ModalLimit";
import Chart from "react-apexcharts";

const AccountingData = ({ accountingData, setAccounting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [balance, setBalance] = useState("");

  // adding new item
  const [currentColumn, setCurrentColumn] = useState("");
  const [currentName, setCurrentName] = useState("");

  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  // const [total, setTotal] = useState(0);

  const [currentOptions, setCurrentOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const [limitMonth, setLimitMonth] = useState(0);
  const [limitDay, setLimitDay] = useState(0);

  const [isLimitModal, setIsLimitModal] = useState(false);
  const [currentLimit, setCurrentLimit] = useState("");

  const getComponentByID = (id) => {
    if (id === 1)
      return (
        <>
          <p className="title-main">Источники дохода</p>

          <Income
            data={accountingData[id - 1]}
            key={`item-${id}`}
            accountingData={accountingData}
            balance={balance}
            setIsOpen={setIsOpen}
            setAccounting={setAccounting}
            isOpen={isOpen}
            setBalance={setBalance}
            setCurrentColumn={setCurrentColumn}
            setIsOpenItem={setIsOpenItem}
            divideNumber={divideNumber}
          />
        </>
      );
    else if (id === 2)
      return (
        <>
          <p className="title-main">Хранилище</p>

          <Storage
            data={accountingData[id - 1]}
            key={`item-${id}`}
            accountingData={accountingData}
            balance={balance}
            setIsOpen={setIsOpen}
            setAccounting={setAccounting}
            isOpen={isOpen}
            setBalance={setBalance}
            setCurrentColumn={setCurrentColumn}
            setIsOpenItem={setIsOpenItem}
            divideNumber={divideNumber}
            selectedOption={selectedOption}
          />
        </>
      );
    else if (id === 3)
      return (
        <>
          <p className="title-main">Расходы</p>

          <Category
            data={accountingData[id - 1]}
            key={`item-${id}`}
            accountingData={accountingData}
            balance={balance}
            setIsOpen={setIsOpen}
            setAccounting={setAccounting}
            isOpen={isOpen}
            setBalance={setBalance}
            setCurrentColumn={setCurrentColumn}
            setIsOpenItem={setIsOpenItem}
            divideNumber={divideNumber}
            selectedOption={selectedOption}
            limit={limitDay}
            outcome={outcome}
          />
        </>
      );
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

  const onSubmitLimit = () => {
    setIsLimitModal(false);

    let limit = accountingData.find((obj) => obj.id === 4);
    if (limit) {
      limit.value = currentLimit;

      setLimitMonth(currentLimit);
      setLimitDay(currentLimit / 30);

      setAccounting([...accountingData]);
    }
  };

  const divideNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const openLimitModal = () => {
    setIsLimitModal(true);
  };

  useEffect(() => {
    let outcome = 0;
    let income = 0;

    accountingData[0].items.forEach((block) => {
      income += +block.balance;
    });

    accountingData[1].items.forEach((block) => {
      income += +block.balance;
    });

    accountingData[2].items.forEach((block) => {
      outcome += +block.balance;
    });

    setIncome(income);
    setOutcome(outcome);
    // setTotal(income - outcome);
  }, [accountingData]);

  useEffect(() => {
    if (currentColumn === "storage") {
      setCurrentOptions(accountingData[0]);
      setSelectedOption(accountingData[0].items[0].name);
    } else if (currentColumn === "category") {
      setCurrentOptions(accountingData[1]);
      setSelectedOption(accountingData[1].items[0].name);
    } else {
      setCurrentOptions(null);
      setSelectedOption("");
    }
  }, [currentColumn]);

  useEffect(() => {
    let limit = accountingData.find((obj) => obj.id === 4);

    if (limit) {
      setLimitMonth(limit.value);
      setLimitDay(Math.round(limit.value / 30));
    }
  }, []);

  return (
    <div className="accounting">
      {isOpen && (
        <ModalBalance
          setIsOpen={setIsOpen}
          balance={balance}
          setBalance={setBalance}
          onSubmit={onSubmit}
          currentColumn={currentColumn}
          accountingData={accountingData}
          options={currentOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
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

      {isLimitModal && (
        <ModalLimit
          onSubmit={onSubmitLimit}
          currentLimit={currentLimit}
          setCurrentLimit={setCurrentLimit}
        />
      )}

      <div className="accounting-holder">
        <div className="accounting-left">
          <div className="stats">
            <span className="stats__item stats__green">
              <span className="stats__bold">Баланс:</span>
              {divideNumber(income)} ₸
            </span>

            <span className="stats__item stats__red">
              <span className="stats__bold">Расходы:</span>
              {divideNumber(outcome)} ₸
            </span>

            {/* <span className="stats__item">
          <span className="stats__bold">Итого:</span>
          {divideNumber(total)} ₸
        </span> */}
          </div>

          {accountingData &&
            accountingData.map((item) => getComponentByID(item.id))}
        </div>

        <div className="accounting-right">
          <p className="accounting-right__title">Статистика</p>

          <div className="accounting-right__info">
            <p onClick={openLimitModal}>
              <span className="bold">Лимит на месяц: </span>
              {divideNumber(limitMonth)} ₸
            </p>

            <p>
              <span className="bold">Лимит на день: </span>
              {divideNumber(limitDay)} ₸
            </p>
          </div>

          <Chart
            type="donut"
            height="340"
            className="donut"
            series={accountingData[2].items.map((item) => item.balance)}
            options={{
              labels: accountingData[2].items.map((item) => item.name),
            }}
          />
        </div>
      </div>

      <div className="transactions">
        <p className="transactions__title">Транзакции</p>

        {accountingData[4].history.length ? (
          <table className="transactions__table">
            <tr>
              <th>Откуда</th>
              <th>Куда</th>
              <th>Сумма</th>
              <th>Дата</th>
              <th>Тип перевода</th>
            </tr>
            {accountingData[4].history.map((row) => (
              <tr>
                <td>{row.from || "-"}</td>
                <td>{row.to || "-"}</td>
                <td>{`${divideNumber(row.amount)} ₸` || "-"}</td>
                <td>{row.date || "-"}</td>
                <td>{row.type || "-"}</td>
              </tr>
            ))}
          </table>
        ) : (
          <p className="transactions__blank">Нет данных</p>
        )}
      </div>
    </div>
  );
};

export default AccountingData;
