#!/bin/sh
jsdoc . -c scripts/.jsdoc.conf.json -d scripts/~jsdoc
node scripts/jsdoc.js scripts/config.json
rm -r scripts/~jsdoc
node scripts/templates.js scripts/config.json