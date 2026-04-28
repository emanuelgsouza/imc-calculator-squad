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

const categorize = (index: number) => {
  if (index < 18.5) {
    return "Magreza";
  } else if (index < 25) {
    return "Normal";
  } else if (index < 30) {
    return "Sobrepeso";
  } else if (index < 35) {
    return "Obesidade grau I";
  } else if (index < 40) {
    return "obesidade grau II";
  } else if (index > 40) {
    return "obesidade grau III";
  }
};

const calculate = (weight: number | string, height: number | string) => {
  const w = Number(weight);
  const h = Number(height);

  const imc = w / (h * h);
  return imc.toFixed(2);
};

export { categorize, calculate };
