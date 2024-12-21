import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  const [input, setInput] = useState(null);

  return (
    <main className="flex items-center justify-center">
      <div className="h-1/2">
        <Form setInput={setInput} input={input} />
        <Output input={input} />
      </div>
    </main>
  );
}

export default App;
