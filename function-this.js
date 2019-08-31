const connection = {}

function hello(a) {
  connection.a = a
}

function init() {
  console.log(connection.a)
}

const a = {
  hello, init
}

a.hello('baner')
a.init()

