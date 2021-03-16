const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof this.arr[position - 1] !== 'undefined') {
      this.arr.splice(position - 1, 1);
      return this;
    }
    else{
      //return "THROWN";
      throw new Error('THROWN');
    }
  },
  reverseChain() {
    if (this.arr.length !== 0) {
      this.arr.reverse();
    }
    return this;
  },
  finishChain() {
    let final = [];
    for (var i = 0; i < this.arr.length; i++) {
      final.push(`( ${this.arr[i]} )`);
    }
   // console.log(final.join('~~'))
    return final.join('~~');
  }
};

module.exports = chainMaker;
