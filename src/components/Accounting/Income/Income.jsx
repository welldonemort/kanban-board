import React from "react";
import "./Income.css";

const Income = ({ data }) => {
  return (
    <div className="income">
      {data.items &&
        data.items.map((income) => (
          <div className="storage__item" key={`i-${income.name}`}>
            {income.name}
          </div>
        ))}
    </div>
  );
};

export default Income;
