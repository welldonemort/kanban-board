import React, { useEffect, useState } from "react";
import "./Category.css";

const Category = ({
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
  const [currentCategory, setCurrentCategory] = useState(null);
  const onAddBalance = (category) => {
    setCurrentColumn("category");
    setCurrentCategory(category);
    setIsOpen(true);
  };

  const onAddCategory = () => {
    setIsOpenItem(true);
    setCurrentColumn("category");
  };

  useEffect(() => {
    let new_balance = +balance;
    if (typeof new_balance === "number" && currentCategory && balance !== 0) {
      let obj_found = data.items.find(
        (obj) => obj.name === currentCategory.name
      );

      if (!isOpen && obj_found) {
        let delete_from = accountingData[1].items.find(
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
    <div className="category">
      {data.items &&
        data.items.map((category) => (
          <div
            className="category__item"
            key={`c-${category.name}`}
            onClick={() => onAddBalance(category)}
          >
            <p className="category__item__title">{category.name}</p>

            <img
              src={require(`./${category.icon || "money-bag"}.svg`)}
              alt="ic: bank"
              className="category__item__img"
            />

            <p className="category__item__balance">
              {category.balance ? divideNumber(category.balance) : 0} ₸
            </p>
          </div>
        ))}

      <button className="category__item__add-btn" onClick={onAddCategory}>
        +
      </button>
    </div>
  );
};

export default Category;
