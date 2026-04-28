import { expect, test } from "vitest";

import { categorize, Category } from "../calc.ts";

// test table
test.for([
  [18, Category.Magreza],
  [18.5, Category.Normal],
  [24, Category.Normal],
  [24.9, Category.Normal],
  [25, Category.Sobrepeso],
  [34.999, Category.ObesidadeI],
  [35, Category.ObesidadeII],
  [39, Category.ObesidadeII],
  [39.9, Category.ObesidadeII],
  [50, Category.ObesidadeIII],
  [500, Category.ObesidadeIII],
])("categorize(%i) -> %s", ([index, expected]) => {
  expect(categorize(Number(index))).toBe(expected);
});
