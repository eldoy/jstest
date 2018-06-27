const pfunc1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pfunc1')
    }, 3000)
  })
}

const pfunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pfunc2')
    }, 5000)
  })
}

// Normal calls
pfunc1().then((res) => {
  console.log('In then 1')
  console.log(res)
})

pfunc2().then((res) => {
  console.log('In then 2')
  console.log(res)
})

// Then
Promise.all([pfunc1(), pfunc2()]).then(([a, b]) => {
  console.log('AB-then:')
  console.log(a, b)
})

// Await
const hello = async () => {
  let [a, b] = await Promise.all([pfunc1(), pfunc2()])
  console.log('AB-await:')
  console.log(a, b)
}
hello()
