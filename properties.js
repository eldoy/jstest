class Hello {

  constructor () {
    // const names = Object.getOwnPropertyNames(this)
    // console.log(names)
  }

  baner () {
    console.log('Baner:', this)
  }
}

Hello.prototype.list = function () {
  console.log('List:', this)
}

const h = new Hello()

h.baner()
h.list()
