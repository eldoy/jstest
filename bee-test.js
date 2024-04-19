var Queue = require('bee-queue')
var queue = new Queue('example')

var job = queue.createJob({ x: 2, y: 3 })
job.save()
job.on('succeeded', (result) => {
  console.log(`Received result for job ${job.id}: ${result}`)
})

// Process jobs from as many servers or processes as you like
queue.process(async function (job) {
  console.log(`Processing job ${job.id}`)
  // console.log(job)
  return job.data.x + job.data.y
})

var job2 = queue.createJob({ x: 2, y: 3 })
job2.save()
job2.on('succeeded', (result) => {
  console.log(`Received result for job2 ${job.id}: ${result}`)
})
