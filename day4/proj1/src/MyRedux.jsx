import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./counterSlice";

export default function MyRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </>
  );
}
