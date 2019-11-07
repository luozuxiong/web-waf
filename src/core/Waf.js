class Waf {
  constructor(argv) {
    [this.__req, this.__res, this.next, this.options] = argv;
    this.working();
  }
  working() {
    console.log(this);
    this.next();
  }
}

module.exports = Waf;
