import "./App.css";
import Display from "./components/Display";
import Input from "./components/Input";
import { useSelector } from "react-redux";
function App() {
  const { Number, caisse } = useSelector((state) => state.pizza);
  return (
    <>
      <div>
        <h1> cake </h1>
        <Input />
        <Display />
      </div>
      <div>
        <h1> pizza </h1>
        <h3> number: {Number} </h3>
        <h3> caisse {caisse} </h3>
      </div>
    </>
  );
}

export default App;
