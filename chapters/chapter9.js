let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;
let dateTime = /\d\d-\d\d-\d\d\d\d\ \d\d:\d\d/;
let dateTime2 =
  /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; /*{5-} Five or more times */
let neighbor = /neighbou?r/;

//console.log(eighteenPlus);
console.log(/abc/.test("abcde")); // Tests whether the character/pattern is present in the expression or not //
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1993"));
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime2.test("1-30-2003 8:45"));
console.log(/'\d+'/.test("'123'"));
console.log(/'\d*'/.test("'123'")); // Allows the pattern to match zero times. Optional pattern, it may occur zero times or one time. It's allowed to occur, but the pattern also matches when it is missing.
console.log(neighbor.test("neighbor"));

//Exec()

let match = /\d+/.exec("one twoo 100");
console.log(match);

//The Date Class
let date = new Date();
date.getFullYear();
date.getMonth();
date.getHours();
date.getMinutes();
date.getSeconds();

console.log(new Date());

/*function getDate(string) { 

  let [month, day, year] = /(\d{1,2})-(\d{1,2}) - (\d{4})/.exec(string)
  return new Date(year, month-1, day)
}*/

//console.log(getDate("1-30-2003"))

let animalCount = /\b\d+ (pig|cow|chicken)s\b/;
console.log(animalCount.test("15 pigs"))