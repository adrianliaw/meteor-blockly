Package.describe({
  name: "blockly:dart",
  version: "0.0.0",
  summary: "Dart Code Generator for blockly:blockly",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.use(["blockly:blockly@0.0.0", "blockly:blocks@0.0.0"], "client");
  api.imply("blockly:blockly");
  api.addFiles("lib/dart_compressed.js", "client");
});
