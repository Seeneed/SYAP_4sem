import React, { useState, useEffect } from "react";
import Display from "./Display";
import Button from "./Button";
import History from "./History";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
  
      if (!isFinite(result)) {
        throw new Error("Деление на 0");
      }
  
      const expression = `${input} = ${result}`;
      setHistory((prev) => [...prev, expression]);

      setInput(result.toString());
    } catch (error) {
      setInput("Ошибка!");
    }
  };

  const clearDisplay = () => {
    setInput("");
  };

  const clearLastSymbol = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openHistory = () => {
    const historyContainer = document.querySelector(".history-container");
    if (historyContainer) {
      historyContainer.classList.toggle("visible");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;
      if ("0123456789.+-*/".includes(key)) {
        handleClick(key);
      } else if (key === "Enter") {
        calculateResult();
      } else if (key === "Backspace") {
        clearLastSymbol();
      } else if (key === "Escape") {
        clearDisplay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div className={`calculator ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙" : "🌞"}
      </button>
      <Display value={input} />
      <div className="button-grid">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((button) => (
          <Button
            key={button}
            value={button}
            onClick={() => {
              if (button === "=") {
                calculateResult();
              } else {
                handleClick(button);
              }
            }}
            className={["/", "*", "-", "+", "="].includes(button) ? "operator-btn" : ""}
          />
        ))}
        <Button value="C" onClick={clearDisplay} className="operator-btn" />
        <Button value="⌫" onClick={clearLastSymbol} className="operator-btn" />
        <Button value="📜" onClick={openHistory} className="history-btn" />
      </div>
      <History history={history} />
    </div>
  );
};

export default Calculator;