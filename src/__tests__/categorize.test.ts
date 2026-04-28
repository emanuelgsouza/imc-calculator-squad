import { expect, test } from "vitest";

import { categorize } from "../calc.ts";

// test table
test.for([
  [18, "Magreza"],
  [18.5, "Normal"],
  [24, "Normal"],
  [24.9, "Normal"],
  [25, "Sobrepeso"],
  [34.999, "Obesidade grau I"],
  [35, "obesidade grau II"],
  [39, "obesidade grau II"],
  [39.9, "obesidade grau II"],
  [50, "obesidade grau III"],
  [500, "obesidade grau III"],
])("categorize(%i) -> %s", ([index, expected]) => {
  expect(categorize(Number(index))).toBe(expected);
});
