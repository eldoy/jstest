const tools = {}

const CONVERT = { days: 864e5, hours: 36e5 }

// Calculate the number of days after a date
tools.timeAfter = (date, format = 'days') => {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  return (new Date().getTime() - date.getTime()) / CONVERT[format]
}
// 2018-11-28T23:44:14+01:00
let res = tools.timeAfter('2018-11-20T16:40:00+01:00')

console.log(res)
