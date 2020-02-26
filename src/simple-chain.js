const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this.array.length < position || position-1 < 0 || typeof position != 'number'){
      this.array = [];
      throw new Error;
    }else{
    this.array.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
