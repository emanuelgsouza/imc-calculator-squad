// @ts-nocheck

import "./style.css";
import { categorize, calculate } from "./calc";

const printResult = (imc, category) => {
  const result = `Seu índice IMC é ${imc}, considerado ${category}`;
  document.querySelector("#result").textContent = result;
};

const main = () => {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const imc = calculate(weight, height);
  const category = categorize(imc);

  printResult(imc, category);
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#calculate");
  button.addEventListener("click", main);
});
