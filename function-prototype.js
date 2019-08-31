function hello(name) {
  console.log('hello', name)
  this.name = name
  return this
}

hello.prototype.get = function() {
  console.log('get', this.name)
}


new hello('project').get()
