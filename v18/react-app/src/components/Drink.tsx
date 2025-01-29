import { useState } from "react";

const Drink = () => {
  const [drink, setDrink] = useState({
    title: "Water",
    price: 10,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 15 });
  };
  return (
    <div>
      <h1>Updating Objects (State)</h1>
      <button onClick={handleClick}>Click me</button>
      <p>
        Drink {drink.title} Price {drink.price}
      </p>
    </div>
  );
};

export default Drink;
