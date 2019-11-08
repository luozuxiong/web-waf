const chalk = require("chalk");
const methoWithChalkMap = {
  log: "white",
  info: "green",
  warn: "cyan",
  error: "red"
};
class Logger extends console.Console {
  constructor(options) {
    super(options);
    for (let [method, color] of Object.entries(methoWithChalkMap)) {
      const methodTemp = this[method];
      this[method] = str => {
        methodTemp(chalk(str, color));
      };
    }
  }
}

module.exports = Logger;
