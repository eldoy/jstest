function calc() {
  var n = 100
  var sum = 0
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      sum++
    }
  }
  // console.log({ sum })
  return sum
}

async function asyncRun() {
  return calc()
}

function normalRun() {
  return calc()
}

async function run() {
  var n = 1_000_000

  console.time('Warmup :: run ')

  normalRun()
  await asyncRun()
  await normalRun()

  console.timeEnd('Warmup :: run ')

  console.time('Normal :: run')

  for (var i = 0; i < n; i++) {
    normalRun()
  }

  console.timeEnd('Normal :: run')

  console.time('Async :: run')

  for (var i = 0; i < n; i++) {
    await normalRun()
  }

  console.timeEnd('Async :: run')

  console.time('Await :: run')

  for (var i = 0; i < n; i++) {
    await asyncRun()
  }

  console.timeEnd('Await :: run')
}

run()
