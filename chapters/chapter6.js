//Methods

// let rabbit = {}
// rabbit.speak = ((line) => {
//     console.log(`The rabbit says ${line}`)
// })

// rabbit.speak("I'm alive")

// let whiteRabbit = { type: "white", speak };
// let hungryRabbit = { type: "hungy", speak };

//  function speak(line) {
//   console.log(`The ${this.type} rabbit says ${line}`);
//  }

// whiteRabbit.speak("Oh my ears and ehiskers");
// hungryRabbit.speak("I could use a carrot right now");

/*Class*/

// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// function Rabbit (type){
//   this.type = type;
// }

// Rabbit.speak = function(line) {
//  console.log(`The ${this.type} rabbit says ${line}`);
// }

// let weirdRabbit = new Rabbit ("weird ")

/*Class*/

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }

//   speak(line) {
//     console.log(`The ${this.type} rabbit says ${line}`)
//   }

// }

// let killerRabbit = new Rabbit ("killer")
// let blackRabbit = new Rabbit ("black")

/*Map*/

// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Júlia: 62
// }

// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);

// console.log(`Julia ${ages.Júlia}`)
// console.log(`Julia ${ages.Liang}`)
// console.log(`Julia ${ages.Boris}`)

// let varyingSize = {
//   get size() {
//     return Math.floor(Math.random() * 100);
//   },
// };

// console.log(varyingSize.size)

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
