class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(z) {
    return new Vec(this.x + z.x, this.y + z.y);
  }
  minus(z) {
    return new Vec(this.x - z.x, this.y - z.y);
  }

  get length() {
    //z² = x² + y² 
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
}

const vec = new Vec(3,4)
const vec2 = new Vec(1,1)
console.log(vec.plus(vec2))
console.log(vec.minus(vec2))
console.log(vec.length)