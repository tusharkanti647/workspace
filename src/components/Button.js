import { useDispatch } from "react-redux";
import { incriment, decriment } from "./redux/action";
import(useDispatch)

function Button() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        style={{ backgroundColor: "red", fontSize: "30px", margin: "50px" }}
        onClick={() => dispatch.incriment}
      >
        increase
      </button>

      <button
        style={{ backgroundColor: "red", fontSize: "30px", margin: "50px" }}
        onClick={() => dispatch.decriment}
      >
        decrease
      </button>
    </>
  );
}

export default Button;
