try {
  throw new Error('%s', 'hello')
} catch (e) {
  console.log(e.message)
}