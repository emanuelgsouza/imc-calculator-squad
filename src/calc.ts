// const categories = {
//   18.5: "Magreza",
//   24.9: "Peso normal",
//   29.9: "Sobrepeso",
//   34.9: "Obesidade I",
//   39.9: "Obesidade II",
//   40: "Obesidade III",
// };

/*

Categorias do IMC:

Menor que 18,5 = Magreza
18,5 a 24,9 = Normal
25 a 29,9 = Sobrepeso
30 a 34,9 = Obesidade grau I
35 a 39,9 = Obesidade grau II
Maior que 40 = Obesidade grau III

*/

export enum Category {
  Magreza = "Magreza",
  Normal = "Normal",
  Sobrepeso = "Sobrepeso",
  ObesidadeI = "Obesidade grau I",
  ObesidadeII = "Obesidade grau II",
  ObesidadeIII = "Obesidade grau III",
}

const categorize = (index: number): Category => {
  if (index < 18.5) {
    return Category.Magreza;
  }
  if (index < 25) {
    return Category.Normal;
  }
  if (index < 30) {
    return Category.Sobrepeso;
  }
  if (index < 35) {
    return Category.ObesidadeI;
  }
  if (index < 40) {
    return Category.ObesidadeII;
  }

  return Category.ObesidadeIII;
};

const calculate = (weight: number | string, height: number | string) => {
  const w = Number(weight);
  const h = Number(height);

  const imc = w / (h * h);
  return imc.toFixed(2);
};

export { categorize, calculate };
