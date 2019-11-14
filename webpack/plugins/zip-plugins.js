const JSZip = require("jszip");
class ZipPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log(124);

    compiler.hooks.emit.tap("ZipPlugin", (compilition, callback) => {
      console.log(1288);

      //   console.log(compilition);
    });
    compiler.hooks.beforeCompile.tap("MyPlugin", function(compilationParams) {
      console.log("beforeCompile", compilationParams);
    });
    compiler.hooks.entryOption.tap("MyPlugin", function(dir, entries) {
      console.log(entryOption, entries);
    });
    compiler.hooks.beforeRun.tap("MyPlugin", function(compiler) {
      console.log("beforeRun", compiler);
    });
    compiler.hooks.beforeCompile.tap("MyPlugin", function(compilationParams) {
      console.log("beforeCompile", compilationParams);
    });
    compiler.hooks.emit.asyncTap("MyPlugin", function(compilation) {
      console.log("beforeCompile", compilation);
    });
  }
}
module.exports = ZipPlugin;
