import Button from "./components/Button";
//import "./styles.css";

import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.changeTheNumber)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ backgroundColor: "blue", fontSize: "30px" }}>{count}</div>

      <Button />
    </div>
  );
}
