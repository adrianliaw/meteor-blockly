Google Blockly In Meteor
========================

`meteor add blockly:blockly`
----------------------------

This is a set of Meteor packages which wraps [Google Blockly](https://developers.google.com/blockly).

Usage
-----
`blockly:blockly` is the main and core package, it includes the blockly core. But only blockly "itself", without common blocks, code generators, etc.  
You can use core blocks by adding `blockly:blocks`, which includes commonly used blocks such as `repeat n do ...`, `if ... do ...`.   
By adding `blockly:javascript`, you'll be able to use the JavaScript code generator, which can turn your workspace into actual JavaScript code. Same for Python, Dart and PHP.

Documentation
-------------
See [Blockly Project Page](https://developers.google.com/blockly)

Developing
----------
1. Clone the repo, make sure to use --recursive `git clone --recursive https://github.com/adrianliaw/meteor-blockly`
2. Link the package to your local testing meteor app `ln -s {/path/to/this}/blockly {/path/to/testing/app}/packages/blockly:blockly`

Roadmap
-------
I hope this package can take advantage of Blaze, wrap the original API, create reusable Blaze templates. 
