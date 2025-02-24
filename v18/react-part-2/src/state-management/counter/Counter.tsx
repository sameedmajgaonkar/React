import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();

  return (
    <div className="p-2">
      <h2>
        Count: <span className="badge text-bg-dark">{counter}</span>
      </h2>
      <button onClick={() => increment()} className="btn btn-primary">
        INCREMENT
      </button>
      <button onClick={() => reset()} className="btn btn-primary ms-2">
        RESET
      </button>
    </div>
  );
};

export default Counter;
