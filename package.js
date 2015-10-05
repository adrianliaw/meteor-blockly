Package.describe({
  name: "adrianliaw:blockly",
  version: "0.0.0",
  summary: "Google Blockly In Meteor",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.addFiles("lib/blockly/blockly_compressed.js", "client", {bare: true});
  api.addFiles([
    "lib/blockly/blocks_compressed.js",
    "lib/blockly/javascript_compressed.js",
    "lib/blockly/msg/messages.js"
  ], "client");
  api.export("Blockly");
});
