async function f1() {
  await new Promise(r => setTimeout(r, 1000))
  console.log('done')
}

async function init() {
  console.time('sync 5 times')
  await f1()
  await f1()
  await f1()
  await f1()
  await f1()
  console.timeEnd('sync 5 times')

  console.time('parallel 5 times')
  await Promise.all([f1(), f1(), f1(), f1(), f1()])
  console.timeEnd('parallel 5 times')
}

init()