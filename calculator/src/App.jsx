import "./App.css";
import logo from "./assets/images/logo.svg";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  const [input, setInput] = useState({
    tipByPerson: "0.00",
    billByPerson: "0.00",
    reset: false,
  });
  return (
    <main className="flex flex-col items-center gap-3 bg-cyan-light-grayish justify-center">
      <img src={logo} alt="logo" />
      <div className="h-1/2 w-3/5 grid grid-cols-2 p-6 gap-6 bg-white rounded-2xl ">
        <Form setInput={setInput} input={input} />
        <Output input={input} setInput={setInput} />
      </div>
    </main>
  );
}

export default App;
