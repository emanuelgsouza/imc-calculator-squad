import { useState } from "react";
import { calculate, categorize } from "./calc";

export function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState<number | undefined>(undefined);
  const category = categorize(imc!) // dado computado

  const update = () => {
    setImc(Number(calculate(weight, height)));
  };

  return (
    <div className="calculator-container">
      <h1>Calculadora de IMC</h1>

      <div className="input-group">
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          min="0"
          step="0.1"
          placeholder="Ex: 70"
          onChange={(event) => setWeight(event.target?.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="height">Altura (m):</label>
        <input
          type="number"
          id="height"
          min="0"
          step="0.01"
          placeholder="Ex: 1.75"
          onChange={(event) => setHeight(event.target?.value)}
        />
      </div>
      <button onClick={update} id="calculate">
        Calcular IMC
      </button>
      {imc && (
        <div id="result" data-testid="result" className="result">
          Seu índice IMC é {imc}, considerado {category}
        </div>
      )}
    </div>
  );
}
