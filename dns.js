const dns = require('dns')

const domain = "waveorb.com"

function getIp() {
  let ip
  try {
    return new Promise((resolve, reject) => {
      dns.lookup(domain, (err, address, family) => {
        if(err) reject(err);
        resolve(address);
      })
    })
  } catch (e) {}
}

async function run() {
  const ip = await getIp()
  console.log(ip)  
}

run()

