var path = require('node:path')
var { readFile } = require('node:fs/promises')

const exts = new Set(['.fun', '.html6'])

async function load(url, context, nextLoad) {
  console.log('LOAD')
  var result = await nextLoad(url, context)
  var format = result.format
  console.log({ format })
  if (result.format == 'commonjs') {
    var uri = new URL(result.responseURL ?? url)
    result.source ??= await readFile(uri)
    result.source = String(result.source)
    result.source = result.source.replace('%hello', 'dank')
  }
  return result
}

async function resolve(specifier, context, nextResolve) {
  console.log('RESOLVE')
  console.log({ specifier, context })

  var ext = path.extname(specifier)
  console.log({ ext })
  if (!exts.has(ext)) {
    return nextResolve(specifier)
  }
  console.log('NOT HAV')

  var result = await nextResolve(specifier)

  console.log('RESULT')
  console.log(result)

  var source = `console.log('hello')`

  return {
    format: 'commonjs',
    url: result.url,
    source
  }
}

module.exports = { load, resolve }
