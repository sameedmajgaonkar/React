import { useState } from "react";
import produce from "immer";
const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };
  return (
    <>
      <div>
        Pizza : {pizza.name}
        &nbsp; Toppings:
        {pizza.toppings.map((topping: string) => (
          <span key={topping}> {topping} </span>
        ))}
      </div>
      <button onClick={handleClick}>Orderrrr</button>
    </>
  );
};

export default Pizza;
