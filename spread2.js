function hello (a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

hello(1, 2, 3)

function any (...args) {
  const [fn, path, ...methods] = args.reverse()
  console.log(fn)
  console.log(path)
  console.log(methods)
}

any('get', 'post', '/', function(){})
