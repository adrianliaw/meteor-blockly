Package.describe({
  name: "blockly:python",
  version: "0.0.0",
  summary: "Python Code Generator for blockly:blockly",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.use(["blockly:blockly", "blockly:blocks"], "client");
  api.imply("blockly:blockly");
  api.addFiles("lib/python_compressed.js", "client");
});
