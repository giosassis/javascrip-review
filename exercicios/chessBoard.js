/*Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #*/

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
