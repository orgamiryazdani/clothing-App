import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/CounterSlice";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter state</h1>
      <h2>counter : {counter.value}</h2>
      <button onClick={() => dispatch(increment(0))}>+</button>
      <button onClick={() => dispatch(decrement(0))}>-</button>
    </div>
  );
};

export default CounterComponent;
