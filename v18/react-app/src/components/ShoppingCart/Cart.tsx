interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>
        Cart
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
