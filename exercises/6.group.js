class Group {
  constructor() {
    this.member = [];
  }

  add(value) {
    if (!this.member.includes(value)) {
      this.member.push(value);
    }
  }

  delete(value) {
    this.member = this.member.filter((element) => element.id !== value);
  }

  has(value) {
    if (this.member.includes(value)) {
      return true;
    }
  }

  static from(obj) {
    let group = new Group();

    for (let value of obj) {
      group.add(value);
    }

    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.integrator = 0;
    this.group = group;
  }

  next() {
    if (this.integrator >= this.group.member.length) {
      return {
        done: true,
      };
    } else {
      let result = { value: this.group.member[this.integrator], done: false };
      this.integrator++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
