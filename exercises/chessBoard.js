let hash = "#";
let linha = " ";

for (let i = 0; i < 8; i++) {
  let caracter1;
  let caracter2;

  if (i % 2 === 0) {
    caracter1 = " ";
    caracter2 = "#";
  } else {
    caracter1 = "#";
    caracter2 = " ";
  }

  for (let j = 0; j < 8; j++) {
    if (j % 2 == 0) {
      linha += caracter1;
    } else {
      linha += caracter2;
    }
  }
  console.log(linha);
  linha = " ";
}
