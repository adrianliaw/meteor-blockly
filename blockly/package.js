Package.describe({
  name: "blockly:blockly",
  version: "0.0.0",
  summary: "Google Blockly In Meteor",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.addFiles([
    "lib/blockly_compressed.js",
    "lib/messages.js"
  ], "client", {bare: true});
  api.export("Blockly");
});
