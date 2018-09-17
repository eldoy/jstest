const Redis = new require('ioredis')
const redis = new Redis()

async function init () {
  redis.set('foo', JSON.stringify({ baner: 'nisse', _id: '12342345' }))
  let result = await redis.get('foo')
  console.log(JSON.parse(result))

  redis.del('foo')

  result = await redis.get('foo')
  console.log(JSON.parse(result))


}

init()
