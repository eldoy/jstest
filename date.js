function formatDate(date) {
  let day = ('0' + date.getDate()).slice(-2)
  let month = ('0' + (date.getMonth() + 1)).slice(-2)
  let year = date.getFullYear()

  return `${day}.${month}.${year}`
}

let date = new Date()
let formatted = formatDate(date)
console.log(formatted)
