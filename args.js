const hello = (a, b, ...c) => {
  console.log('Hello', arguments[0])
  console.log('Hello', arguments[1])
  console.log('Hello', arguments[2])
  // console.log(b)
  if (typeof b !== 'string') {
    c.unshift(b)
  }
  console.log(c)
}

const fn = () => {

}

hello('p', 'hello', { class: 'baner' }, fn)

hello('p', { class: 'baner' }, fn)

hello('p')


console.log(typeof hello)
