function to(t) {
  t = t.trim().replace(/'/g, '"').replace(/[{}]/g, '').replace(/ /g, '').split(',')


  return t
}

it('should work', async () => {
  const t = '{ name: \'hello\', bye: { $gt: 5 }, $or: [{ position: 1, name: { lt: 4 }}]}'
  const r = to(t)
  console.log({ r })
  // expect(typeof r === 'object').toBe(true)
})
