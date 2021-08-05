import React, { useState } from "react";
import { addStyles, EditableMathField, StaticMathField } from "react-mathquill";
import "./App.css";
addStyles();
function App() {
  const [latex, setLatex] = useState("");
  const [text, setText] = useState("");
  const [mq, setMq] = useState(null);
  const handleLatexClick = (latex) => {
    mq.write(latex);
  };

  return (
    <div className="App-header">
      <h2>Choose the expression below to write </h2>
      <div className="container">
        <div>
          <span className="box" onClick={() => handleLatexClick("\\^{2}")}>
            <StaticMathField>{"\\^{2}"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\sqrt{}")}>
            <StaticMathField>{"\\sqrt{}"}</StaticMathField>
          </span>
          <span
            className="box"
            onClick={() => handleLatexClick("\\sqrt[{}]{}")}
          >
            <StaticMathField>{"\\sqrt[{}]{}"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\frac{}{}")}>
            <StaticMathField>{"\\frac{}{}"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\log_{}")}>
            <StaticMathField>{"\\log_{}"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\pi")}>
            <StaticMathField>{"\\pi"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\theta")}>
            <StaticMathField>{"\\theta"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\sin")}>
            <StaticMathField>{"\\sin"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\cos")}>
            <StaticMathField>{"\\cos"}</StaticMathField>
          </span>
        </div>
        <div>
          <span className="box" onClick={() => handleLatexClick("\\tan")}>
            <StaticMathField>{"\\tan"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("+")}>
            <StaticMathField>{"+"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("-")}>
            <StaticMathField>{"-"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("/")}>
            <StaticMathField>{"/"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("*")}>
            <StaticMathField>{"*"}</StaticMathField>
          </span>
          <span
            className="box"
            onClick={() => handleLatexClick("\\frac{\\partial y}{\\partial x}")}
          >
            <StaticMathField>
              {"\\frac{\\partial y}{\\partial x}"}
            </StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\sum}")}>
            <StaticMathField>{"\\sum"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\int_{}^{}")}>
            <StaticMathField>{"\\int_{}^{}"}</StaticMathField>
          </span>
          <span className="box" onClick={() => handleLatexClick("\\lim")}>
            <StaticMathField>{"\\lim"}</StaticMathField>
          </span>
        </div>
      </div>
      <h2>Editable Math Field</h2>
      <EditableMathField
        className="edit-field"
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
          setText(mathField.text());
        }}
        mathquillDidMount={(mathField) => {
          setMq(mathField);
          setText(mathField.text());
        }}
      />
      <div className="result-container">
        <span>Raw latex:</span>
        <span className="result-latex">{latex}</span>
      </div>
      <div className="result-container">
        <span>Raw text:</span>
        <span className="result-latex">{text}</span>
      </div>
    </div>
  );
}

export default App;
