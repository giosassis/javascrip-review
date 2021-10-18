//Fazer teste unitário

/*function countBeans (string) { 
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) == "B") {
            count++;
        }
    }

    return count;
}*/

function countChar(str, chr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == chr) {
      count += 1;
    }
  }
  return count;
}

console.log(countChar("BANANA", "A"));
