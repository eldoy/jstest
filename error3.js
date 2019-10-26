try {
  asdf
} catch (e) {
  console.log(e.toString())
  console.log(e.name)
  console.log(e.message)
  console.log(e.stack)
  console.log(e.lineNumber)
  console.log(e.fileName)
  console.log(e.columnNumber)
}