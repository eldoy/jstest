var fs = require('fs')
var util = require('util')
var server = new (require('sirloin'))()
var loader = require('conficurse')
var root = process.cwd()

var app = loader.load('app')

console.log(util.format(app))

server.get('*', async function (req, res) {
  var pathname = req.pathname
  if (pathname === '/') {
    pathname = '/home.html'
  }
  var [name, ext] = pathname.slice(1).split('.')

  console.log({ name, ext })
  console.log('\n\n\n\n\n\n\n\n\nDONE')

  let result = ''
  switch(ext) {
    case 'css':
      /**
      * Stylesheet files
      */
      res.setHeader('Content-Type', 'text/css')
      result = app.styles[name]
      break;
    case 'js':
      /**
      * Javascript files
      */
      res.setHeader('Content-Type', 'application/javascript')
      result = app.scripts[name]
      break;
    case 'html':
      /**
      * HTML pages
      */
      var page = app.pages[name]
      // console.log({ page, pathname })
      let opt = page.match(/(\$(title|layout):(.+))/g)
      if (opt) {
        opt = opt.map(x => x.split(':').map(x => x.trim()))
        opt = Object.assign({}, ...opt.map(p => ({ [p[0]]: p[1] })))
      }
      // console.log({ opt })
      var layout = app.layout[opt.$layout]
      delete opt.$layout
      for (const o in opt) {
        layout = layout.replace(o, opt[o])
      }
      res.setHeader('Content-Type', 'text/html')
      result = layout.replace('$main', page)
  }
  console.log({ result })
  return String(result)
})
