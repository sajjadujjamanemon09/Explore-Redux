import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>

      <div className="m-10 flex justify-center">
        <h1 className="bg-gray-600 text-white text-2xl w-16 p-5 rounded-md">{count}</h1>
      </div>

      <div className="flex justify-center gap-6">
        <button
          className="button bg-cyan-500 text-white p-4 text-xl rounded-lg shadow-md"
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment by 5
        </button>

        <br />

        <button
          className="button bg-red-500 text-white p-4 text-xl rounded-lg shadow-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className="button bg-green-500 text-white p-4 text-xl rounded-lg shadow-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

      </div>
    </div>
  );
};

export default Counter;
