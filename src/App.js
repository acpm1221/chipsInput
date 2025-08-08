import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleChips = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChips((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  const deleteChips = (id) => {
    const copyChips = [...chips];
    copyChips.splice(id, 1);
    setChips(copyChips);
  };

  return (
    <div className="App">
      <h1>Chips Input</h1>

      <input
        type="text"
        placeholder="Enter Something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleChips}
      />

      <div className="chips-container">
        {chips.map((chip, index) => (
          <div className="chip" key={index}>
            {chip}
            <button onClick={() => deleteChips(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
