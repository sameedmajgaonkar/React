import { useState } from "react";
import produce from "immer";
const ExCart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity = 2;
      })
    );
  };
  return (
    <>
      <div>
        ExCart{" "}
        {cart.items.map((item) => (
          <p key={item.id}>
            Title: {item.title} :::: Quantity: {item.quantity}
          </p>
        ))}
      </div>
      <button onClick={handleClick}>Products</button>
    </>
  );
};

export default ExCart;
