import { useState } from "react";
import { useDispatch } from "react-redux";
import { buyCake, restockCake } from "../store/actions";
const Input = () => {
  const [input, setInput] = useState({
    buy: "",
    restock: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <label htmlFor="buy cake">Buy cake</label>
        <input
          type="number"
          name="buy"
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              [e.target.name]: parseInt(e.target.value),
            }));
          }}
          min={1}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(buyCake(input.buy));
          }}
        >
          {" "}
          send
        </button>
      </form>
      <form>
        <label htmlFor="restock cake">restock cake</label>
        <input
          type="number"
          name="restock"
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              [e.target.name]: parseInt(e.target.value),
            }));
          }}
          min={1}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(restockCake(input.restock));
          }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Input;
