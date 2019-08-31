const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
const req = { groups: [ 'guest', 'member', 'owner' ] }
const t = 'async function (req) {\n        return req.groups;\n      }'
const b = t.slice(t.indexOf('{') + 1, t.lastIndexOf('}')).trim()
console.log({ b })

async function run () {
  const a = new AsyncFunction('req', b)
  const r = await a(req)
  console.log({ r })
}

run()
