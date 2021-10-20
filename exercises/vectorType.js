class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(z) {
    return new Vec(this.x + z, this.y + z);
  }
  minus(z) {
    return new Vec(this.x - z, this.y - z);
  }

  get length(x,y) {
      //The lenght of the vector (that is the distance of the point (x,y) from the origin (0x0) 
    //euclidean distance 

  }
}
