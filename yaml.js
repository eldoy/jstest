const yaml = require('js-yaml')

const yml = `
project:
  query: !!js/regexp /balls/
`

let obj = yaml.load(yml)

console.log(obj.project.query.constructor)
