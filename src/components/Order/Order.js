import React from "react";

import classes from "./Order.css";

const order = props => {
  let ingredientsList = [];

  for (let ingredientName in props.ingredients) {
    ingredientsList.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredientsList.map(ig => {
    return (
      <span key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients:{ingredientOutput}</p>
      <p>
        Price: <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default order;
