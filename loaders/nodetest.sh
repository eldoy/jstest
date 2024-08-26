#!/bin/sh
rm -rf repro
mkdir repro
(
    cd repro
    echo 'console.log(1)' > lib.js
    echo 'var lib = require("./lib.js")' > hello.js
    cat -> loader.js <<'EOF'
const { readFile } = require('node:fs/promises');

async function load(url, context, nextLoad) {
  console.log({ url, context })
  const result = await nextLoad(url, context); 
   if (result.format === 'commonjs') { 
     result.source ??= await readFile(new URL(result.responseURL ?? url)); 
   } 
   return result; 
}

async function resolve(specifier, context, nextResolve) {
  console.log({ specifier, context })
  return nextResolve(specifier)
}

module.exports = { load, resolve }
EOF
    node --loader=./loader.js hello.js
)
rm -rf repro

