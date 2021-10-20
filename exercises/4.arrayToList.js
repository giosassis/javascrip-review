function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  let array = [];
  let main = list;

  while (main != null) {
    array.push(main.value);
    main = main.rest;
  }

  return array;
}

function prepend(element, list) {
  return {
    element,
    list: list,
  };
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10,20,30])));