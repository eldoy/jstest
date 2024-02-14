var { read } = require('extras')

var n = 1000
var n = 1

var html = `<!DOCTYPE html><html><head><title>Hello</title></head><body><p>Hello world</p></body></html>`
var html = read('test-html1.html')

// JSDOM
// console.log('Testing JSDOM')
// var jsdom = require('jsdom')

// console.time('jsdom')
// for (var i = 0; i < n; i++) {
//   var dom = new jsdom.JSDOM(html)
//   // dom.window.document.querySelector('p').textContent
// }
// console.timeEnd('jsdom')

console.log('Testing htmlparser2')

console.time('htmlparser2')
var htmlparser = require('htmlparser2')

for (var i = 0; i < n; i++) {
  var dom = htmlparser.parseDocument(html)
  // console.log(dom)

  // var parser = new htmlparser.Parser()
  // parser.write(`<!DOCTYPE html><p>Hello world</p>`)
  // parser.end()
}
console.timeEnd('htmlparser2')

// process.exit()

console.log('Testing cheerio')
var cheerio = require('cheerio')
console.time('cheerio')

for (var i = 0; i < n; i++) {
  var $ = cheerio.load(html)
  $('p').text('Bye moon')
  var result = $.html() // '<!DOCTYPE html><p>Bye moon</p>'
  // console.log(result)
}
console.timeEnd('cheerio')

// var { DOMParser } = require('@xmldom/xmldom')

// console.log('Testing xmldom')
// console.time('xmldom')
// for (var i = 0; i < n; i++) {
//   var doc = new DOMParser().parseFromString(html, 'text/html')
//   // var serialized = new XMLSerializer().serializeToString(doc)
// }
// console.timeEnd('xmldom')
