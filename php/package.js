Package.describe({
  name: "blockly:php",
  version: "0.0.0",
  summary: "PHP Code Generator for blockly:blockly",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.use(["blockly:blockly", "blockly:blocks"], "client");
  api.imply("blockly:blockly");
  api.addFiles("lib/php_compressed.js", "client");
});
