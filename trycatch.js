try {
  const data = 1
  throw new Error()
} catch (e) {
  console.log(e)
}

console.log(data)