import React, { useEffect, useState } from "react";
import "./Category.css";

const Category = ({
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
  const [currentCategory, setCurrentCategory] = useState(null);
  const onAddBalance = (category) => {
    setCurrentCategory(category);
    setIsOpen(true);
  };

  const onAddCategory = () => {
    setIsOpenItem(true);
    setCurrentName("category");
  };

  useEffect(() => {
    let new_balance = +balance;
    if (typeof new_balance === "number" && currentCategory && balance !== 0) {
      let obj_found = data.items.find(
        (obj) => obj.name === currentCategory.name
      );

      if (!isOpen && obj_found) {
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

      <button className="storage__item__add-btn" onClick={onAddCategory}>
        +
      </button>
    </div>
  );
};

export default Category;
