var { read } = require('extras')

var html = read('test-html1.html')

// console.log(html)

var dom = tokenize(html)

console.log(dom)

function tokenize(html) {
  var dom = {}
  var chars = html.split('')

  var current = 0

  function parse(content) {
    var level = 0
    for (var i = 0; i < content.length; i++) {
      var char = content[i]
      // console.log(char)
      if (char == '<') {
        var tag = ''
        while (content[++i] != '>') {
          tag += content[i]
        }
        // console.log(tag)
        var [name, atts] = tag.split(' ')
        // console.log({ name, atts })

        var inner = ''
        // Look for end tag
        while (content[++i] != '<' && content[i++] != '/') {
          inner += content[i]
        }

        console.log(inner)

        // Here we need to find the end tag
        // var endTag = `</${name}>`

        // console.log(endTag)

        // Anything from here to either < or </${name}> is text
        // if we see </name>
      }
    }
  }

  parse(chars)

  return dom
}
