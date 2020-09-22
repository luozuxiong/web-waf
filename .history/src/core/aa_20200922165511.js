class Waf {
  constructor(argv) {
    // 生成
    [this.__req, this.__res, this.next, this.options] = argv;
    this.working();
  }
  working() {
    this.next();
  }
}

module.exports = Waf;
