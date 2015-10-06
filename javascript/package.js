Package.describe({
  name: "blockly:javascript",
  version: "0.0.0",
  summary: "Javascript Code Generator for blockly:blockly",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.use(["blockly:blockly", "blockly:blocks"], "client");
  api.addFiles("lib/javascript_compressed.js", "client");
});
