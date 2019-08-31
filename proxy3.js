class Hello {
  constructor (id) {
    this.id = id
  }
}

Hello.prototype.say = function () {
  console.log(this.id)
}

const h1 = new Hello(1234)


h1.say2 = h1.say
h1.say = function () {
  console.log('SAY2')
  this.say2()
}

h1.say()


