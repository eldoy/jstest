const str = '<!--\n  $title: Home\n  $layout: default\n-->\nThis is the home page.\n'

let m = str.match(/(\$(title|layout):(.+))/g)
if (m) {
  m = m.map(x => x.split(':').map(x => x.trim()))
  m = Object.assign({}, ...m.map(p => ({ [p[0]]: p[1] })))
}

console.log(m)